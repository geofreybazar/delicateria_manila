import { z } from "zod";

export const deliveryDetailsSchema = z.object({
  emailAddress: z.email("Invalid email address").min(1, "Email is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  address: z.string().min(1, "Address is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  city: z.string().min(1, "City is required"),
  phoneNumber: z
    .string()
    .transform((val) => (val.startsWith("0") ? val.slice(1) : val))
    .refine((val) => /^[0-9]+$/.test(val), {
      message: "Phone number must contain only numbers",
    })
    .refine((val) => val.length >= 9, {
      message: "Phone number must be at least 9 digits",
    })
    .refine((val) => val.length <= 15, {
      message: "Phone number must be at most 15 digits",
    }),
});

export type DeliveryDetailsType = z.infer<typeof deliveryDetailsSchema>;
