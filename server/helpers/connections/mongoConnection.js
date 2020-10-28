const config = require("config");
const mongoose = require("mongoose");
const log4js = require("log4js");

const log = log4js.getLogger("server");

class MongoConnection {
	constructor() {
		this.mongooseConnection = null;
	}

	async connect() {
		if (this.mongooseConnection) {
			return null;
		}
		try {
			this.mongooseConnection = await mongoose.connect(config.get("mongoose.connectionUrl"), config.get("mongoose.options"));
			this.mongooseConnection.connection.on("error", (error) => {
				log.error(`Mongo error: ${error}`);
			});
			this.mongooseConnection.connection.on("disconnected", () => {
				log.info("Mongo disconnected.");
			});
			log.info(`Mongo successfully connected.`);
		} catch (err) {
			log.fatal(`Mongo connection error ${err}`);
			process.exit(1);
		}
		return true;
	}

	getConnection() {
		return this.mongooseConnection.connection;
	}
}
module.exports.MongoConnection = MongoConnection;
