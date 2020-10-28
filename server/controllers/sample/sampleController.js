const log4js = require("log4js");

const log = log4js.getLogger("server");

module.exports = async (req, res) => {
	const responseJSON = {
		success: false,
		data: {},
		error: "",
	};
	try {
		responseJSON.success = true;
		return res.status(200).json(responseJSON);
	} catch (err) {
		log.error(`Error at sample sampleController: \n${err}`);
		return res.status(500).json(responseJSON);
	}
};
