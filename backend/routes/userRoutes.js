const express = require ("express");
const router = express.router;

//Routes
router.route("/register").post(registerUser);

module.exports = router;
