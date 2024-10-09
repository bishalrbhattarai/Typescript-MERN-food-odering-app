import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db/dbConnect";
dotenv.config();
const app = express();

app.listen(process.env.PORT, async () => {
  dbConnect();
  console.log(`Running on PORT ${process.env.PORT}`);
});
