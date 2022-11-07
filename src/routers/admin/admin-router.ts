import express = require("express");
const router = express.Router();

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

// Authentication
router.post("/login", login);
router.post("/register", register);

// Role
router.post("/role/create", checkAccessToken, createRole);

// Category
router.get("/category/list", checkAccessToken, listCategory);
router.post("/category/create", checkAccessToken, createCategory);
router.post("/category/update", checkAccessToken, updateCategory);
router.get("/category/:id", checkAccessToken, detailCategory);
router.get("/category/delete/:id", checkAccessToken, removeCategory);

// Promotion
router.post("/promotion/create", checkAccessToken, createPromotion);
router.post("/promotion/update", checkAccessToken, updatePromotion);

module.exports = router;
