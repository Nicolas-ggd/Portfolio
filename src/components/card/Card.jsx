import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export const Card = () => {
  const githubProjects = [
    {
      id: 1,
      name: "Chat App",
      imgSrc: "../../../public/chatappp.png",
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
          id: 1,
          name: "Socket.IO",
        },
      ],
      githubLink: "https://github.com/Nicolas-ggd/chat-app",
    },
    {
      id: 2,
      name: "Covid Api",
      imgSrc: "../../../public/covid-api.png",
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
      ],
      githubLink: "https://github.com/Nicolas-ggd/covid19-api-vite-react",
    },
    {
      id: 2,
      name: "Movies Api",
      imgSrc: "../../../public/movieslist.png",
      lang: [
        {
          id: 1,
          name: "Next.JS",
        },
      ],
      githubLink: "https://github.com/Nicolas-ggd/movies-app",
    },
  ];

  return (
    <div className="w-ful px-10 l h-full transition duration-300 bg-white py-10 dark:bg-gray-800">
      <div className="flex">
        {githubProjects &&
          githubProjects.map((item, index) => {
            return (
              <div
                key={index}
                style={{ width: "320px", height: "300px" }}
                className="max-w-md w-full h-52 md:w-64 md:h-80 m-4 p-6 hover:scale-110 cursor-pointer transition duration-300 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="px-3">
                  <div>
                    <img src={item?.imgSrc ? item?.imgSrc : `https://nicolas-ggd.netlify.app${item?.imgSrc}`} alt="No image" />
                  </div>
                </div>
                <div className="flex items-center pt-3">
                  <div className="px-3">
                    <a href="#">
                      <h5 className="mb-2 text-xl md:text-2xl font-sans transition duration-300 tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </a>
                  </div>
                  <div className="px-8">
                    <a className="px-2" href={item?.githubLink}>
                      <GitHubIcon className="dark:text-white" />
                    </a>
                    <a>
                      <LaunchIcon className="dark:text-white" />
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap mt-5">
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
            );
          })}
      </div>
    </div>
  );
};
