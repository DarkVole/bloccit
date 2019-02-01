const express = require("express");
const router = express.Router();

const advertController = require("../controllers/advertController")

router.get("/adverts", advertController.index);
router.get("/adverts/new", advertController.new);
router.post("/adverts/create", advertController.create);
router.get("/adverts/:id", advertController.show);
router.post("/adverts/:id/destroy", advertController.destroy);
router.get("/adverts/:id/edit", advertController.edit);
router.post("/adverts/:id/update", advertController.update);
//router.get("adverts/:id/advert", advertController.advert);



module.exports = router;