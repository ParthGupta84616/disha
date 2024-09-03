import React from "react";
import ChatBot from "../assests/Chatbot.jpg"; 
import { Link } from "react-router-dom";

export default function AskDisha() {
  return (
    <div className="flex flex-col lg:flex-row lg:py-20 bg-gray-900">
      <section className="  text-white lg:w-1/2 w-full lg:flex">
        <div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-36 lg:flex lg:items-center lg:justify-center">
          <div className="mx-auto max-w-5xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-5xl">
            ASK DISHA
              <span className="sm:block text-3xl p-2"> AI-Powered User Service Chatbot </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl sm:text-xl/relaxed">
              A Chatbot to resolve Students queries and provide them with the best possible solution
            </p>
            <div className="mt-8 flex flex-wrap justify-center font-semibold gap-4 text-xl">
              <Link
                className="block w-full rounded-md border border-blue-600 bg-blue-600 px-14 py-4   text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                to="/login"
              >
                Get Started
              </Link>

              <Link
                className="block w-full rounded-md border border-blue-600 px-14 py-4   text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                to="/login#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className=" text-white w-full lg:w-1/2 lg:flex">
        <div className="relative mx-auto mt-4 md:mt-8 lg:flex lg:items-center lg:justify-center">
          <div className="lg:max-w-4xl lg:mx-auto lg:px-32 md:px-16">
            <img className="w-full h-auto rounded-l-full px-4 " src={ChatBot} alt="ChatBot" />
          </div>
        </div>
      </section>
    </div>
  );
}
