const express = require('express');
const account = require("./routes/account");
const connectDB = require("./config/db");
const cookieParser = require('cookie-parser');
const serverless = require('serverless-http');
const useragent = require('express-useragent');
const device = require('express-device');
const expressip = require('express-ip');
const app = express();

app.use(express.json());
app.use(useragent.express())
app.use(device.capture());
app.use(cookieParser());
app.use(expressip().getIpInfoMiddleware);

// connecting the Mongo DB during server start up
connectDB();

app.use("/.netlify/functions/express", account);

module.exports.handler = serverless(app);