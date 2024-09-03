import React from "react";

function InstituteCard({ image, title, description, link }) {
  return (
    <div className="p-4 sm:p-10 sm:px-24" bis_skin_checked="1">
      <div className="rounded-lg overflow-hidden flex items-center justify-center" bis_skin_checked="1">
        <img
          alt="content"
          className="object-cover object-center h-[300px] w-[300px] "
          src={image || "https://dummyimage.com/720x400"} 
        />
      </div>
      <h2 className="title-font text-xl  sm:text-2xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3">
        {title}
      </h2>
      <p className="leading-relaxed text-sm sm:text-base text-gray-400">
        {description}
      </p>
      <a href={link} target="blank">
        <button className="flex mx-auto mt-4 sm:mt-6 text-white bg-indigo-500 border-0 py-2 sm:py-3 px-4 sm:px-6 focus:outline-none hover:bg-indigo-600 rounded">
          Learn More
        </button>
      </a>
    </div>
  );
}

export default InstituteCard;
