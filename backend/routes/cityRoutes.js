const express = require ("express");
const { newCity, getCities, getSingleCity } = require("../controllers/cityControllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

//Routes
router.route("/admin/city/new").post(isAuthenticatedUser,authorizeRoles("admin"),newCity);
router.route("/city").get(getCities);
router.route("/city/:id").get(getSingleCity);


module.exports = router;