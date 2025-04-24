const express = require("express");
const cors = require("cors"); // 👈 Import cors
const app = express();
const cibilRoute = require("./src/routes/cibil");

const PORT = process.env.PORT || 3000;

// ✅ Enable CORS for all origins
app.use(cors());

app.use("/api/cibil", cibilRoute);

app.get("/", (req, res) => {
  res.send("✅ CIBIL API is running.");
});

app.listen(PORT, () => {
  console.log(`🚀 CIBIL API running at http://localhost:${PORT}`);
});
