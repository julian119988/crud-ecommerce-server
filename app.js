const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const routes = require("./routes/routes");
const db = require("./models/index");
db.sequelize.sync();

var corsOptions = {
    origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);

module.exports = app;
