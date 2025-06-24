"use client";

import { useEmployeeStore } from "@/store/useEmployeeStore";

const departments = ["Engineering", "HR", "Sales", "Marketing"];
const statuses = ["Active", "Inactive"];

export default function SearchFilterBar() {
  const {
    search,
    setSearch,
    filterDepartment,
    setFilterDepartment,
    filterStatus,
    setFilterStatus,
  } = useEmployeeStore();

  return (
    <div className="mb-4 flex flex-wrap gap-4 items-center">
      <input
        type="text"
        placeholder="İsme göre ara..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded w-52"
      />

      <select
        value={filterDepartment}
        onChange={(e) => setFilterDepartment(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Tüm Departmanlar</option>
        {departments.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Tüm Statüler</option>
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
