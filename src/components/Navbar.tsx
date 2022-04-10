/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {  NavLink, useNavigate } from "react-router-dom";

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
// //   { name: 'Team', href: '#', current: false },
// //   { name: 'Projects', href: '#', current: false },
// //   { name: 'Calendar', href: '#', current: false },
// ]


export default function Navbar(): JSX.Element {
  let navigate = useNavigate();
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div
               
                className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
              >
                <div className="flex-shrink-0 flex items-center  cursor-pointer  "
                 onClick={() => navigate("/")}>
                  <img
                    className="block lg:hidden h-10 w-auto "
                    src="1.svg"
                    alt="Test Driven Development"
                  />
                  <img
                    className="hidden lg:block h-10 w-auto object-cover"
                    src="1.svg"
                    alt="Test Driven Development"
                  />
                  <h2 className="bg-gray-900 rounded-md p-2 font-bold hover:text-blue-400 text-red-100 font-sans font-serif text-lg">
                    Test Driven Development (TDD)
                  </h2>
                </div>
              </div>

              <NavLink
                className={({ isActive }) =>
                  `h-full pt-5 text-white font-semibold  font-sans font-serif  hover:text-blue-400 outline-none hover:border-blue-400 border-transparent border-b-4  ${isActive && " border-b-4 border-blue-300 text-blue-400"}`
                }
                to="/about"
              >
                About
              </NavLink>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
                <button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <img className="h-10 w-auto" src="2.png" alt="" />
                </button>

                {/* Profile dropdown */}
                <img className="h-10 w-10 rounded-full object-contain" src="3.jpg" alt="" />

              
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
}
