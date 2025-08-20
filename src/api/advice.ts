import { z } from "zod";

const API_URL = import.meta.env.VITE_API_URL;

export const AdviceSchema = z.object({
    advice: z.string(),
});

export type AdviceType = z.infer<typeof AdviceSchema>;

export async function fetchAdvice(): Promise<AdviceType> {
    const res = await fetch(`${API_URL}/advice`);

    if (!res.ok) {
    throw new Error("Failed to fetch advice");
    }

    const data = await res.json();

    return AdviceSchema.parse(data);
}
