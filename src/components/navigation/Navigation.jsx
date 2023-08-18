import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AppsIcon from "@mui/icons-material/Apps";

const navigationData = [
  {
    icon: <HomeIcon />,
    path: "/",
    name: "home",
  },
  {
    icon: <PersonIcon />,
    path: "/about",
    name: "about",
  },
  {
    icon: <AppsIcon />,
    path: "/projects",
    name: "projects",
  },
];

export const Navigation = () => {
  const [active, setActive] = useState(0);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex relative w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 dark:bg-gray-700 py-10 bg-gray-200 h-[80px] xl:h-max text-3xl backdrop-blur-sm xl:rounded-full xl:px-5 px-20">
        {navigationData?.map((item, index) => {
          return (
            <Link
              className="text-dark dark:text-white transition-all duration-300 relative flex items-center group hover:dark:text-orange-300"
              style={{ color: pathname === item?.path ? "orange" : "" }}
              key={index}
              to={item?.path}
              onClick={() => setActive(index)}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-black items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none capitalize">
                    {item?.name}
                  </div>
                </div>
              </div>
              <div className={`${active === index ? "translate-y-[-10px]" : ""}`}>{item?.icon}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
