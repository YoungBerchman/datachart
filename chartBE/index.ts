// index.ts
import express from "express";
import cors from "cors"; // To allow cross-origin requests
import { getChartData } from "./controller/chartController";

const app = express();

// Middleware to allow cross-origin requests (important for frontend-backend communication)
app.use(cors());

// Define the API route for chart data
app.get("/api/chart-data", getChartData);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
