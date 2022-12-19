const express = require("express");
const router = express.Router();
const gspController = require("../../controllers/gspController");

router.route("/").get(gspController.GSPgetAll);

module.exports = router;
