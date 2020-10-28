const log4js = require("log4js");

const log = log4js.getLogger("server");

function errorHandler(err, req, res, next) {
	if (err.status >= 500) {
		log.error(`Error app: ${err} at route ${req.originalUrl} with method ${req.method} and IP ${req.headers["cf-connecting-ip"]}`);
		log.error(`Error app stack: ${err.stack}`);
	}

	if (err.status >= 400) {
		log.warn(`Warning app: ${err} at route ${req.originalUrl} with method ${req.method} and IP ${req.headers["cf-connecting-ip"]}`);
	}

	res.status(err.status || 500);
	const message = err.status === 404 ? "Not found" : "Something went wrong!";
	if (req.is("application/json")) {
		res.json({ message });
	} else {
		res.send(message);
	}
}

module.exports = errorHandler;
