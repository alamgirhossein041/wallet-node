import { Request, Response } from "express";
import { STATUS } from "../../common/statusCode";

const Promotion = require("../../models/Promotion");

const createPromotion = async (req: Request, res: Response) => {
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

module.exports = { createPromotion };
