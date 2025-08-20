import { useQuery } from "@tanstack/react-query";
import { fetchKpis } from "../api/kpis";

export function useKpis() {
    return useQuery({
        queryKey: ["kpis"],
        queryFn: fetchKpis,
    });
}