const express = require("express");
const router = express.Router();
const people = require("../data/people");

router.get("/", (req, res) => {
  const { pan, dob } = req.query;

  if (!pan || !dob) {
    return res.status(400).json({ error: "PAN and DOB are required" });
  }

  const person = people.find(p => p.pan === pan && p.dob === dob);

  if (!person) {
    return res.status(404).json({ error: "Person not found" });
  }

  res.json({
    name: person.name,
    pan: person.pan,
    cibilScore: person.cibilScore
  });
});

module.exports = router;
