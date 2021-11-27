const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const app = express();
const cors = require("cors");
const apiRoutes = require("./routes/api.routes");
const authRoutes = require("./routes/auth.routes");
const db = require("./models/index");
db.sequelize.sync();

var corsOptions = {
    origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRoutes);
app.use("/auth", authRoutes);

module.exports = app;
