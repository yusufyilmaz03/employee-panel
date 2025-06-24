import { Employee } from "@/types/employee";
import { promises as fs } from "fs";
import path from "path";

export async function fetchEmployees(): Promise<Employee[]> {
  const filePath = path.join(process.cwd(), "public", "employees.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}
