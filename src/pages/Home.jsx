import React from "react";
import groupImg from "../assests/groupImg.avif";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section className="text-gray-600 body-font dark: bg-gradient-to-r from-[#be9641] to-[#100a02] ">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow mt-5 md:mt-0 md:w-1/2 lg:w-2/5 lg:pr-16 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="text-2xl lg:pl-40 font-extrabold leading-9 pl-20 tracking-tight mb-3 text-gray-900 dark:text-black sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
              Introducing Disha
            </p>
            <p className="mb-8 md:pl-0  pl-2 dark:text-white text-3xl leading-9 font-bold text-center">
              A Smart platform for empowering Alumni-Student Connections for
              Career Growth.
            </p>
            <Link
              className="text-black lg:ml-64 mb-8 bg-gradient-to-r from-[#f1cb79] via-[#e6b243] to-[#ffd455] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#725b28] dark:focus:ring-[#ffd375] shadow-lg shadow-[#ffd271]/50 dark:shadow-lg dark:shadow-[#ffd271]/80 font-bold rounded-[20px] text-lg px-5 py-2.5 text-center me-2"
              to="/login"
            >
              Get Started
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img
              className="object-cover object-center rounded w-full h-auto  pl-4"
              alt="hero"
              src={groupImg}
            />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font bg-black">
        <div class="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-2xl text-[#e6b243] tracking-widest font-medium title-font mb-1">
              Join our satisfed customer now
            </h2>
            <h1 className="sm:text-3xl text-8xl font-medium title-font text-white ">
              Transform your Career trajectory with experienced Alumni
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img src={groupImg} alt="" />
                  </div>
                  <div className="pl-2">
                    <h2 className="text-white text-lg title-font font-medium">
                      Mohit Kumar
                    </h2>
                    <h4 className="text-gray-400 text-lg title-font">
                      Cloud Architect
                    </h4>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white">
                    Disha enabled me to guide aspring cloud professionals,
                    sharing insights and trends from the rapidly envolving from
                    ecosystem.
                  </p>
                  <a
                    href="/"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img src={groupImg} alt="" />
                  </div>
                  <div className="pl-2">
                    <h2 className="text-white text-lg title-font font-medium">
                      Mayank Piparde
                    </h2>
                    <h4 className="text-gray-400 text-lg title-font">
                      Front-end Developer
                    </h4>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white">
                    Through Disha, I’ve been able to mentor students on scalable
                    backend architecture, making a meaningful impact on their
                    learning journey.
                  </p>
                  <a
                    href="/"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img src={groupImg} alt="" />
                  </div>
                  <div className="pl-2">
                    <h2 className="text-white text-lg title-font font-medium">
                      Namish Dheer
                    </h2>
                    <h4 className="text-gray-400 text-lg title-font">
                      Back-end Developer
                    </h4>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white">
                    Disha has been a game-changer, allowing me to easily connect
                    with students and share the latest front-end technologies
                    and best practices.
                  </p>
                  <a
                    href="/"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img src={groupImg} alt="" />
                  </div>
                  <div className="pl-2">
                    <h2 className="text-white text-lg title-font font-medium">
                      Priti Lalwani
                    </h2>
                    <h4 className="text-gray-400 text-lg title-font">
                      Project Manager
                    </h4>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white">
                    Disha has been an excellent platform for mentoring students
                    on effective project management and leadership skills,
                    enhancing their career readiness.
                  </p>
                  <a
                    href="/"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img src={groupImg} alt="" />
                  </div>
                  <div className="pl-2">
                    <h2 className="text-white text-lg title-font font-medium">
                      Sweta Raj Patel
                    </h2>
                    <h4 className="text-gray-400 text-lg title-font">
                      Operations Executive
                    </h4>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white">
                    I love how Disha facilitates seamless communication with
                    students, allowing me to share real-world operations
                    strategies and industry workflows.
                  </p>
                  <a
                    href="/"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img src={groupImg} alt="" />
                  </div>
                  <div className="pl-2">
                    <h2 className="text-white text-lg title-font font-medium">
                      Shruti Sonane
                    </h2>
                    <h4 className="text-gray-400 text-lg title-font">
                      Marketing Manager
                    </h4>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white">
                    With Disha, Ive enjoyed engaging with students and
                    discussing innovative marketing tactics, empowering the next
                    generation of marketers.
                  </p>
                  <a
                    href="/"
                    className="mt-3 text-indigo-500 inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
