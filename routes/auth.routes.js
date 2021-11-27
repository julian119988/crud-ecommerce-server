const router = require("express").Router();
const { addUser, loginUser } = require("../controllers/auth.controllers");
const { isAuthorized } = require("../middlewares/auth.middlewares");

router.post("/addUser", isAuthorized, addUser);
router.post("/loginUser", loginUser);
router.get("/checkAuth", isAuthorized, (req, res) => res.send("IS AUTH"));

module.exports = router;
