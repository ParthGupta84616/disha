import React from "react";
import { Link } from "react-router-dom";
import instituteimage from "../assests/instituteimage.jpg";

function InstituteHeroSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center lg:py-28 px-4 lg:px-10 bg-white dark:bg-gray-900">
      <div className="flex flex-col lg:py-0 justify-center items-center lg:items-start text-center lg:text-left max-w-6xl mx-4 lg:mx-8">
        <p className="my-3 text-sm tracking-widest text-indigo-500 uppercase">
          Our Prestigious Affiliations
        </p>
        <h1 className="my-3 text-2xl font-bold tracking-tight text-gray-800 md:text-4xl dark:text-gray-100">
          Partnered Institutions
        </h1>
        <p className="max-w-full md:max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-lg dark:text-gray-400">
          Discover the esteemed institutions that have partnered with us to
          provide top-notch services and solutions. Our affiliations ensure
          the highest standards of quality and innovation.
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 mt-6">
          <Link
            className="inline-block w-full lg:w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-[20px] shadow-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-translate-y-px"
            to="/institute"
          >
            View Affiliated Institutes
          </Link>
          <Link
            className="inline-block w-full lg:w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-[20px] shadow-xl hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-translate-y-px"
            to="/"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <img
          src={instituteimage}
          alt="institute"
          className="object-cover h-[500px] w-[500px] rounded-2xl"
        />
      </div>
    </div>
  );
}

export default InstituteHeroSection;
