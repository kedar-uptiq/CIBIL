const express = require("express");
const router = express.Router();
const people = require("../data/people");

// Get CIBIL data by PAN only
router.get("/:pan", (req, res) => {
  const { pan } = req.params;

  const person = people.find(p => p.pan === pan);

  if (!person) {
    return res.status(404).json({ error: "Person not found" });
  }

  res.json(person);
});

module.exports = router;
