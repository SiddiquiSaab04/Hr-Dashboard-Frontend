import {
  Building,
  LayoutDashboardIcon,
  UserMinusIcon,
  UsersIcon,
} from "lucide-react";

export const Menulist = [
  {
    name: "Dashboard",
    url: "/pages/home",
    icon: <LayoutDashboardIcon size={18} />,
  },
  {
    name: "Attendance",
    url: "/pages/leave",
    icon: <UserMinusIcon size={18} />,
  },
  {
    name: "Departments",
    url: "/pages/departments",
    icon: <Building size={18} />,
  },
  {
    name: "Employees",
    url: "/pages/employees",
    icon: <UsersIcon size={18} />,
  },
];
