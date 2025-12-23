import z from "zod";
export const validationSchema = z.object({
  title: z
    .string()
    .min(3, "Write at least 3 characters")
    .max(30, "Limit is 30 characters"),
  text: z
    .string()
    .min(3, "Write at least 3 characters")
    .max(1000, "Limit is 1000 characters"),
});
