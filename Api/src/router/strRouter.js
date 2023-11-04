const express = require("express");
const router = express.Router();

const strController = require("../controller/strController")

router.get("/", strController.getAllStr)
router.post("/", strController.postAllStr)

module.exports = router