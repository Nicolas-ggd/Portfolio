import { Link } from "react-router-dom";
import { Switcher } from "../../utils/Switcher";

export const Header = () => {
  return (
    <div className="border-gray-200 px-4 transition duration-300 lg:px-6 lg:py-6 bg-gray-200 dark:bg-black">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <div
          className="justify-between bg-gray-200 dark:bg-black transition duration-300 items-center w-full lg:flex lg:w-auto lg:order-1"
        >
          <ul className="lg:flex p-5 flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="/"
                className="block py-5 pr-4 pl-3 lg:hover:bg-transparent lg:border-0 lg:p-0 text-3xl"
              >
                <span className="text-gray-900 bg-clip-text bg-gradient-to-r dark:text-white dark:hover:from-green-400 dark:hover:to-teal-400 transition duration-2">Nicolas-</span><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">ggd</span>
              </Link>
            </li>
          </ul>
        </div>
          <div className="flex justify-end items-center lg:order-3">
            <Switcher />
          </div>
      </div>
    </div>
  );
};
