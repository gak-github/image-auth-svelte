const express = require('express');
const account = require("./routes/account");
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');
const serverless = require('serverless-http');
const app = express();

app.use(express.json());
app.use(cookieParser());
// connecting the Mongo DB during server start up
connectDB();

app.use("/.netlify/functions/express", account);

module.exports.handler = serverless(app);