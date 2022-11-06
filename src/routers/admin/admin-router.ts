import express = require("express");
const router = express.Router();

// Controller
const { login, register } = require("../../controllers/AuthController");
const { addRole } = require("../../controllers/admin/RoleController");

// Middlewares
const checkAccessToken = require("../../middlewares/checkAccessToken");

// Authentication
router.post("/login", login);
router.post("/register", register);

// Actions
router.post("/add-role", checkAccessToken, addRole);

module.exports = router;
