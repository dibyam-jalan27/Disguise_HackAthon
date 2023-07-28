const express = require ("express");
const { registerUser } = require("../controllers/userControllers");
const router = express.Router();

//Routes
router.route("/register").post(registerUser);

module.exports = router;
