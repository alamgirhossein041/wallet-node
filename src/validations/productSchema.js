const joi = require("joi");
const requestType = require("../common/requestType");

const createProductSchema = joi.object({
    productName: joi.string().required(),
    productSlug: joi.string().required(),
    productDesc: joi.string(),
    productContent: joi.string().required(),
    productPrice: joi.string().required(),
    productInventory: joi.string().required(),
});

module.exports = { createProductSchema };
