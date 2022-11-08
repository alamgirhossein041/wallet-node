import { Request, Response } from "express";
import { STATUS } from "../../common/statusCode";

const Coupon = require("../../models/Coupon");

const createCoupon = async (req: Request, res: Response) => {
    const { couponName, couponValue, couponType } = req.body;

    const [coupon, created] = await Coupon.findOrCreate({
        where: {
            couponName: couponName,
        },
        defaults: {
            couponValue,
            couponType,
        },
    });

    if (created) {
        return res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Created coupon successfully!",
            },
        });
    } else {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Coupon exist",
            },
        });
    }
};

const updateCoupon = async (req: Request, res: Response) => {
    const { couponId, couponName, couponValue } = req.body;

    const updated = await Coupon.update(
        {
            couponName,
            couponValue,
        },
        {
            where: {
                id: couponId,
            },
        }
    );

    if (updated) {
        return res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Coupon updated!",
            },
        });
    } else {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Coupon updated failed!",
            },
        });
    }
};

const removeCoupon = async (req: Request, res: Response) => {
    const couponId = req.params.id;

    const remove = await Coupon.destroy({
        where: {
            id: couponId,
        },
    });

    if (remove) {
        return res.send({
            statusCode: STATUS.SUCCESS,
            data: {
                message: "Delete coupon successfully!",
                data: "",
            },
        });
    } else {
        return res.send({
            statusCode: STATUS.ERROR,
            data: {
                message: "Delete coupon failed!",
                data: "",
            },
        });
    }
};

module.exports = { createCoupon, updateCoupon, removeCoupon };
