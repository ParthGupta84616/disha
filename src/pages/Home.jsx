import React from "react";
import groupImg from "../assests/groupImg.avif";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="text-gray-600 body-font bg-gradient-to-r sm:py-2 lg:py-5 from-[#be9641] to-[#100a02]">
        <div className="container mx-auto flex flex-col md:flex-row md:px-24 md:justify-between md:py-10 items-center">
          <div className="flex-col mt-5 md:mt-0 md:w-1/2 lg:w-3/5 lg:pr-16 md:pr-16 flex md:items-center md:text-left text-center">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 dark:text-black sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
              Introducing Disha
            </h1>
            <p className="mb-8 mx-14 lg:text-3xl md:text-2xl leading-7 md:leading-9 font-bold text-white text-center">
              A Smart platform for empowering Alumni-Student Connections for
              Career Growth.
            </p>
            <Link
              to="/login"
              className="text-black mx-auto md:mx-0 bg-gradient-to-r from-[#f1cb79] via-[#e6b243] to-[#ffd455] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-[#725b28] dark:focus:ring-[#ffd375] shadow-lg font-bold rounded-[20px] text-lg px-5 py-2.5"
            >
              Get Started
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-2/4 mx-auto mt-6">
            <img
              className="object-cover object-center rounded w-full h-auto"
              alt="hero"
              src={groupImg}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-2xl text-[#e6b243] tracking-widest font-medium title-font mb-1">
              Join our satisfied customers now
            </h2>
            <h1 className="sm:text-3xl text-2xl md:text-5xl mx-8 font-medium title-font text-white">
              Transform your Career trajectory with experienced Alumni
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Testimonial 1 */}
            <Testimonial
              name="Mohit Kumar"
              role="Cloud Architect"
              feedback="Disha enabled me to guide aspiring cloud professionals, sharing insights and trends from the rapidly evolving cloud ecosystem."
              imgSrc={groupImg}
            />

            {/* Testimonial 2 */}
            <Testimonial
              name="Mayank Piparde"
              role="Front-end Developer"
              feedback="Through Disha, I’ve been able to mentor students on scalable backend architecture, making a meaningful impact on their learning journey."
              imgSrc={groupImg}
            />

            {/* Testimonial 3 */}
            <Testimonial
              name="Namish Dheer"
              role="Back-end Developer"
              feedback="Disha has been a game-changer, allowing me to easily connect with students and share the latest front-end technologies and best practices."
              imgSrc={groupImg}
            />

            {/* Testimonial 4 */}
            <Testimonial
              name="Priti Lalwani"
              role="Project Manager"
              feedback="Disha has been an excellent platform for mentoring students on effective project management and leadership skills, enhancing their career readiness."
              imgSrc={groupImg}
            />

            {/* Testimonial 5 */}
            <Testimonial
              name="Sweta Raj Patel"
              role="Operations Executive"
              feedback="I love how Disha facilitates seamless communication with students, allowing me to share real-world operations strategies and industry workflows."
              imgSrc={groupImg}
            />

            {/* Testimonial 6 */}
            <Testimonial
              name="Shruti Sonane"
              role="Marketing Manager"
              feedback="With Disha, I've enjoyed engaging with students and discussing innovative marketing tactics, empowering the next generation of marketers."
              imgSrc={groupImg}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Testimonial({ name, role, feedback, imgSrc }) {
  return (
    <div className="p-4 sm:w-1/2 md:w-1/3">
      <div className="flex rounded-lg h-full bg-gray-900 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <img src={imgSrc} alt={`${name}'s testimonial`} />
          </div>
          <div className="pl-2">
            <h2 className="text-white text-lg title-font font-medium">
              {name}
            </h2>
            <h4 className="text-gray-400 text-lg title-font">{role}</h4>
          </div>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-white">{feedback}</p>
          <a href="/" className="mt-3 text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
