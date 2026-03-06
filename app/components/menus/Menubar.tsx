"use client";
import Link from "next/link";
import { Menulist } from "./menu-list/Menulist";
import { usePathname } from "next/navigation";
export default function Menubar() {
  const pathname = usePathname();
  return (

      <div
        className={`h-dvh w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 transform transition-transform duration-300 md:translate-x-0`}
      >
        <div className="p-4 font-bold text-xl">My Sidebar</div>
        <nav className="flex flex-col gap-2 p-4">
         {
          Menulist.map((menu)=>(
            <Link
              key={menu.url}
              href={menu.url}
              className={`${pathname === menu.url ? "bg-gray-200 dark:bg-gray-800" : "hover:bg-gray-200 dark:hover:bg-gray-800"} px-3 py-2 rounded`}
            >
              {menu.name}
            </Link>
          ))
         }
        </nav>
      </div>
  
  );
}
