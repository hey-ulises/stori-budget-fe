import { z } from "zod";

const API_URL = import.meta.env.VITE_API_URL;

export const TransactionSchema = z.object({
    id: z.number(),
    date: z.string(),
    amount: z.number(),
    description: z.string().nullable().optional(),
    categoryId: z.number(),
    category: z.object({
        id: z.number(),
        name: z.string(),
        type: z.enum(["income", "expense"]),
    }),
});

export const TransactionsSchema = z.array(TransactionSchema);

export type TransactionType = z.infer<typeof TransactionSchema>;
export type TransactionsType = z.infer<typeof TransactionsSchema>;

export async function fetchTransactions(): Promise<TransactionsType> {
    const res = await fetch(`${API_URL}/transactions`);

    if (!res.ok) {
        throw new Error("Failed to fetch transactions");
    }

    const data = await res.json();

    return TransactionsSchema.parse(data);
}
