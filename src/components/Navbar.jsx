import React from "react";
import disha from "../assests/disha.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-slate-900 bg-gradient-to-b from-slate-900 to-gray-900">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b border-gray-300">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={disha} alt="logo" className="w-44 h-16" />
          </Link>
          <nav className="md:ml-auto flex flex-wrap lg:gap-10 lg:mr-10 sm:gap-8 gap-4 items-center lg:text-xl text-md justify-center text-gray-200 font-semibold">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/dashboard" className="hover:text-gray-400">
              Dashboard
            </Link>
            <Link to="/ask-disha" className="hover:text-gray-400">
              Ask Disha
            </Link>
            <Link to="/institution" className="hover:text-gray-400">
              Institution
            </Link>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link to="/pricing" className="hover:text-gray-400">
              Pricing
            </Link>
          </nav>
          <Link
            className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
            to="/login"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>

            <span className="text-sm font-medium transition-all group-hover:me-4">
              Signup
            </span>
          </Link>
        </div>
      </header>
    </div>
  );
}
