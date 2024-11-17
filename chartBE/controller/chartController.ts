// controllers/chartController.ts
import { Request, Response } from "express";
import { iProps } from "../model/chartData";

export const getChartData = (req: Request, res: Response) => {
  // Example static data; replace with dynamic data fetching logic if needed
  const data: iProps[] = [
    { month: "January", desktop: 1200, mobile: 800 },
    { month: "February", desktop: 1500, mobile: 1000 },
    { month: "March", desktop: 1700, mobile: 1200 },
    { month: "April", desktop: 1800, mobile: 1400 },
    { month: "May", desktop: 1600, mobile: 1300 },
    { month: "June", desktop: 1900, mobile: 1500 },
  ];

  // Send the data as a JSON response
  res.json(data);
};
