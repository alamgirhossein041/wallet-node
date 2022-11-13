const { STATUS } = require("../../common/statusCode");

const Promotion = require("../../models/Promotion");

const createPromotion = async (req, res) => {
    const { promotionPercent, productId } = req.body;

    const [promotion, created] = await Promotion.findOrCreate({
        where: {
            productId: productId,
        },
        defaults: {
            promotionPercent: promotionPercent,
        },
    });

    if (created) {
        return res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Created promotion successfully!",
            },
        });
    } else {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Promotion exist",
            },
        });
    }
};

const updatePromotion = async (req, res) => {
    const { promotionId, promotionPercent, productId } = req.body;

    const updated = await Promotion.update(
        {
            promotionPercent,
            productId,
        },
        {
            where: {
                id: promotionId,
            },
        }
    );

    if (updated) {
        return res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Promotion updated!",
            },
        });
    } else {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Promotion updated failed!",
            },
        });
    }
};

const removePromotion = async (req, res) => {
    const promotionId = req.params.id;

    const remove = await Promotion.destroy({
        where: {
            id: promotionId,
        },
    });

    if (remove) {
        return res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Delete promotion successfully!",
                data: "",
            },
        });
    } else {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Delete promotion failed!",
                data: "",
            },
        });
    }
};

module.exports = { createPromotion, updatePromotion, removePromotion };
