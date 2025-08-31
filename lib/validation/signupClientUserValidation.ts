import { z } from "zod";

export const SignUpFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  phoneNumber: z
    .string()
    .min(11, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
});

export type SignUpFormType = z.infer<typeof SignUpFormSchema>;
