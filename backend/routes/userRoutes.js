const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotpassword,
  verifyotp,
  resetPassword,
  getUserDetails,
  getUserCities,
  updateCities,
  deleteCity,
  getUserItinerary,
  updateItinerary,
} = require("../controllers/userControllers");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

//Routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/sendotp").post(forgotpassword);
router.route("/verifyotp").post(verifyotp);
router.route("/resetpassword/:token").post(resetPassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/cities/:userId").get(getUserCities);
router.route("/cities/:userId").post(updateCities);
router.route("/cities/:userId/:cityId").delete(deleteCity);
router.route("/itinerary/:userId").get(getUserItinerary);
router.route("/itinerary/:userId").post(updateItinerary);

module.exports = router;
