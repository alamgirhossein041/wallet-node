import express = require("express");
const router = express.Router();

// Controller
const { login, register } = require("../../controllers/AuthController");
const { addRole } = require("../../controllers/admin/RoleController");
const { create, update, detail } = require("../../controllers/admin/CategoryController");

// Middlewares
const checkAccessToken = require("../../middlewares/checkAccessToken");

// Authentication
router.post("/login", login);
router.post("/register", register);

// Actions
router.post("/add-role", checkAccessToken, addRole);
router.post("/create-category", checkAccessToken, create);
router.post("/update-category", checkAccessToken, update);
router.get("/category/:id", checkAccessToken, detail);

module.exports = router;
