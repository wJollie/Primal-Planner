const express = require("express");
const router = express.Router();

// Sample data (you can replace this with your own data or database queries)
const sampleData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Define API routes

// Get all items
router.get("/items", (req, res) => {
  res.json(sampleData);
});

// Get a specific item by ID
router.get("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = sampleData.find((item) => item.id === itemId);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

// Create a new item
router.post("/items", (req, res) => {
  const newItem = req.body; // Assuming request body contains item data
  sampleData.push(newItem);
  res.status(201).json(newItem);
});

// Update an existing item by ID
router.put("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedItem = req.body; // Assuming request body contains updated data

  const index = sampleData.findIndex((item) => item.id === itemId);

  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  sampleData[index] = updatedItem;
  res.json(updatedItem);
});

// Delete an item by ID
router.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);

  const index = sampleData.findIndex((item) => item.id === itemId);

  if (index === -1) {
    return res.status(404).json({ message: "Item not found" });
  }

  sampleData.splice(index, 1);
  res.status(204).end();
});

module.exports = router;
