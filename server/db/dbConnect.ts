// const mongoPassword = "hpR8mq6CPFT3HFOQ";
// const username = "bishalrajbhattarai01";
// mongodb+srv://bishalrajbhattarai01:hpR8mq6CPFT3HFOQ@cluster0.rghn8.mongodb.net/

import { log } from "console";
import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    log("mongodb connected");
  } catch (err) {
    console.log(err);
  }
};
export default dbConnect;
