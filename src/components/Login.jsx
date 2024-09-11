import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import LoginImg from "../assests/Login.jpg";

const Login = ({ handleChange, handleSubmit, setCurrentStep }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl bg-gray-800 rounded-3xl overflow-hidden">
      <div className="hidden md:block md:w-1/2 bg-gray-700 p-10">
        <img
          src={LoginImg}
          alt="Login"
          className="w-full brightness-90 h-full rounded-l-3xl object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="w-full flex-1 md:w-1/2 p-10 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-100 mb-5">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-md font-semibold text-gray-300 mb-1"
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
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-md font-semibold text-gray-300 mb-1"
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
          <div className="flex items-center justify-end space-x-2">
            <p>Don't have an account?</p>
            <button
              onClick={() => setCurrentStep("signup")}
              className="text-blue-500 cursor-pointer bg-transparent border-none"
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-around w-full mt-8">
            <button
              type="submit"
              className="bg-blue-500 rounded-xl w-36 text-xl hover:bg-blue-600 text-white px-4 py-3 font-semibold transition-all duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
