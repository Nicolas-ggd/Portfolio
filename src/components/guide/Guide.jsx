import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import StorageIcon from "@mui/icons-material/Storage";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import BoltIcon from "@mui/icons-material/Bolt";

const projDescribe = [
  {
    icon: (
      <StorageIcon
        className="text-blue-500 rounded-lg shadow-xl shadow-blue-500/70"
        style={{ fontSize: "60px" }}
      />
    ),
    title: "Relationship with the database",
    desc: "Explore the world of databases and understand how they play a crucial role in modern web development.",
  },
  {
    icon: (
      <DataUsageIcon
        className="text-cyan-500 rounded-full shadow-xl shadow-cyan-500/70"
        style={{ fontSize: "60px" }}
      />
    ),
    title: "Data exchange",
    desc: "Unlock the power of data exchange to create dynamic and interactive web applications.",
  },
  {
    icon: (
      <BoltIcon
        className="text-green-500 rounded-xl shadow-xl shadow-green-500/70"
        style={{ fontSize: "60px" }}
      />
    ),
    title: "Used feature",
    desc: "Dive into the essential tools and components frequently utilized by React developers to build robust applications.",
  },
];

export const Guide = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full h-full bg-gray-200 dark:bg-black px-4">
      <div className="mx-auto max-w-screen-xl">
        <div data-aos="fade-right" className="px-2">
          <h1 className="text-5xl dark:text-white py-2">
            Used features,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              To build
            </span>
            , Strong application.
          </h1>
          <p className="py-2 text-2xl dark:text-gray-500 py-4">
            Here you will find a list of projects
          </p>
        </div>

        <div className="py-2 w-full">
          <div className="flex justify-center flex-wrap">
            {projDescribe?.map((item, index) => {
              return (
                <div
                  data-aos="fade-right"
                  key={index}
                  className="w-full sm:w-1/1 md:w-1/1 lg:w-1/3 xl:w-2/6 p-4"
                >
                  <div className="max-w-md h-80 m-auto p-6 cursor-pointer transition duration-300 bg-white rounded-lg shadow dark:bg-zinc-900 dark:border-gray-700 hover:dark:bg-zinc-800 hover:darkshadow-lg hover:dark:shadow-white/90">
                    <div className="dark:text-white text-dark py-2 text-center h-[50%] flex items-center justify-center">
                      {item?.icon}
                    </div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item?.title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {item?.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
