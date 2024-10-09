import { z } from "zod";

export const userSignupSchema = z.object({
  fullName: z.string().min(1, "Full Name is required !"),
  email: z.string().email("Invalid Email Address !"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  contact: z.string().min(10, "Contact must be at least 10 digit"),
});

export type SignupInputState = z.infer<typeof userSignupSchema>;

export const userLoginSchema = z.object({
  email: z.string().email("Invalid Email Address !"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginInputState = z.infer<typeof userLoginSchema>;
