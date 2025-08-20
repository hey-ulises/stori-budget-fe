import { z } from "zod";

const API_URL = import.meta.env.VITE_API_URL;

export const KpisSchema = z.object({
    currentBalance: z.number(),
    monthlyIncome: z.number(),
    monthlyExpenses: z.number(),
});

export type Kpis = z.infer<typeof KpisSchema>;

export async function fetchKpis(): Promise<Kpis> {
    const res = await fetch(`${API_URL}/kpis`);

    if (!res.ok) {
    throw new Error("Failed to fetch Kpis");
    }

    const data = await res.json();

    return KpisSchema.parse(data);
}
