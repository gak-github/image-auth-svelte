const _ = require('lodash');
const Account = require("../models/Account");
let localStorage = require('../config/local-storage');
const isDev = !process.env.MONGO_PWD;

// @desc Get images
// @route GET /api/v1/account
// @access Public
const getAccount = async (req) => {
  const { email } = req.body.email;
  try {
    if (isDev) {
      let localData = _.cloneDeep(localStorage);
      let localAccount = localData.find((acc) => acc.email === email);
      return localAccount;
    }

    const account = await Account.find();
    return account;
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: error.message,
    })
  }
};

// @desc To add a transaction
// @route POST /api/v1/transations
// @access Public
const createOrLogin = async (req, res) => {
  const { email, imageId, isLoginSubmit } = req.body;
  const account = {
    email,
    imageId,
    device: req.device.type,
    ip: req.ipInfo.ip,
    platform: req.useragent.platform
  };

  const existingAccount = await getAccount(req);
  if (existingAccount && isLoginSubmit && imageId) {
    return res.status(201).json({
      success: true,
      data: { isAuthenticated: true }
    }); 
  } else if (existingAccount) {
    return res.status(201).json({
      success: true,
      data: { isAccountExist: true }
    });
  }

  if (isDev) {
    localStorage.push(account);
    return res.status(201).json({
      success: true,
      data: { isAccountCreated: true }
    });
  }

  try {
    const account = await Account.create(account)
    return res.status(201).json({
      success: true,
      data: { isAccountCreated: true }
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
};

module.exports = {
  createOrLogin,
  getAccount
};