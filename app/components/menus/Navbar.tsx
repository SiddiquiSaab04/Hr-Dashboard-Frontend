import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full top-0 left-0 right-0 z-30 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
      <div className=" mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-gray-100"
        >
          MyLogo
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex gap-4">
          <Link
            href="#"
            className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Home
          </Link>
          <Link
            href="#"
            className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            About
          </Link>
          <Link
            href="#"
            className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Services
          </Link>
          <Link
            href="#"
            className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            Contact
          </Link>
        </nav>

      </div>

    
    </header>
  );
}
