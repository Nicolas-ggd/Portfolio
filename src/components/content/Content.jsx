import { Link } from "react-router-dom";

import DiamondIcon from "@mui/icons-material/Diamond";

export const Content = () => {
  return (
    <div className="w-full lg:h-screen h-[80vh] flex justify-center flex-col items-center transition duration-300 bg-gray-200 dark:bg-black">
      <div className="p-5 mx-auto max-w-screen-xl">
        <div className="w-full h-full">
          <div className="w-[60%] flex justify-center items-center">
            <h1 className="text-5xl text-start text-dark dark:text-white font-semibold">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                Nika Gogitidze
              </span>
              , web developer, concentrated on building web apps, with equal
              focus on design and functionality
            </h1>
            <div className="text-neon"></div>
          </div>
          <div className="flex justify-start items-center mt-5">
            <Link
              className="bg-green-400 shadow-lg hover:shadow-green-400/50 hover:bg-green-300 transition duration-300 font-bold py-2 px-4 rounded-full"
              to="/projects"
            >
              See my works
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
