import Link from "next/link";

export default function Menubar() {
  return (

      <div
        className={`h-dvh w-64 bg-gray-100 dark:bg-gray-900 border-r border-gray-300 dark:border-gray-700 transform transition-transform duration-300 md:translate-x-0`}
      >
        <div className="p-4 font-bold text-xl">My Sidebar</div>
        <nav className="flex flex-col gap-2 p-4">
          <Link
            href="#"
            className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Dashboard
          </Link>
          <Link
            href="#"
            className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Profile
          </Link>
          <Link
            href="#"
            className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Settings
          </Link>
          <Link
            href="#"
            className="px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Inbox
          </Link>
        </nav>
      </div>
  
  );
}
