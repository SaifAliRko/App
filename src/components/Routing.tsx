import { Link, NavLink, Routes } from "react-router-dom";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Routing = () => {
  return (
    <div>
      <nav>
        <Link
          className="font-sans  text-lg font-bold block py-2.5 px-4 rounded hover:text-blue-400 transition duration-200 hover:bg-gray-800 hover:text-white"
          to="intro"
        >
          Intro
        </Link>
        <Link
          className="font-sans  text-lg font-bold  block py-2.5 px-4 rounded  hover:text-blue-400 transition duration-200 hover:bg-gray-800 hover:text-white"
          to="getStarted"
        >
          Get Started
        </Link>
        <Link
          className="font-sans  text-lg font-bold  block py-2.5 px-4 rounded hover:text-blue-400 transition duration-200 hover:bg-gray-800 hover:text-white"
          to="types"
        >
          Types Declaration
        </Link>
        <Link
          className="font-sans  text-lg font-bold  block py-2.5 px-4 rounded hover:text-blue-400 transition duration-200 hover:bg-gray-800 hover:text-white"
          to="reducer"
        >
          State Reducer
        </Link>
        <Link
          className="font-sans  text-lg font-bold  block py-2.5 px-4 rounded hover:text-blue-400 transition duration-200 hover:bg-gray-800 hover:text-white"
          to="testinStarted"
        >
          Testing Started
        </Link>
        <Link
          className="font-sans  text-lg font-bold  block py-2.5 px-4 rounded hover:text-blue-400 transition duration-200 hover:bg-gray-800 hover:text-white"
          to="addItem"
        >
          Add and Test Item
        </Link>
        <Link
          className="font-sans  text-lg font-bold  block py-2.5 px-4 rounded hover:text-blue-400 transition duration-200 hover:bg-gray-800 hover:text-white"
          to="editDelete"
        >
          Edit / Delete Item 
        </Link>
        <Link
          className="font-sans  text-lg font-bold  block py-2.5 px-4 rounded hover:text-blue-400 transition duration-200 hover:bg-gray-800 hover:text-white"
          to="userInterface"
        >
          User Interface 
        </Link>
      </nav>
    </div>
  );
};

export default Routing;
