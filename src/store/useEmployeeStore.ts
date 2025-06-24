import { create } from "zustand";
import { Employee } from "@/types/employee";

interface EmployeeStore {
  selected: Employee[];
  toggleEmployee: (emp: Employee) => void;
  removeEmployee: (id: number) => void;
  clearAll: () => void;

  search: string;
  setSearch: (val: string) => void;

  filterDepartment: string;
  setFilterDepartment: (val: string) => void;

  filterStatus: string;
  setFilterStatus: (val: string) => void;
}

export const useEmployeeStore = create<EmployeeStore>((set, get) => ({
  selected: [],
  toggleEmployee: (emp) => {
    const current = get().selected;
    const exists = current.find((e) => e.id === emp.id);
    if (exists) {
      set({ selected: current.filter((e) => e.id !== emp.id) });
    } else {
      set({ selected: [...current, emp] });
    }
  },
  removeEmployee: (id) => {
    set((state) => ({
      selected: state.selected.filter((e) => e.id !== id),
    }));
  },
  clearAll: () => set({ selected: [] }),

  search: "",
  setSearch: (val) => set({ search: val }),

  filterDepartment: "",
  setFilterDepartment: (val) => set({ filterDepartment: val }),

  filterStatus: "",
  setFilterStatus: (val) => set({ filterStatus: val }),
}));