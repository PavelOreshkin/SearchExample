import { API_BASE } from "@/shared/config/config";
import { Subject } from "../model";

export async function fetchSubjects() {
  const res = await fetch(`${API_BASE}/subjects`);
  const data = await res.json();
  return data.data as Subject[];
}
