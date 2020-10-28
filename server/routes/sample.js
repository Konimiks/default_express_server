const { Router } = require("express");
const controller = require("../controllers");

const router = new Router();

router.get("/", controller.sample.sampleController);

module.exports = router;
