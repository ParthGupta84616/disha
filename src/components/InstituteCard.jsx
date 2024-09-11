import React from "react";

function InstituteCard({ image, title, description, link }) {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex justify-center relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <img
          alt={title}
          className="object-cover w-56 aspect-square"
          src={image}
        />
      </div>
      <div className="mt-4 sm:mt-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-100">
          {title}
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
          {description}
        </p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="mt-4 sm:mt-6 text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg px-4 py-2 sm:px-6 sm:py-3">
              Learn More
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default InstituteCard;
