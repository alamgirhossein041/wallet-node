const express = require("express");
const router = express.Router();

const { validateRequest } = require("../../helpers/validationRouters");
const requestType = require("../../common/requestType");
const checkAccessToken = require("../../middlewares/checkAccessToken");

const { createCategory } = require("../../controllers/admin/CategoryChildrenController");

const { createCategoryChildrenSchema } = require("../../validations/categoryChildrenSchema");

router.post(
    "/category-children/create",
    [validateRequest(createCategoryChildrenSchema, requestType.body)],
    checkAccessToken,
    createCategory
);

module.exports = router;
