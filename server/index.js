const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });
});
