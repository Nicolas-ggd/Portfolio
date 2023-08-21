import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export const Content = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full lg:h-screen h-[80vh] flex justify-center flex-col items-center transition duration-300 dark:bg-black">
      <div className="p-5 mx-auto max-w-screen-xl">
        <div className="w-full h-full">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-3xl text-center text-dark dark:text-white font-semibold">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Nika Gogitidze</span>, web
              developer, concentrated on building web apps, with equal focus on
              design and functionality
            </h1>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              className="bg-green-400 shadow-lg hover:shadow-green-400/50 hover:bg-green-300 transition duration-300 font-bold py-2 px-4 rounded-full"
              onClick={scrollToBottom}
            >
              See my works
            </button>
          </div>
        </div>
      </div>
      <div
        className="absolute lg:bottom-10 bottom-20 bg-gray-700 rounded-full p-5 animate-bounce cursor-pointer"
        onClick={scrollToBottom}
      >
        <ArrowDownwardIcon className="text-white" />
      </div>
    </div>
  );
};
