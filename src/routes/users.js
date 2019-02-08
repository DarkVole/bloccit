const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController")

router.get("/users/sign_in", userController.signUp);

module.exports = router;