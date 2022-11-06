import express = require("express");
const router = express.Router();

// Controller
const { login, register } = require("../../controllers/AuthController");
const { addRole } = require("../../controllers/admin/RoleController");
const { create, update, detail, remove, list } = require("../../controllers/admin/CategoryController");

// Middlewares
const checkAccessToken = require("../../middlewares/checkAccessToken");

// Authentication
router.post("/login", login);
router.post("/register", register);

// Role
router.post("/add-role", checkAccessToken, addRole);

// Category
router.get("/category/list", checkAccessToken, list);
router.post("/create-category", checkAccessToken, create);
router.post("/update-category", checkAccessToken, update);
router.get("/category/:id", checkAccessToken, detail);
router.get("/category/delete/:id", checkAccessToken, remove);

module.exports = router;
