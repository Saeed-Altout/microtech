import * as z from "zod";

export const registerForm = z.object({
  user_name: z.string().min(2, {
    message: "Username is required",
  }),
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});
