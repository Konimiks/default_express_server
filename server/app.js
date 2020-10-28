const config = require("config");
const express = require("express");
const fileUpload = require("express-fileupload");
const log4js = require("log4js");
const compression = require("compression");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const createError = require("http-errors");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const { MongoConnection } = require("./helpers/connections/mongoConnection");

const routes = require("./routes");

const log = log4js.getLogger("server");

process.on("uncaughtException", (err) => {
	log.error(`uncaughtException: ${err}`);
});

process.on("unhandledRejection", (err) => {
	log.error(`unhandledRejection: ${err}`);
});

/**
 * Connect to MongoDB.
 */
const mongoClient = new MongoConnection();
mongoClient.connect();

const app = express();

// if (process.env.ENABLE_SHARE_STATIC) {
// 	app.use(express.static("media"));
// }

app.use(fileUpload(config.get("fileUploader")));
app.use(compression()); // use gzip compression
app.use(cookieParser(config.get("secret_key"))); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());

app.use("/api", routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404));
});
app.use(errorHandler);

module.exports = { app };
