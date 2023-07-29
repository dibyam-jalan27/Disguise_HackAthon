const express = require ("express");
const { registerUser, loginUser, logout } = require("../controllers/userControllers");
const router = express.Router();

//Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

module.exports = router;
