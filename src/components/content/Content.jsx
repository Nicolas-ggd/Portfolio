export const Content = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center transition duration-3 dark:bg-gray-800">
      <div className="p-5">
        <div className="w-full h-full">
          <div className="w-full flex justify-center items-center">
            <h1 className="text-3xl text-center text-dark dark:text-white font-semibold">
              I'm Nika Gogitidze, web developer, concentrated on building web
              apps, with equal focus on design and functionality
            </h1>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button className="bg-blue-500 transition duration-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              See my works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
