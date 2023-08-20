import { useState } from "react";

const aboutData = [
  {
    title: "Skills",
    info: [
      {
        icons: [
          <i className="devicon-javascript-plain colored text-4xl"></i>,
          <i className="devicon-typescript-plain colored text-4xl"></i>,
          <i className="devicon-react-original colored text-4xl"></i>,
          <i className="devicon-redux-original colored text-4xl"></i>,
          <i className="devicon-nextjs-line colored text-4xl dark:text-white"></i>,
          <i className="devicon-nodejs-plain-wordmark colored text-4xl"></i>,
          <i className="devicon-express-original text-4xl dark:text-white"></i>,
          <i className="devicon-mongodb-plain-wordmark colored text-4xl"></i>,
          <i className="devicon-socketio-original text-4xl dark:text-white"></i>,
          <i className="devicon-tailwindcss-plain colored text-4xl"></i>,
          <i className="devicon-html5-plain-wordmark colored text-4xl"></i>,
          <i className="devicon-css3-plain-wordmark colored text-4xl"></i>,
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
        className="w-full transition duration-300 dark:bg-black"
        style={{ height: "78vh" }}
      >
        <div className="container mx-auto flex flex-col items-center xl:flex-row gap-x-6 h-full">
          <div className="flex-1 flex flex-col justify-center xl:w-[400px] mx-auto px-2">
            <h2
              className="dark:text-white py-2 leading-10 lg:text-6xl text-3xl"
            >
              Make it work, <span className="text-red-400">make it right</span>,
              make it fast.
            </h2>
            <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 xl:px-0 dark:text-white text-xl ml-0">
              Hi, I'm <span className="text-red-400">Nika Gogitidze</span>, a
              web developer from Tbilisi, Georgia. I'm passionate about creating
              web apps and seek to learn more
            </p>
          </div>
          <div className="flex flex-col w-full xl:max-w-[48%] h-[280px] items-center">
            <div className="flex flex-col justify-center items-center gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              <div className="flex justify-start items-center flex-wrap">
                {aboutData?.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      onClick={() => setIndex(itemIndex)}
                      style={{
                        borderColor: itemIndex === index ? "red" : "",
                      }}
                      className={`${
                        itemIndex === index
                          ? "text-red-500 dark:text-red-500 after:w-[100%] after:bg-red-500 after:transition-all after:duration-300"
                          : ""
                      } dark:text-white cursor-pointer xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 mx-3 text-xl`}
                    >
                      {item?.title}
                    </div>
                  );
                })}
              </div>
              <div className="py-2 px-3 xl:overflow-scroll xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
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
                      {item.title && (
                        <div className="hidden md:flex text-white">-</div>
                      )}
                      <div className="dark:text-white text-center md:text-left">
                        {item.date}
                      </div>
                      <div className="grid grid-rows-4 grid-flow-col gap-4 gap-x-4 py-2">
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
    </>
  );
};
