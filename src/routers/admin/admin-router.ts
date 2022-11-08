import express = require("express");
const router = express.Router();

const requestType = require("../../common/requestType");

// Controller
const { login, register } = require("../../controllers/AuthController");
const { createRole } = require("../../controllers/admin/RoleController");
const {
    createCategory,
    updateCategory,
    detailCategory,
    removeCategory,
    listCategory,
} = require("../../controllers/admin/CategoryController");
const { createPromotion, updatePromotion } = require("../../controllers/admin/PromotionController");

// Middlewares
const checkAccessToken = require("../../middlewares/checkAccessToken");
const { validateRequest } = require("../../helpers/validationRouters");

// Schema
const { userLoginSchema, userRegisterSchema } = require("../../validations/userSchema");
const {
    getListCategorySchema,
    createCategorySchema,
    updateCategorySchema,
    getDetailCategorySchema,
    deleteCategorySchema,
} = require("../../validations/categorySchema");
const { createPromotionSchema, updatePromotionSchema } = require("../../validations/promotionSchema");

// Authentication
router.post("/login", validateRequest(userLoginSchema, requestType.body), login);
router.post("/register", validateRequest(userRegisterSchema, requestType.body), register);

// Role
router.post("/role/create", checkAccessToken, createRole);

// Category
router.get(
    "/category/list",
    [validateRequest(getListCategorySchema, requestType.query)],
    checkAccessToken,
    listCategory
);
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

// Promotion
router.post(
    "/promotion/create",
    [validateRequest(createPromotionSchema, requestType.body), checkAccessToken],
    createPromotion
);
router.post(
    "/promotion/update",
    [validateRequest(updatePromotionSchema, requestType.body), checkAccessToken],
    updatePromotion
);

module.exports = router;
