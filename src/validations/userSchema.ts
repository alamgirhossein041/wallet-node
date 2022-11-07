import joi = require("joi");
const requestType = require("../common/requestType");

const userLoginSchema = joi.object().keys({
    [requestType.body]: {
        username: joi.string().min(6).max(30).required(),
        password: joi.string().min(6).max(30).required(),
    },
});

const userRegisterSchema = joi.object().keys({
    [requestType.body]: {
        username: joi.string().min(6).max(30).required(),
        password: joi.string().min(6).max(30).required(),
    },
});

module.exports = { userLoginSchema, userRegisterSchema };
