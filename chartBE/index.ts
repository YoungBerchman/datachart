import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv"; // Updated to reflect proper package name
dotenv.config(); // Make sure to call dotenv.config() to load env variables

const app: Application = express();
const port = process.env.PORT || 5000; // Use the port from environment variables, default to 5000 if not set

// Enable CORS to allow your frontend to access this backend (useful if they are on different ports)
app.use(cors());

// Sample chart data (this can be dynamic or fetched from a database in a real-world app)
const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

// API endpoint to get chart data
app.get("/api/chart-data", (req: Request, res: Response) => {
  res.json(chartData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
