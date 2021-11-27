const jwt = require("jsonwebtoken");
module.exports = {
    isAuthorized: async (req, res, next) => {
        const { authorization } = req.headers;
        try {
            if (!authorization) throw new Error({ message: "Missing token" });
            const tokenWithOutBearer = authorization.replace(/^Bearer\s+/, "");
            jwt.verify(tokenWithOutBearer, process.env.TOKEN_SECRET);
            next();
        } catch (e) {
            let error = new Error("Not authorized!");
            error.status = 401;
            next(error);
        }
    },
};
