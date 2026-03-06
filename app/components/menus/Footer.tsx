export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 p-4 min-w-full">
            <div className=" mx-auto text-center">
                <p className="text-gray-600 dark:text-gray-400">
                    &copy; {new Date().getFullYear()} My Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
