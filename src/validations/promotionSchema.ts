import joi = require("joi");
const requestType = require("../common/requestType");

const createPromotionSchema = joi.object().keys({
    [requestType.body]: {
        promotionPercent: joi.string().min(1).max(2).required(),
        productId: joi.string().min(0).required(),
    },
});

const updatePromotionSchema = joi.object().keys({
    [requestType.body]: {
        promotionId: joi.string().min(1).required(),
        promotionPercent: joi.string().min(1).max(2).required(),
        productId: joi.string().min(0).required(),
    },
});

module.exports = { createPromotionSchema, updatePromotionSchema };
