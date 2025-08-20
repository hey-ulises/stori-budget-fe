import { z } from "zod";

const API_URL = import.meta.env.VITE_API_URL;

export const CategorySchema = z.object({
    id: z.number(),
    name: z.string(),
    type: z.enum(["income", "expense"]),
    transactions: z.array(z.object({
        id: z.number(),
        date: z.string(),
        amount: z.number(),
        description: z.string().nullable().optional(),
        categoryId: z.number(),
    })),
});

export const CategoriesSchema = z.array(CategorySchema);

export type CategoryType = z.infer<typeof CategorySchema>;
export type CategoriesType = z.infer<typeof CategoriesSchema>;

export async function fetchCategories(): Promise<CategoriesType> {
    const res = await fetch(`${API_URL}/categories`);
  
    if (!res.ok) {
        throw new Error("Failed to fetch categories");
    }

    const data = await res.json();

    console.log(data)

    return CategoriesSchema.parse(data);
}
