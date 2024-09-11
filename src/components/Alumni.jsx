import React from "react";
import BG from "../assests/BG.jpg";

const cards = [
  {
    id: 1,
    category: "React Developer",
    name: "Alumni 1",
    description:
      "Experienced React Developer with a strong background in building scalable web applications and a passion for front-end technologies.",
    imageSrc: BG,
    likes: "4.2K",
    comments: "15",
  },
  {
    id: 2,
    category: "React Native Developer",
    name: "Alumni 2",
    description:
      "Skilled React Native Developer specializing in mobile app development with a focus on creating seamless user experiences across platforms.",
    imageSrc: BG,
    likes: "4.0K",
    comments: "12",
  },
  {
    id: 3,
    category: "Java Developer",
    name: "Alumni 3",
    description:
      "Proficient Java Developer with extensive experience in building robust and efficient back-end systems and enterprise applications.",
    imageSrc: BG,
    likes: "3.4K",
    comments: "11",
  },
  {
    id: 4,
    category: "Python Developer",
    name: "Alumni 4",
    description:
      "Versatile Python Developer with expertise in data analysis, machine learning, and building high-performance applications.",
    imageSrc: BG,
    likes: "3.0K",
    comments: "9",
  },
  {
    id: 5,
    category: "Data Analyst",
    name: "Alumni 5",
    description:
      "Detail-oriented Data Analyst skilled in extracting insights from complex datasets and driving business decisions through data-driven strategies.",
    imageSrc: BG,
    likes: "2.6K",
    comments: "8",
  },
  {
    id: 6,
    category: "DBA",
    name: "Alumni 6",
    description:
      "Experienced Database Administrator with a strong track record in managing and optimizing database systems for reliability and performance.",
    imageSrc: BG,
    likes: "2.2K",
    comments: "6",
  },
];

export default function Dashboard() {
  return (
    <div className="bg-gray-900 text-gray-100">
      <section className="text-gray-600 dark:text-gray-300 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2 className="font-bold text-3xl lg:text-4xl mb-6">Alumni</h2>
          <h3 className="font-semibold text-gray-400 text-lg lg:text-xl mb-6">
            Top Alumni From Various Fields
          </h3>

          <div className="flex flex-wrap -m-4">
            {cards.map((card) => (
              <div key={card.id} className="p-4 md:w-1/2 lg:w-1/3">
                <div className="h-full border-2 border-gray-200 dark:border-gray-700 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={card.imageSrc}
                    alt={card.name}
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-md title-font font-medium text-gray-400 mb-1">
                      {card.category}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
                      {card.name}
                    </h1>
                    <p className="leading-relaxed mb-3">{card.description}</p>
                    <div className="flex items-center flex-wrap">
                      <a
                        href="/"
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Connect
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 border-r-2 border-gray-200 dark:border-gray-600">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        {card.likes}
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                        {card.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
