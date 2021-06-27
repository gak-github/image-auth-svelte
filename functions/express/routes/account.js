const express = require("express");
const router = express.Router();
const {
  checkAccount,
  getAccount
} = require("../controllers/account");

router
  .route("/")
  .get(getAccount)
  .post(checkAccount)

module.exports = router;