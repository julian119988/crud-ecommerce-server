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
console.log(process.env);

var corsOptions = {
    origin: ["http://localhost:3000", "http://192.168.1.40:3000"],
};
app.use(cors("*"));
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
