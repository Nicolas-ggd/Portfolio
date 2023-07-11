import { Link } from "react-router-dom";

import { Switcher } from "../../utils/Switcher";

export const Header = () => {
  return (
    <div className="flex py-6 flex-wrap transition duration-300 bg-white dark:bg-gray-800 justify-between items-center w-full">
      <div className="flex items-center px-4 lg:order-2">
        <Switcher />
      </div>
      <div className="hidden pl-10 justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
        <ul className="flex flex-col pt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <Link
              to="/"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
