"use client";

import { useEmployeeStore } from "@/store/useEmployeeStore";
import { useState } from "react";
import { FaUsers, FaX } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

export default function SelectedDrawer() {
  const { selected, removeEmployee, clearAll } = useEmployeeStore();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sabit buton */}
      <button
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => setOpen(true)}
      >
        <FaUsers className="inline mr-1" /> ({selected.length})
      </button>

      {/* Drawer */}
      {open && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl p-4 z-50 flex flex-col">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="text-lg font-semibold">Seçilen Çalışanlar</h2>
            <button onClick={() => setOpen(false)}>
              <FaX className="text-xl" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {selected.length === 0 ? (
              <p className="text-gray-500">Henüz seçim yapılmadı.</p>
            ) : (
              selected.map((emp) => (
                <div
                  key={emp.id}
                  className="mb-2 border-b pb-2 flex justify-between items-start"
                >
                  <div>
                    <p className="font-medium">{emp.name}</p>
                    <p className="text-sm text-gray-500">
                      {emp.title}, {emp.department}
                    </p>
                  </div>
                  <button
                    onClick={() => removeEmployee(emp.id)}
                    className="text-sm text-red-600 hover:underline"
                  >
                    Kaldır
                  </button>
                </div>
              ))
            )}
          </div>

          {selected.length > 0 && (
            <button
              onClick={clearAll}
              className="mt-4 bg-red-100 text-red-700 py-2 px-4 rounded hover:bg-red-200 text-sm"
            >
              <FaTrash className="inline mr-1" /> Hepsini Temizle
            </button>
          )}
        </div>
      )}
    </>
  );
}
