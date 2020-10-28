const { Router } = require("express");
const sampleRoutes = require("./sample");

const router = new Router();

router.use((req, res, next) => {
	res.setHeader("Content-Type", "application/json");
	return next();
});

router.use("/sample", sampleRoutes);

module.exports = router;
