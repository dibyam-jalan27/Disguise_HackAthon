const express = require ("express");
const { newCity, getCities, getSingleCity, uploadimage } = require("../controllers/cityControllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/admin/city/new").post(isAuthenticatedUser,newCity);
router.route("/city").get(getCities);
router.route("/city/:id").get(getSingleCity);


module.exports = router;