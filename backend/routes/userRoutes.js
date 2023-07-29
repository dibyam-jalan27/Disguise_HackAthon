const express = require ("express");
const { registerUser, loginUser, logout ,forgotpassword, verifyotp, resetPassword, getUserDetails } = require("../controllers/userControllers");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

//Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/sendotp").post(forgotpassword);
router.route("/verifyotp").post(verifyotp);
router.route("/resetpassword/:token").post(resetPassword);
router.route("/me").get(isAuthenticatedUser,getUserDetails);

module.exports = router;
