const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: [true, "Please enter valid email address"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Account", AccountSchema);