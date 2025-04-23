const express = require("express");
const app = express();
const cibilRoute = require("./src/routes/cibil");

const PORT = process.env.PORT || 3000;

app.use("/api/cibil", cibilRoute);

app.get("/", (req, res) => {
  res.send("✅ CIBIL API is running.");
});

app.listen(PORT, () => {
  console.log(`🚀 CIBIL API running at http://localhost:${PORT}`);
});
