const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Welcome to Bloccit");
});

router.get("/marco", (req, res, next) => {
  res.send("marco");
}); // This is the route that is being tested in this assignment


module.exports = router;