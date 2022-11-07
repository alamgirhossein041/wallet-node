import joi = require("joi");
const requestType = require("../common/requestType");

const getListCategorySchema = joi.object().keys({
    [requestType.query]: {
        page: joi.string().required(),
        limit: joi.string().required(),
    },
});

module.exports = { getListCategorySchema };
