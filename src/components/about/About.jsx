import { useState } from "react";

const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <i className="devicon-javascript-plain colored text-4xl sm:text-md xl:text-md"></i>,
          <i className="devicon-typescript-plain colored text-4xl sm:text-md xl:text-md"></i>,
          <i className="devicon-react-original colored text-4xl sm:text-md xl:text-md"></i>,
          <i className="devicon-redux-original colored text-4xl sm:text-md xl:text-md"></i>,
          <i className="devicon-nextjs-line colored text-4xl sm:text-md xl:text-md dark:text-white"></i>,
          <i className="devicon-nodejs-plain-wordmark colored text-4xl sm:text-md xl:text-md"></i>,
          <i className="devicon-express-original text-4xl sm:text-md xl:text-md dark:text-white"></i>,
          <i className="devicon-mongodb-plain-wordmark colored text-4xl sm:text-md xl:text-md"></i>,
          <i className="devicon-tailwindcss-plain colored text-4xl sm:text-md xl:text-md"></i>,
          <i className="devicon-html5-plain-wordmark colored text-4xl sm:text-md xl:text-md"></i>,
          <i className="devicon-css3-plain-wordmark colored text-4xl sm:text-md xl:text-md"></i>,
        ],
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        pos: "Web Developer",
        title: "Hypercubic Innovation Center",
        date: "2023",
      },
      {
        pos: "Intern",
        title: "CASATRADE",
        date: "2022",
      },
    ],
  },
];

export const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <div
        className="w-full flex justify-center items-center transition duration-300 dark:bg-gray-800"
        style={{ height: "78vh" }}
      >
        <div className="w-full h-full p-5">
          <div className="w-full flex justify-center items-center">
            <div className="mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
              <div className="flex-1 flex flex-col justify-center dark:text-white text-md py-2">
                Hi, I'm Nika Gogitidze, a web developer from Tbilisi, Georgia.
                I'm passionate about creating web apps and seek to learn more
              </div>

              <div className="flex flex-col justify-center w-full xl:max-w-[48%] h-[480px]">
                <div className="flex flex-col gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                  <div className="flex justify-evenly items-center flex-wrap">
                    {aboutData?.map((item, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          onClick={() => setIndex(itemIndex)}
                          className={`${
                            itemIndex === index
                              ? "text-orange-400 after:w-[100%] after:bg-orange-500 after:transition-all after:duration-300"
                              : ""
                          } dark:text-white cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mx-3 text-xl`}
                        >
                          {item?.title}
                        </div>
                      );
                    })}
                  </div>
                  <div className="py-2 overflow-scroll xl:py-6">
                    {aboutData[index].info.map((item, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="flex flex-col md:flex-row max-w-max gap-x-2 items-center md:items-start"
                        >
                          <div className="dark:text-white text-center md:text-left">
                            {item.pos}
                          </div>
                          {item.pos && (
                            <div className="hidden md:flex text-white">-</div>
                          )}
                          <div className="dark:text-white text-center md:text-left">
                            {item.title}
                          </div>
                          <div className="hidden md:flex text-white">-</div>
                          <div className="dark:text-white text-center md:text-left">
                            {item.date}
                          </div>
                          <div className="flex gap-x-4">
                            {item?.icons?.map((icon, iconIndex) => {
                              return <div key={iconIndex}>{icon}</div>;
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
