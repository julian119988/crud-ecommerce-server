const { tables } = require("../models/index");
const { Users } = tables;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
    signUp: async (req, res) => {
        const { email, password1, password2 } = req.body;
        try {
            if (!email || !password1 || !password2)
                throw new Error("Some data is missing.");
            if (password2 !== password1)
                throw new Error("Passwords do not match.");
            if (!isEmailValid(email)) {
                throw new Error("Email not properly formatted");
            }
            const areUsersYet = await Users.findAll();
            const hashedPassword = await bcrypt.hash(password1, 10);
            const newUser = await Users.create({
                email,
                password: hashedPassword,
                password2,
                admin: areUsersYet[0] === undefined ? 1 : 0,
            });
            const newUserIsSaved = await newUser.save();
            const accessToken = jwt.sign(
                {
                    email,
                    admin: areUsersYet[0] === undefined ? true : false,
                },
                process.env.TOKEN_SECRET,
                { expiresIn: "1d" }
            );
            res.send({
                admin: newUserIsSaved.admin,
                email: newUserIsSaved.email,
                accessToken,
            });
        } catch ({ message }) {
            res.status(400).send({ message });
        }
    },
    addAdminUser: async (req, res) => {
        const { email, password1, password2 } = req.body;
        try {
            if (!email || !password1 || !password2)
                throw new Error("Some data is missing.");
            if (password2 !== password1)
                throw new Error("Passwords do not match.");
            if (!isEmailValid(email)) {
                throw new Error("Email not properly formatted");
            }
            const hashedPassword = await bcrypt.hash(password1, 10);
            const newUser = await Users.create({
                email,
                password: hashedPassword,
                admin: 1,
            });
            const newUserIsSaved = await newUser.save();
            res.send(newUserIsSaved);
        } catch ({ message }) {
            res.status(400).send({ message });
        }
    },
    loginUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            if (!email || !password) throw new Error("Some data is missing.");
            const storedUser = await Users.findOne({ where: { email } });
            const result = await bcrypt.compare(password, storedUser.password);
            if (!result) throw new Error("Email or password were incorrect.");
            const accessToken = jwt.sign(
                {
                    email,
                    admin: storedUser.admin ? true : false,
                },
                process.env.TOKEN_SECRET,
                { expiresIn: "1d" }
            );
            res.send({
                accessToken,
                email,
                admin: storedUser.admin ? true : false,
            });
        } catch ({ message }) {
            res.status(400).send({ message });
        }
    },
    getUsers: async (req, res) => {
        try {
            const allUsers = await Users.findAll();
            res.send(allUsers);
        } catch (err) {
            res.status(400).send({ message: "Something went wrong!" });
        }
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;
        const { email } = req.body;
        try {
            const ownAccount = await Users.findOne({
                where: { id: parseInt(id) },
            });
            if (email === ownAccount.email)
                throw new Error("You can't delete your own account.");
            const isUserDeleted = await Users.destroy({
                where: {
                    id: parseInt(id),
                },
            });
            if (!isUserDeleted) throw new Error("User doesn't exist");
            res.send({ message: "User deleted successfully" });
        } catch ({ message }) {
            res.status(400).send({ message });
        }
    },
};

function isEmailValid(email) {
    const emailRegex =
        /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

    if (email.length > 254) return false;

    var valid = emailRegex.test(email);
    if (!valid) return false;

    var parts = email.split("@");
    if (parts[0].length > 64) return false;

    var domainParts = parts[1].split(".");
    if (
        domainParts.some(function (part) {
            return part.length > 63;
        })
    )
        return false;
    return true;
}
