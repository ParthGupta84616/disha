import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SignUpImg from "../assests/Signup.jpg";
import { AiOutlinePhone } from "react-icons/ai";

const Signup = ({ handleChange, handleSubmit, setCurrentStep }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (password, confirmPassword) => {
    if (password && confirmPassword && password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    validateMobileNumber(e.target.value);
  };

  const validateMobileNumber = (number) => {
    // Regular expression to match mobile numbers with country code
    const mobileNumberRegex = /^\+\d{1,4} \d{7,14}$/;
    if (!mobileNumberRegex.test(number)) {
      setMobileNumberError(
        "Invalid mobile number format. Use +<country_code> <number>."
      );
    } else {
      setMobileNumberError("");
    }
  };

  const handleSubmitWithValidation = (e) => {
    e.preventDefault();
    if (!passwordError && !mobileNumberError && password && confirmPassword) {
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl bg-gray-900 rounded-lg overflow-hidden">
      <div className="hidden md:block md:w-2/5 bg-indigo-600 p-10">
        <img
          src={SignUpImg}
          alt="Sign Up"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-3/5 p-10">
        <h1 className="text-3xl font-bold text-gray-100 mb-5">Sign Up</h1>
        <form onSubmit={handleSubmitWithValidation}>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="firstName"
              className="text-xs font-semibold text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
              placeholder="First Name"
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="middleName"
              className="text-xs font-semibold text-gray-300"
            >
              Middle Name (Optional)
            </label>
            <input
              type="text"
              id="middleName"
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
              placeholder="Middle Name"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="lastName"
              className="text-xs font-semibold text-gray-300"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
              placeholder="Last Name"
              required
            />
          </div>
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
              htmlFor="mobileNumber"
              className="text-xs font-semibold text-gray-300"
            >
              Mobile Number
            </label>
            <div className="flex items-center border-2 border-gray-600 bg-gray-700 rounded-lg">
              <AiOutlinePhone className="text-gray-400 ml-3" />{" "}
              <input
                type="text"
                id="mobileNumber"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                className="w-full pl-3 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
                placeholder="Mobile Number with country code"
                required
              />
            </div>
            {mobileNumberError && (
              <p className="text-red-500 text-xs mt-1">{mobileNumberError}</p>
            )}
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
                onChange={handlePasswordChange}
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
          <div className="flex flex-col mb-5">
            <label
              htmlFor="confirmPassword"
              className="text-xs font-semibold text-gray-300"
            >
              Confirm Password
            </label>
            <div className="flex items-center border-2 border-gray-600 bg-gray-700 rounded-lg">
              <AiOutlineLock className="text-gray-400 ml-3" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                onChange={handleConfirmPasswordChange}
                className="w-full pl-3 py-2 bg-gray-700 text-gray-300 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
                placeholder="Confirm Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="pr-3"
              >
                {showConfirmPassword ? (
                  <FaRegEyeSlash className="text-gray-400" />
                ) : (
                  <FaRegEye className="text-gray-400" />
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-xs mt-1">{passwordError}</p>
            )}
          </div>
          <div className="flex items-center justify-around w-full mt-8">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-3 font-semibold transition-all duration-300"
            >
              Sign Up
            </button>
            <button
              type="button"
              onClick={() => setCurrentStep("login")}
              className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg px-4 py-3 font-semibold transition-all duration-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
