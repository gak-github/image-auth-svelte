const express = require("express");
const router = express.Router();
const {
  checkAccount,
  getAccountImages
} = require("../controllers/account");

router
  .route("/")
  .get(getAccountImages)
  .post(checkAccount)

module.exports = router;