const express = require("express");
const app = express();
const cibilRoute = require("./routes/cibil");

const PORT = process.env.PORT || 3000;

app.use("/api/cibil", cibilRoute);

app.listen(PORT, () => {
  console.log(`CIBIL API running on http://localhost:${PORT}`);
});