const express = require("express");
const router = express.Router();
const {
  createOrLogin,
  getAccount
} = require("../controllers/account");

router
  .route("/")
  .get(getAccount)
  .post(createOrLogin)

module.exports = router;