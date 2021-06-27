const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: [true, "Please enter valid email address"],
  },
  device: {
    type: String,
  },
  platform: {
    type: String
  },
  ip: {
    type: String
  },
  imageId: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Account", AccountSchema);