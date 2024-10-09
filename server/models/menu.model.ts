import mongoose, { Document } from "mongoose";

export interface IMenu {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface IRestaurantDocument extends IMenu, Document {
  createdAt: Date;
  updatedAt: Date;
}

const menuSchema = new mongoose.Schema<IRestaurantDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Menu", menuSchema);
