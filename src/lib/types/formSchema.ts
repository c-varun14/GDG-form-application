import { z } from "zod";

export const companyDetailsSchema = z.object({
  website: z.string().optional(),
  name: z
    .string()
    .min(2, { message: "Company Name must be at least 2 characters." }),
  country: z.string().min(1, { message: "Country is required." }),
  socialMediaLink: z.string().optional(),
});

export const personDetailsSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  designation: z.string().min(1, { message: "Designation is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." })
    .optional(),
});

export const serviceOptions = ["Web Design", "Seo", "Automations"] as const;

export const projectDetailsSchema = z.object({
  budget: z.enum(["1000-3000", "3000-5000", "5000+"], {
    required_error: "You need to select a budget.",
  }),
  services: z
    .array(
      z.enum(serviceOptions, {
        invalid_type_error: "Invalid service selected.",
      })
    )
    .min(1, { message: "Please select at least one service." }),
  primaryGoal: z.string().min(1, { message: "Primary goal is required." }),
});

export const formSchema = z.object({
  companyDetails: companyDetailsSchema,
  personalDetails: personDetailsSchema,
  projectDetails: projectDetailsSchema,
});

export type formType = z.infer<typeof formSchema>;
