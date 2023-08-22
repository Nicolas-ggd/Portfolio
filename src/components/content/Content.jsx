import { Link } from "react-router-dom";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

export const Content = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full lg:h-screen h-[80vh] flex justify-center flex-col items-center transition duration-300 bg-gray-200 dark:bg-black">
      <div data-aos="fade-right" className="p-5 mx-auto max-w-screen-xl">
        <div className="w-full h-full">
          <div className="xl:w-[60%] w-full flex justify-center items-center">
            <h1 className="text-5xl text-center xl:text-start text-dark dark:text-white font-semibold">
              I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
                Nika Gogitidze
              </span>
              , web developer, concentrated on building web apps, with equal
              focus on design and functionality
            </h1>
            <div className="text-neon"></div>
          </div>
          <div className="flex xl:justify-start justify-center items-center mt-5">
            <Link
              className="mx-1 bg-green-400 shadow-lg hover:shadow-green-400/50 hover:bg-green-300 transition duration-300 font-bold py-2 px-4 rounded-full"
              to="/projects"
            >
              See my works
            </Link>
            <a
              className="mx-1 bg-gray-800 text-white shadow-lg hover:shadow-gray-400/50 hover:bg-gray-700 transition duration-300 font-bold py-2 px-4 rounded-full"
              href="https://github.com/Nicolas-ggd"
              target="_blank"
              rel="noopener noreferrer"
            >
              See my github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
