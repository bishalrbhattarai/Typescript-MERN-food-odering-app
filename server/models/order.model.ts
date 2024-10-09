import mongoose from "mongoose";
type DeliveryDetails = {
  email: string;
  name: string;
  address: string;
  city: string;
};

type CartItems = {
  menuId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export interface IOrder extends Document {
  restaurant: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  deliveryDetails: DeliveryDetails;
  cartItems: CartItems;
  totalAmount: number;
  status: "pending" | "confirmed" | "preparing" | "outfordelivery";
}

export interface IOrderDocument extends IOrder, Document {
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new mongoose.Schema<IOrder>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    deliveryDetails: {
      email: { type: String, required: true },
      name: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
    },
    cartItems: [
      {
        menuId: { type: String, required: true },
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalAmount: Number,
    status: {
      type: String,
      enum: ["pending", "confirmed", "preparing", "outfordelivery"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
