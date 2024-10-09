import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from "bcryptjs";
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { fullname, email, password, contact } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists with this Email!",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
      fullname,
      email,
      password: hashedPassword,
      contact,
      verificationToken: "asfff",
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
