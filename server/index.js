const express = require("express");
const { Sequelize } = require("sequelize");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(cors());

// const db = require("./models");
const sequelize = new Sequelize(
  "todo-angular",
  "root",
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

//sequelize setup

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
