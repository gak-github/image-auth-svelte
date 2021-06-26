const _ = require('lodash');
const Account = require("../models/Account");
let localStorage = require('../config/local-storage');
const isDev = !process.env.MONGO_PWD;

// @desc Get images
// @route GET /api/v1/account
// @access Public
exports.getAccountImages = async (req, res, next) => {
  try {
    if (isDev) {
      let localData = _.cloneDeep(localStorage);
      return res.status(200).json({
        success: true,
        count: localData.length,
        data: localData,
      });
    }

    const images = await Account.find();
    return res.status(200).json({
      success: true,
      data: images,
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
  console.log("=======req.device===", req.device.type);
  console.log("======req.useragent=====", req.useragent.platform);
  console.log("======req.ipInfo=====", req.ipInfo.ip);

  console.log("=======ip====", req.headers['x-forwarded-for'] || req.connection.remoteAddress);
  const { email } = req.body
  if (isDev) {
    let newData = {
      _id: req.body.id || '12345',
      email
    };
    localStorage.push(newData);
    return res.status(201).json({
      success: true,
      data: newData,
    });
  }

  try {
    const account = await Account.create(req.body)
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