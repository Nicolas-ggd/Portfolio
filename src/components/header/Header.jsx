import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Switcher } from "../../utils/Switcher";

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="bg-white border-gray-200 px-4 transition duration-300 lg:px-6 py-6 dark:bg-gray-800">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl">
        <div
          className="justify-between bg-white dark:bg-gray-800 transition duration-300 items-center w-full lg:flex lg:w-auto lg:order-1"
        >
          <ul className="lg:flex p-5 flex-col  font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="/"
                className="block text-2xl py-5 pr-4 pl-3 text-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:hover:text-orange-400 transition duration-2"
              >
                Nicolas-<span className="text-orange-400">ggd</span>
              </Link>
            </li>
          </ul>
        </div>
        {!isMobileMenuOpen && (
          <div className="flex justify-end items-center lg:order-3">
            <Switcher />
          </div>
        )}
      </div>
    </div>
  );
};
