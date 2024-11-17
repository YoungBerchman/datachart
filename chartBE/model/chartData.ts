import { Document, model, Schema, Types } from "mongoose";

// models/ChartData.ts
export interface iProps {
  month: string; // E.g., "January", "February", etc.
  desktop: number; // Number of desktop users
  mobile: number; // Number of mobile users
}

interface iPropsData extends iProps, Document {}

const chartData = new Schema({
  month: {
    type: String,
    unique: true,
  },

  desktop: {
    type: Number,
  },
  mobile: {
    type: Number,
  },
});

export default model<iPropsData>("chart", chartData);
