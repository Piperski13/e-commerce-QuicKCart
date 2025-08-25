import { Link } from "react-router-dom";
import githubIcon from "../assets/github.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 rounded-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto pt-4 pb-2">
        <div className="flex items-center justify-between">
          <Link
            to="/home"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              QuicKCart.
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/home" className="hover:underline me-4 md:me-6">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline me-4 md:me-6">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="flex items-center justify-center flex-col block text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center mb-2">
            <a href="https://github.com/Piperski13">
              <img src={githubIcon} className="h-8 inline" alt="Github" />
            </a>
            <p className="inline ml-2">Developed by Aleksa Piperski</p>
          </div>

          <div>© 2025 Aleksa Piperski . All Rights Reserved.</div>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
