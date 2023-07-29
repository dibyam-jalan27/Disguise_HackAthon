const express = require ("express");
const { registerUser, loginUser, logout ,forgotpassword, verifyotp } = require("../controllers/userControllers");
const router = express.Router();

//Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/sendotp").post(forgotpassword);
router.route("/verifyotp").post(verifyotp);

module.exports = router;
