const express = require("express");
const router = express.Router();

const advertController = require("../controllers/advertController")

router.get("/avert", advertController.index);

module.exports = router;