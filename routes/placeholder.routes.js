const router = require("express").Router();
const { hardcodeDB } = require("../controllers/placeholder.controllers");

router.post("/", hardcodeDB);

module.exports = router;
