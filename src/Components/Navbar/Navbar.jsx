import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/mens", label: "Men" },
    { path: "/womens", label: "Women" },
    { path: "/aboutus", label: "About US" },
    { path: "/contactus", label: "Contact US" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-slate-50 shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and mobile menu button */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <h2 className="text-2xl font-bold text-slate-600">
                VENUS
                <span className="text-[8px] border p-0.5 ml-0.5">chaitu</span>
              </h2>
            </Link>
          </div>

          {/* Desktop menu (hidden on mobile) */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-slate-600 hover:text-slate-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop auth buttons (hidden on mobile) */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-2">
              <Link
                to="/signin"
                className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 text-sm font-medium"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 text-gray-800 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-sm font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-slate-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (show/hide based on menu state) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-50">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-slate-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="mt-3 space-y-1">
              <Link
                to="/signin"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md hover:bg-gray-700 text-base font-medium"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block w-full px-4 py-2 text-center text-gray-800 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-base font-medium"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
