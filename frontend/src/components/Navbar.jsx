import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useProductStore } from '../store/product';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useProductStore();

  return (
    <nav className="bg-[#171717] p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to={"/"} className="text-white text-2xl font-bold">
          Product Store
        </Link>

        {/* Menu for larger screens */}
        <div className="hidden md:flex space-x-4 text-xl">
          <Link
            to={"/"}
            className="text-gray-300  hover:text-white font-bold transition-all duration-300 ease-in-out hover:scale-105"
          >
            Home
          </Link>
          <Link
            to={"/create"}
            className="text-gray-300 hover:text-white font-bold transition-all duration-300 ease-in-out hover:scale-105"
          >
            Create
          </Link>
          {/* <Link
            href="#"
            className="text-gray-300 hover:text-white font-bold transition-all duration-300 ease-in-out hover:scale-105"
          >
            View
          </Link> */}
        </div>

        {/* Login and Signup buttons */}
        <div className="hidden md:flex space-x-2 items-center">
          <Link
            to={"/login"}
            className=" bg-slate-200 text-black px-4 py-2 rounded-md   font-bold transition-all duration-300 ease-in-out hover:scale-105"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="bg-[#39C3EF] text-black px-4 py-2 rounded-md font-bold transition-all duration-300 ease-in-out hover:scale-105 "
          >
            Signup
          </Link>
        </div>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`${
          isOpen ? 'block animate-slide-down' : 'hidden'
        } md:hidden mt-2 space-y-2 items-center flex flex-col gap-3 font-bold transition-all duration-500 ease-in-out`}
      >
        <Link
          to={"/"}
          className="block text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
        >
          Home
        </Link>
        <Link
          to={"/create"}
          className="block text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
        >
          Create
        </Link>
        {/* <Link
          to={"/login"}
          className="block text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
        >
          View
        </Link> */}
        <Link
          to={"/login"}
          className="block rounded-md px-4 py-2 bg-slate-200 text-black hover:bg-slate-400 font-bold transition-all duration-300 ease-in-out hover:scale-105"
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="block bg-[#39C3EF] text-black px-4 py-2 rounded-md   font-bold transition-all duration-300 ease-in-out hover:scale-105"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
