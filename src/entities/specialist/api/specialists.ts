import { API_BASE } from "@/shared/config/config";
import { Specialist } from "../model/specialist";

export async function fetchSpecialistsByFilters(
  filters: Record<string, string>
) {
  const query = new URLSearchParams({
    ...filters,
    limit: "12",
    offset: "0",
  });

  const res = await fetch(`${API_BASE}/search/specialists?${query.toString()}`);
  const data = await res.json();
  return { items: data.data.items, totalCount: data.data.totalCount } as {
    items: Specialist[];
    totalCount: number;
  };
}
