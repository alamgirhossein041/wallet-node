const joi = require("joi");
const requestType = require("../common/requestType");

const createCategoryChildrenSchema = joi.object().keys({
    [requestType.body]: {
        categoryName: joi.string().max(20).required(),
        categorySlug: joi.string().max(50).required(),
        categoryId: joi.string().max(2).required(),
    },
});

const deleteCategoryChildrenSchema = joi.object().keys({
    [requestType.params]: {
        id: joi.string().max(2).required(),
    },
});

module.exports = {
    createCategoryChildrenSchema,
    deleteCategoryChildrenSchema,
};
