import Link from "next/link";
import { Heading } from "../headings/Heading";
import Button from "../button/Button";
import { LogOutIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full top-0 left-0 right-0 z-30 bg-gray-100 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700">
      <div className=" mx-auto flex items-center justify-between p-4">
       <Heading headingStyleClass="font-semibold"  heading="HR Dashboard" />
       <Button label="logout" styleClass="text-lg font-light gap-x-2 bg-red-100 py-1 px-2 rounded-md text-red-500 border border-red-500" icons={<LogOutIcon size={15} />} />
      </div>
    </header>
  );
}
