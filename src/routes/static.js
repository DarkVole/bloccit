const express = require("express");
const router = express.Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);
//router.post("/advert", staticController.advert);

module.exports = router;