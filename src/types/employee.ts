export interface Employee {
  id: number;
  name: string;
  title: string;
  department: string;
  email: string;
  location: string;
  status: "Active" | "Inactive";
  hiredAt: string;
}
