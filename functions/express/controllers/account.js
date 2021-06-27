const _ = require('lodash');
const Account = require("../models/Account");
let localStorage = require('../config/local-storage');
const isDev = !process.env.MONGO_PWD;

// @desc Get images
// @route GET /api/v1/account
// @access Public
exports.getAccount = async (req, res, next) => {
  try {
    if (isDev) {
      let localData = _.cloneDeep(localStorage);
      return res.status(200).json({
        success: true,
        count: localData.length,
        data: localData,
      });
    }

    const account = await Account.find();
    return res.status(200).json({
      success: true,
      data: account,
    })
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: error.message,
    })
  }
}

// @desc To add a transaction
// @route POST /api/v1/transations
// @access Public
exports.checkAccount = async (req, res, next) => {
  const { email, imageId, isLoginSubmit } = req.body
  const account = {
    email,
    imageId,
    device: req.device.type,
    ip: req.ipInfo.ip,
    platform: req.useragent.platform
  };

  if (isDev) {
    localStorage.push(account);
    return res.status(201).json({
      success: true,
      data: account
    });
  }

  try {
    const account = await Account.create(account)
    return res.status(201).json({
      success: true,
      data: account,
    })
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(val => val.message)
      return res.send(500).json({
        success: false,
        error: messages,
      })
    } else {
      return res.send(500).json({
        success: false,
        error: "Server Error",
      })
    }
  }
}