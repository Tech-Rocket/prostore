import z from "zod";
import { insertProductSchema } from "@/lib/validators";

export type ProductTypes = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
};
