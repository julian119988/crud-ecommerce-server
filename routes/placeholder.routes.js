const router = require("express").Router();
const { hardcodeDB } = require("../controllers/placeholder.controllers");
const { isAdmin } = require("../middlewares/auth.middlewares");

router.post("/", isAdmin, hardcodeDB);

module.exports = router;
