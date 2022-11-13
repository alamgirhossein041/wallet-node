const express = require("express");
const router = express.Router();

const requestType = require("../../common/requestType");

// Controller
const { login, register, detail } = require("../../controllers/AuthController");
const { createRole } = require("../../controllers/admin/RoleController");
const {
    createCategory,
    updateCategory,
    detailCategory,
    removeCategory,
    listCategory,
} = require("../../controllers/admin/CategoryController");
const { createPromotion, updatePromotion, removePromotion } = require("../../controllers/admin/PromotionController");
const { createCoupon, updateCoupon, removeCoupon } = require("../../controllers/admin/CouponController");

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
const {
    createPromotionSchema,
    updatePromotionSchema,
    deletePromotionSchema,
} = require("../../validations/promotionSchema");
const { createCouponSchema, updateCouponSchema, deleteCouponSchema } = require("../../validations/couponSchema");

// Authentication
router.post("/login", validateRequest(userLoginSchema, requestType.body), login);
router.post("/register", validateRequest(userRegisterSchema, requestType.body), register);
router.get("/detail", checkAccessToken, detail);

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
router.get(
    "/promotion/delete/:id",
    [validateRequest(deletePromotionSchema, requestType.params), checkAccessToken],
    removePromotion
);

// Coupon
router.post("/coupon/create", [validateRequest(createCouponSchema, requestType.body), checkAccessToken], createCoupon);
router.post("/coupon/update", [validateRequest(updateCouponSchema, requestType.body), checkAccessToken], updateCoupon);
router.get(
    "/coupon/delete/:id",
    [validateRequest(deleteCouponSchema, requestType.params), checkAccessToken],
    removeCoupon
);

module.exports = router;
