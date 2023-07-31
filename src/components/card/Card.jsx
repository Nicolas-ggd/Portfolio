import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export const Card = () => {
  const githubProjects = [
    {
      id: 1,
      name: "Chat App",
      imgSrc: "../../../public/chat.png",
      imgSrc2: "/chat.png",
      lang: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Vite",
        },
        {
          id: 3,
          name: "Node.JS",
        },
        {
          id: 4,
          name: "Socket.IO",
        },
        {
          id: 5,
          name: "MongoDB",
        },
        {
          id: 6,
          name: "Redux",
        },
      ],
      githubLink: "https://github.com/Nicolas-ggd/chat",
    },
    {
      id: 2,
      name: "Covid Api",
      imgSrc: "../../../public/covid-api.png",
      imgSrc2: "/covid-api.png",
      lang: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Vite",
        },
        {
          id: 3,
          name: "Node.JS",
        },
        {
          id: 4,
          name: "TypeScript"
        },
        {
          id: 5,
          name: "MongoDB"
        }
      ],
      githubLink: "https://github.com/Nicolas-ggd/covid-ts",
    },
    {
      id: 2,
      name: "Movies Api",
      imgSrc: "../../../public/movieslist.png",
      imgSrc2: "/movieslist.png",
      lang: [
        {
          id: 1,
          name: "Next.JS",
        },
      ],
      githubLink: "https://github.com/Nicolas-ggd/movies-app",
      webUrl: "https://nicolas-ggd-movies.netlify.app/"
    },
    {
      id: 2,
      name: "Cooking Orders",
      imgSrc: "../../../public/order.png",
      imgSrc2: "/order.png",
      lang: [
        {
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Vite",
        },
        {
          id: 3,
          name: "Node.JS",
        },
        {
          id: 4,
          name: "MongoDB",
        },
        {
          id: 5,
          name: "TypeScript",
        },
      ],
      githubLink: "https://github.com/Nicolas-ggd/restaurant-order",
      // webUrl: "https://nicolas-ggd-movies.netlify.app/"
    },
  ];

  return (
    <div className="w-full px-5 sm:px-10 h-full transition duration-300 bg-white py-10 dark:bg-gray-800">
      <div className="flex flex-wrap justify-center">
        {githubProjects.map((item, index) => {
          return (
            <div
              key={index}
              style={{ width: "100%", maxWidth: "320px" }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
            >
              <div className="max-w-md h-80 m-auto p-6 hover:scale-110 cursor-pointer transition duration-300 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3">
                  <img
                    src={`https://nicolas-ggd.netlify.app${item?.imgSrc2}`}
                    alt="No image"
                    className="mx-auto"
                  />
                </div>
                <div className="flex items-center pt-3">
                  <div className="px-3">
                    <a href={item?.githubLink}>
                      <h5 className="mb-2 text-lg md:text-xl font-sans transition duration-300 tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </a>
                  </div>
                  <div className="px-8 flex">
                    <a className="px-2" href={item?.githubLink} target="_blank" rel="noopener noreferrer">
                      <GitHubIcon className="dark:text-white" />
                    </a>
                    <a className="px-2" href={item?.webUrl} target="_blank" rel="noopener noreferrer">
                      <LaunchIcon className="dark:text-white" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap my-5">
                  {item.lang.map((lang, langIndex) => (
                    <p
                      key={langIndex}
                      className="border my-1 text-blue-800 text-xs px-2.5 transition duration-300 py-1.5 font-md mr-2 px-2.5 rounded dark:text-white"
                    >
                      {lang.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
