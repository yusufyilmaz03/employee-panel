"use client";

import { Employee } from "@/types/employee";
import { useEmployeeStore } from "@/store/useEmployeeStore";
import clsx from "clsx";

interface Props {
  employees: Employee[];
}

export default function EmployeeTable({ employees }: Props) {
  const {
    selected,
    toggleEmployee,
    search,
    filterDepartment,
    filterStatus,
  } = useEmployeeStore();

  const filteredEmployees = employees.filter((emp) => {
    const matchSearch = emp.name.toLowerCase().includes(search.toLowerCase());
    const matchDept = filterDepartment ? emp.department === filterDepartment : true;
    const matchStatus = filterStatus ? emp.status === filterStatus : true;
    return matchSearch && matchDept && matchStatus;
  });

  return (
    <div className="overflow-auto bg-white shadow-md rounded-lg">
      <table className="w-full table-auto border-collapse">
        <thead className="bg-gray-200 text-sm text-left">
          <tr>
            <th className="p-2">Adı</th>
            <th className="p-2">Ünvan</th>
            <th className="p-2">Departman</th>
            <th className="p-2">Durum</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((emp) => {
              const isSelected = selected.some((e) => e.id === emp.id);
              return (
                <tr
                  key={emp.id}
                  onClick={() => toggleEmployee(emp)}
                  className={clsx(
                    "cursor-pointer hover:bg-blue-50 transition-colors",
                    isSelected ? "bg-blue-100" : ""
                  )}
                >
                  <td className="p-2">{emp.name}</td>
                  <td className="p-2">{emp.title}</td>
                  <td className="p-2">{emp.department}</td>
                  <td className="p-2">
                    <span
                      className={clsx(
                        "inline-block px-2 py-1 rounded text-xs font-semibold",
                        emp.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      )}
                    >
                      {emp.status}
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4} className="p-4 text-center text-gray-500">
                Eşleşen çalışan bulunamadı.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
