const router = require("express").Router();
const {
    signUp,
    addAdminUser,
    loginUser,
    getUsers,
    deleteUser,
} = require("../controllers/auth.controllers");
const { isAuthorized, isAdmin } = require("../middlewares/auth.middlewares");

router.post("/signUp", signUp);
router.post("/addAdminUser", isAdmin, addAdminUser);
router.post("/addUser", isAdmin, addAdminUser);
router.post("/loginUser", loginUser);
router.get("/checkAuth", isAuthorized, (req, res) => res.send("IS AUTH"));
router.get("/allUsers", isAdmin, getUsers);
router.delete("/user/:id", isAdmin, deleteUser);

module.exports = router;
