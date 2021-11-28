const { tables } = require("../models/index");
const { Users } = tables;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
    addUser: async (req, res) => {
        const { email, password1, password2, admin } = req.body;
        const { authorization } = req.headers;
        try {
            if (!email || !password1 || !password2)
                throw new Error({ message: "Some data is missing." });
            if (password2 !== password1)
                throw new Error({ message: "Passwords do not match." });
            if (!isEmailValid(email)) {
                console.log("entro aca");
                throw new Error({ message: "Email not properly formatted" });
            }
            const tokenWithOutBearer = authorization.replace(/^Bearer\s+/, "");
            const decriptedToken = jwt.verify(
                tokenWithOutBearer,
                process.env.TOKEN_SECRET
            );
            if (!decriptedToken.admin) throw new Error("Not allowed.");
            const hashedPassword = await bcrypt.hash(password1, 10);
            if (admin) {
                const newUser = await Users.create({
                    email,
                    password: hashedPassword,
                    admin: 1,
                });
                const newUserIsSaved = await newUser.save();
                res.send(newUserIsSaved);
            } else {
                const newUser = await Users.create({
                    email,
                    password: hashedPassword,
                    password2,
                });
                const newUserIsSaved = await newUser.save();
                res.send(newUserIsSaved);
            }
        } catch ({ message }) {
            res.status(400).send({ message });
        }
    },
    loginUser: async (req, res) => {
        const { email, password } = req.body;
        try {
            if (!email || !password)
                throw new Error({ message: "Some data is missing." });
            const storedUser = await Users.findOne({ where: { email } });
            const result = await bcrypt.compare(password, storedUser.password);
            if (!result)
                throw new Error({
                    message: "Email or password were incorrect.",
                });
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
