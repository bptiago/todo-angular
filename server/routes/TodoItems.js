const express = require("express");
const router = express.Router();
const { TodoItems } = require("../models");

router.get("/getAll", async (req, res) => {
  const items = await TodoItems.findAll();
  res.json(items);
});

router.get("/byUser/:id", async (req, res) => {
  const id = req.params.id;
  const items = await TodoItems.findAll({ where: { UserId: id } });
  res.json(items);
});

router.post("/create", async (req, res) => {
  const { content, UserId } = req.body;
  await TodoItems.create({ content: content, isComplete: 0, UserId: UserId });
  res.json("Item created");
});

router.patch("/handleStatus/:id", async (req, res) => {
  const itemId = req.params.id;
  const { completed } = req.body;
  // Should change status based on complete(boolean) status
  await TodoItems.update(
    { isComplete: completed ? 0 : 1 },
    { where: { id: itemId } }
  );
  res.json("Task status updated");
});

module.exports = router;
