const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const apiRoutes = require("./routes/api.routes");
const authRoutes = require("./routes/auth.routes");
const placeholderRoutes = require("./routes/placeholder.routes");
const db = require("./models/index");
db.sequelize.sync();

var corsOptions = {
    origin: [
        "http://localhost:3000",
        "http://192.168.1.40:3000",
        "http://ec2-18-223-2-137.us-east-2.compute.amazonaws.com:8080",
        "http://ec2-18-223-2-137.us-east-2.compute.amazonaws.com:80",
        "http://ec2-18-223-2-137.us-east-2.compute.amazonaws.com",
        "http://18.223.2.137:8080",
        "http://18.223.2.137:80",
    ],
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/api", apiRoutes);
app.use("/auth", authRoutes);
app.use("/load-placeholders", placeholderRoutes);
app.use("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
