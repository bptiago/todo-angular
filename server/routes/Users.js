const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { Users } = require("../models");

router.get("/getAll", async (req, res) => {
  const users = await Users.findAll();
  res.json(users);
});

router.post("/createUser", async (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) res.json(err);

    Users.create({
      username: username,
      password: hash,
    });
    res.json("User created");
  });
});

module.exports = router;
