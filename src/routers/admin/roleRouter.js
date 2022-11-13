const express = require("express");
const router = express.Router();

const { validateRequest } = require("../../helpers/validationRouters");
const requestType = require("../../common/requestType");
const checkAccessToken = require("../../middlewares/checkAccessToken");

const { createRole } = require("../../controllers/admin/RoleController");

router.post("/role/create", checkAccessToken, createRole);

module.exports = router;
