import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import LoginImg from "../assests/Login.jpg";

const Login = ({ handleChange, handleSubmit, setCurrentStep }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden">
      <div className="hidden md:block md:w-1/2 bg-indigo-600 p-10">
        <img
          src={LoginImg}
          alt="Login"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 p-10">
        <h1 className="text-3xl font-bold text-gray-100 mb-5">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="email"
              className="text-xs font-semibold text-gray-300"
            >
              Email
            </label>
            <div className="flex items-center border-2 border-gray-600 bg-gray-700 rounded-lg">
              <AiOutlineMail className="text-gray-400 ml-3" />
              <input
                type="email"
                id="email"
                onChange={handleChange}
                className="w-full pl-3 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="password"
              className="text-xs font-semibold text-gray-300"
            >
              Password
            </label>
            <div className="flex items-center border-2 border-gray-600 bg-gray-700 rounded-lg">
              <AiOutlineLock className="text-gray-400 ml-3" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={handleChange}
                className="w-full pl-3 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="pr-3"
              >
                {showPassword ? (
                  <FaRegEyeSlash className="text-gray-400" />
                ) : (
                  <FaRegEye className="text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-3 font-semibold transition-all duration-300"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep("signup")}
              className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg px-4 py-3 font-semibold transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
