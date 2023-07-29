const express = require ("express");
const { newCity, getCities, getSingleCity, uploadimage } = require("../controllers/cityControllers");
const router = express.Router();
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });
//Routes
router.route("/admin/city/new").post(isAuthenticatedUser,authorizeRoles("admin"),newCity);
router.route("/city").get(getCities);
router.route("/city/:id").get(getSingleCity);
router.route("/upload_image").post(upload.single("image"), uploadimage)


module.exports = router;