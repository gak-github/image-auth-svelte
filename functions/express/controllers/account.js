const _ = require('lodash');
const Account = require("../models/Account");
let localStorage = require('../config/local-storage');
const isDev = !process.env.MONGO_PWD;

// @desc Get images
// @route GET /api/v1/account
// @access Public
const getAccount = async (req) => {
  const { email } = req.body;
  try {
    if (isDev) {
      let localData = _.cloneDeep(localStorage);
      let localAccount = localData.find((acc) => acc.email === email) || {};
      return localAccount;
    }

    const accounts = await Account.find();
    const account = accounts.find((acc) => acc.email === email) || {};
    return account;
  } catch (error) {
    return res.status(500).json({
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
    email: email.toLowerCase(),
    imageId,
    device: req.device.type,
    ip: req.ipInfo.ip,
    platform: req.useragent.platform
  };
  const data = await getAccount(req);
  let isAuthenticated = false;
  if (data.email && isLoginSubmit && imageId) {
    if (account.email === data.email.toLowerCase() && 
      account.ip === data.ip && 
      account.imageId === data.imageId &&
      account.platform === data.platform) {
        isAuthenticated = true;
    }
    return res.status(201).json({
      success: true,
      data: { isAuthenticated }
    }); 
  } else if (data.email === account.email) {
    return res.status(201).json({
      success: true,
      data: { isAccountExist: true }
    });
  } else if (isLoginSubmit) {
    return res.status(201).json({
      success: true,
      data: { isAuthenticated }
    }); 
  }

  // new acccount creation goes here
  if (isDev) {
    localStorage.push(account);
    return res.status(201).json({
      success: true,
      data: { isAccountCreated: true }
    });
  }

  try {
    const result = await Account.create(account);
    return res.status(201).json({
      success: true,
      data: { isAccountCreated: true }
    })
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(val => val.message)
      return res.status(500).json({
        success: false,
        error: messages,
      })
    } else {
      return res.status(500).json({
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