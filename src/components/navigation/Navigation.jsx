import { Link, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 dark:bg-gray-700 py-5 bg-gray-200 h-[80px] xl:h-max text-3xl backdrop-blur-sm xl:rounded-full xl: px-5">
        {navigationData?.map((item, index) => {
          return (
            <Link
              className="text-dark dark:text-white transition-all duration-200 relative flex items-center group hover:dark:text-orange-300"
              style={{ color: pathname === item?.path ? "orange" : "" }}
              key={index}
              to={item?.path}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-black items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none capitalize">
                    {item?.name}
                  </div>
                </div>
              </div>
              {item?.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
