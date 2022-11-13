const express = require("express");
const router = express.Router();

const { validateRequest } = require("../../helpers/validationRouters");
const requestType = require("../../common/requestType");
const checkAccessToken = require("../../middlewares/checkAccessToken");

const {
    createCategory,
    updateCategory,
    detailCategory,
    removeCategory,
    listCategory,
} = require("../../controllers/admin/CategoryController");

const {
    createCategorySchema,
    updateCategorySchema,
    getDetailCategorySchema,
    deleteCategorySchema,
} = require("../../validations/categorySchema");

router.get("/category/list", checkAccessToken, listCategory);
router.post(
    "/category/create",
    [validateRequest(createCategorySchema, requestType.body), checkAccessToken],
    createCategory
);
router.post(
    "/category/update",
    [validateRequest(updateCategorySchema, requestType.body), checkAccessToken],
    updateCategory
);
router.get(
    "/category/:id",
    [validateRequest(getDetailCategorySchema, requestType.params), checkAccessToken],
    detailCategory
);
router.get(
    "/category/delete/:id",
    [validateRequest(deleteCategorySchema, requestType.params), checkAccessToken],
    removeCategory
);

module.exports = router;
