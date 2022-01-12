import { Link, useLocation } from "react-router-dom";
import Routing from "./Routing";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Sidebar = ({ children }: any) => {
  const location=useLocation()
  if(location.pathname==='/about')
  return null
  return (
    <div className="relative min-h-screen md:flex">
      {/* <!-- sidebar --> */}
      <div className="sidebar bg-gray-700 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        {/* <!-- logo --> */}
        <Link className="text-white flex hover:text-blue-400 items-center space-x-2 px-4" to="/">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <span className="text-2xl font-extrabold font-sans font-serif whitespace-nowrap">Learning App</span>
        </Link>

        {/* <!-- nav --> */}
        <Routing />
      </div>

      {/* <!-- content --> */}
      <div className="flex-1 p-10 text-2xl font-bold">{children}</div>
    </div>
  );
};

export default Sidebar;
