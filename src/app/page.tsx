import { fetchEmployees } from "@/lib/fetchEmployees";
import { Employee } from "@/types/employee";
import EmployeeTable from "@/components/EmployeeTable";
import SelectedDrawer from "@/components/SelectedDrawer";
import SearchFilterBar from "@/components/SearchFilterBar";

export default async function HomePage() {
  const employees: Employee[] = await fetchEmployees();

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <header className="text-2xl font-bold mb-4">Çalışan Yönetim Paneli</header>
      <SearchFilterBar />
      <EmployeeTable employees={employees} />
      <SelectedDrawer />
    </main>
  );
}
