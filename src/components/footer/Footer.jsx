export const Footer = () => {
  return (
    <div className="footer bg-gray-200 py-4 w-screen shadow dark:bg-black transition duration-300">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="block text-md text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 <span>Created by</span>.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Nika Gogitidze</span>
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-md font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="mailto:ggdnicolas@gmail.com"
                className="mr-4 hover:underline md:mr-6 "
              >
                Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Nicolas-ggd"
                className="mr-4 hover:underline md:mr-6"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nicolas-gogitidze-8b1532229/"
                className="mr-4 hover:underline md:mr-6 "
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
