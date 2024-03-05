const express = require("express");
const app = express();

// Cors
const cors = require("cors");
app.use(cors());

// Router
const usersRouter = require("./routes/Users");
app.use("/users", usersRouter);
const todoItemsRouter = require("./routes/TodoItems");
app.use("/items", todoItemsRouter);

// Init db and server
const db = require("./models");
db.sequelize.sync().then(() => {
  app.listen(8080, () => {
    console.log("Server running on port 8080");
  });
});
