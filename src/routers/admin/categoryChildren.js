const express = require("express");
const router = express.Router();

const { validateRequest } = require("../../helpers/validationRouters");
const requestType = require("../../common/requestType");
const checkAccessToken = require("../../middlewares/checkAccessToken");

const {
    createCategory,
    removeCategory,
    detailCategory,
} = require("../../controllers/admin/CategoryChildrenController");

const {
    createCategoryChildrenSchema,
    deleteCategoryChildrenSchema,
    detailCategoryChildrenSchema,
} = require("../../validations/categoryChildrenSchema");

router.post(
    "/category-children/create",
    [validateRequest(createCategoryChildrenSchema, requestType.body)],
    checkAccessToken,
    createCategory
);
router.get(
    "/category-children/delete/:id",
    [validateRequest(deleteCategoryChildrenSchema, requestType.params)],
    checkAccessToken,
    removeCategory
);
router.get(
    "/category-children/detail/:id",
    [validateRequest(detailCategoryChildrenSchema, requestType.params)],
    checkAccessToken,
    detailCategory
);

module.exports = router;
