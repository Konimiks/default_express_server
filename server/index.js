const http = require("http");
const config = require("config");
const log4js = require("log4js");

const { app } = require("./app");

const server = http.createServer(app);

log4js.configure(config.get("log4jsConfig"));
const log = log4js.getLogger("server");

server.listen(config.get("applicationPort"), () => log.info(`Server is running on port: ${config.get("applicationPort")}`));
