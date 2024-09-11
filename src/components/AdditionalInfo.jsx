import React from "react";
import SignUpImg from "../assests/Signup.jpg";

const yearOptions = Array.from({ length: 50 }, (_, i) => 1990 + i);

const AdditionalInfo = ({ handleChange, handleSubmit, setCurrentStep }) => {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl bg-gray-900 rounded-lg overflow-hidden">
      <div className="hidden md:block md:w-2/5 bg-indigo-600 p-10">
        <img
          src={SignUpImg}
          alt="Additional Info"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="w-full  md:w-3/5 p-10">
        <h1 className="text-3xl font-bold text-gray-100 mb-5">
          Additional Information
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row justify-between items-cente">
            <div className="flex flex-col mb-5 w-72">
              <label
                htmlFor="country"
                className="text-xs font-semibold text-gray-300"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
                placeholder="Country"
                required
              />
            </div>
            <div className="flex flex-col mb-5 w-72">
              <label
                htmlFor="state"
                className="text-xs font-semibold text-gray-300"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
                placeholder="State"
                required
              />
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="district"
              className="text-xs font-semibold text-gray-300"
            >
              District
            </label>
            <input
              type="text"
              id="district"
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
              placeholder="District"
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="college"
              className="text-xs font-semibold text-gray-300"
            >
              College
            </label>
            <input
              type="text"
              id="college"
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
              placeholder="College"
              required
            />
          </div>
          <div className="flex flex-col mb-5">
            <label
              htmlFor="department"
              className="text-xs font-semibold text-gray-300"
            >
              Department
            </label>
            <input
              type="text"
              id="department"
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
              placeholder="Department"
              required
            />
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col mb-5 w-72">
              <label
                htmlFor="joiningYear"
                className="text-xs font-semibold text-gray-300"
              >
                Joining Year
              </label>
              <select
                id="joiningYear"
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
                required
              >
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col mb-5 w-72">
              <label
                htmlFor="passoutYear"
                className="text-xs font-semibold text-gray-300"
              >
                Passout Year
              </label>
              <select
                id="passoutYear"
                onChange={handleChange}
                className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
                required
              >
                {yearOptions.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <label
              htmlFor="domain"
              className="text-xs font-semibold text-gray-300"
            >
              Domain
            </label>
            <input
              type="text"
              id="domain"
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-gray-300 border-2 border-gray-600 rounded-lg outline-none focus:border-indigo-500 transition-all duration-300"
              placeholder="Domain"
              required
            />
          </div>
          <div className="flex items-center justify-around w-full">
            <div className="flex items-center  justify-around my-4 w-2/3">
              <button
                type="submit"
                className="bg-indigo-600 w-28 hover:bg-indigo-700 text-white rounded-lg px-4 py-3 font-semibold transition-all duration-300"
              >
                Next
              </button>
              <button
                type="button"
                onClick={() => setCurrentStep("signup")}
                className="bg-gray-600 w-28 hover:bg-gray-700 text-white rounded-lg px-4 py-3 font-semibold transition-all duration-300"
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdditionalInfo;
