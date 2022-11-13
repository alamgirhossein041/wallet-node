const joi = require("joi");
const requestType = require("../common/requestType");
const { onlyNumber } = require("../common/regex");

const createCouponSchema = joi.object().keys({
    [requestType.body]: {
        couponName: joi.string().min(3).required(),
        couponValue: joi.string().required(),
        couponType: joi.string().required(),
    },
});

const updateCouponSchema = joi.object().keys({
    [requestType.body]: {
        couponId: joi.string().min(1).required(),
        couponName: joi.string().max(30).required(),
        couponValue: joi.string().required(),
    },
});

const deleteCouponSchema = joi.object().keys({
    [requestType.params]: {
        id: joi.string().min(1).pattern(onlyNumber).required(),
    },
});

module.exports = { createCouponSchema, updateCouponSchema, deleteCouponSchema };
