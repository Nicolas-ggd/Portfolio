import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const usedFeatures = [
  <i className="devicon-javascript-plain colored text-4xl"></i>,
  <i className="devicon-typescript-plain colored text-4xl"></i>,
  <i className="devicon-react-original colored text-4xl"></i>,
  <i className="devicon-redux-original colored text-4xl"></i>,
  <i
    className="devicon-nextjs-line colored text-4xl"
    style={{ color: "white" }}
  ></i>,
  <i className="devicon-nodejs-plain-wordmark colored text-4xl"></i>,
];

const usedFeaturesClone = [
  <i className="devicon-express-original text-4xl text-white"></i>,
  <i className="devicon-mongodb-plain-wordmark colored text-4xl"></i>,
  <i className="devicon-socketio-original text-4xl text-white"></i>,
  <i className="devicon-tailwindcss-plain colored text-4xl"></i>,
  <i className="devicon-html5-plain-wordmark colored text-4xl"></i>,
  <i className="devicon-css3-plain-wordmark colored text-4xl"></i>,
];

export const GuideSkills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="bg-gray-200 dark:bg-black py-12">
      <div className="mx-auto max-w-screen-xl">
        <div data-aos="fade-right" className="px-2">
          <h1 className="text-5xl dark:text-white py-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Features, Tools, Libraries{" "}
            </span>
            which, I used
          </h1>
          <p className="py-2 text-2xl dark:text-gray-500 py-4">
            I am always looking for something new to develop my skills
          </p>
        </div>
        <div data-aos="fade-right" className="slider-container">
          <div className="slider dark:bg-gradient-to-r dark:from-black">
            {usedFeatures?.map((item, index) => {
              return (
                <>
                  <div className="slider-item" key={`${index}-key`}>
                    <div className="xl:bg-gray-900 w-20 h-20 flex items-center justify-center rounded-md">
                      {item}
                    </div>
                  </div>
                </>
              );
            })}
            {usedFeatures?.map((item, index) => {
              return (
                <>
                  <div className="slider-item" key={`feature-${index}1`}>
                    <div className="xl:bg-gray-900 w-20 h-20 flex items-center justify-center rounded-md">
                      {item}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="slider-reverse dark:bg-gradient-to-r dark:from-black">
            {usedFeaturesClone?.map((item, index) => {
              return (
                <div className="slider-item" key={`${index}-keyof`}>
                  <div className="xl:bg-gray-900 w-20 h-20 flex items-center justify-center rounded-md">
                    {item}
                  </div>
                </div>
              );
            })}
            {usedFeaturesClone?.map((item, index) => {
              return (
                <div className="slider-item" key={`feature-${index}`}>
                  <div className="xl:bg-gray-900 w-20 h-20 flex items-center justify-center rounded-md">
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="slider dark:bg-gradient-to-r dark:from-black">
            {usedFeatures?.map((item, index) => {
              return (
                <>
                  <div className="slider-item" key={`feature-${index}`}>
                    <div className="xl:bg-gray-900 w-20 h-20 flex items-center justify-center rounded-md">
                      {item}
                    </div>
                  </div>
                </>
              );
            })}
            {usedFeatures?.map((item, index) => {
              return (
                <>
                  <div className="slider-item" key={`${item.id}-${index}`}>
                    <div className="xl:bg-gray-900 w-20 h-20 flex items-center justify-center rounded-md">
                      {item}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
