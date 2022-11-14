const express = require("express");
const router = express.Router();

const { validateRequest } = require("../../helpers/validationRouters");
const requestType = require("../../common/requestType");
const checkAccessToken = require("../../middlewares/checkAccessToken");

const { createProductSchema } = require("../../validations/productSchema");
const { createProduct } = require("../../controllers/admin/ProductController");

router.post(
    "/product/create",
    [validateRequest(createProductSchema, requestType.formData), checkAccessToken],
    createProduct
);

module.exports = router;
