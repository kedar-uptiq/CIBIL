import express from "express";
import cibilRoute from "./routes/cibil";

const app = express();

app.use(express.json());
app.use("/api/cibil", cibilRoute);

export default app;