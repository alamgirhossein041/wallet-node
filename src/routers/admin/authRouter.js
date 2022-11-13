const express = require("express");
const router = express.Router();

const { validateRequest } = require("../../helpers/validationRouters");
const requestType = require("../../common/requestType");
const checkAccessToken = require("../../middlewares/checkAccessToken");

const { login, register, detail } = require("../../controllers/AuthController");

const { userLoginSchema, userRegisterSchema } = require("../../validations/userSchema");

// Authentication
router.post("/login", validateRequest(userLoginSchema, requestType.body), login);
router.post("/register", validateRequest(userRegisterSchema, requestType.body), register);
router.get("/detail", checkAccessToken, detail);

module.exports = router;
