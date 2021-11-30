const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const cors = require("cors");
const apiRoutes = require("./routes/api.routes");
const authRoutes = require("./routes/auth.routes");
const placeholderRoutes = require("./routes/placeholder.routes");
const db = require("./models/index");
const path = require("path");
db.sequelize.sync();

var corsOptions = {
    origin: ["http://localhost:3000", "http://192.168.1.40:3000"],
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
