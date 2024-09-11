import React from "react";

function InstituteCard({ image, title, description, link }) {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <div className="rounded-lg overflow-hidden flex items-center justify-center">
        {/* Image container with responsive aspect ratio */}
        <div className="relative w-full h-32 sm:w-32 sm:h-32 lg:w-52 lg:h-52">
          <img
            alt="content"
            className="absolute inset-0 object-cover w-full h-full"
            src={image || "https://dummyimage.com/720x400"}
          />
        </div>
      </div>
      <div className="mt-4 sm:mt-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-100">
          {title}
        </h2>
        <p className="mt-2 justify-evenly text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
          {description}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 sm:mt-6 text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 rounded-[20px] px-4 py-2 sm:px-6 sm:py-3">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}

export default InstituteCard;
