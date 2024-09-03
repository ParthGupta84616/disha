import React, { useState } from "react";
import free from "../assests/free.png";

// Reusable Feature List Component
const FeatureList = ({ features, isIncluded }) => (
  <ul className="flex-1 space-y-4">
    {features.map((feature, index) => (
      <li key={index} className="flex items-center">
        <svg
          className={`w-6 h-6 ${
            isIncluded ? "text-green-400" : "text-red-400"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox={isIncluded ? "0 0 20 20" : "0 0 24 24"}
          fill={isIncluded ? "currentColor" : "none"}
          stroke={isIncluded ? "none" : "currentColor"}
        >
          {isIncluded ? (
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          ) : (
            <>
              <circle
                cx="13"
                cy="12"
                r="8"
                stroke="red"
                strokeWidth="2"
                fill="red"
              />
              <path stroke="white" strokeWidth="2" d="M8 8l8 8M8 16l8-8" />
            </>
          )}
        </svg>
        <span className="ml-3 text-lg font-medium text-gray-300">
          {feature}
        </span>
      </li>
    ))}
  </ul>
);

// Pricing Component
const Pricing = () => {
  const [billPlan, setBillPlan] = useState("monthly");

  const plans = [
    {
      id: "standard",
      name: "Standard",
      price: { monthly: 0, annually: 0 },
      description: "Includes Standard features",
      featuresIncluded: [
        "Profile Creation",
        "Standard Job Search",
        "Discussion Forums",
        "Event Participation",
        "Mentorship Requests",
      ],
      featuresNotIncluded: [
        "Personalized Job Matching",
        "Advanced Mentorship Matching",
        "Learning Resources Integration",
      ],
    },
    {
      id: "premium",
      name: "Premium",
      price: { monthly: 9, annually: 99 },
      description: "Includes Premium features",
      featuresIncluded: [
        "Profile Creation",
        "Standard Job Search",
        "Discussion Forums",
        "Event Participation",
        "Mentorship Requests",
        "Personalized Job Matching",
        "Advanced Mentorship Matching",
        "Learning Resources Integration",
      ],
      featuresNotIncluded: [],
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900">
      <main className="flex-1 py-12 px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Flexible Pricing Plans
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Get the right plan for your Growth needs
          </p>

          <div className="mt-8">
            <button
              onClick={() => setBillPlan("monthly")}
              className={`px-4 py-2 rounded-full border ${
                billPlan === "monthly"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-blue-500 border-blue-500"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillPlan("annually")}
              className={`ml-4 px-4 py-2 rounded-full border ${
                billPlan === "annually"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-blue-500 border-blue-500"
              }`}
            >
              Annual Billing
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
          {plans.map((plan) => (
            <section
              key={plan.id}
              className="flex flex-col w-full max-w-xl p-12 space-y-6 bg-gray-800 rounded-lg shadow-lg"
            >
              {/* Price */}
              <div className="flex flow-row justify-between">
                <div className="flex-shrink-0">
                  <span
                    className={`text-4xl font-medium tracking-tight ${
                      plan.name === "Standard" ? "text-green-500" : "text-white"
                    }`}
                  >
                    $
                    {billPlan === "monthly"
                      ? plan.price.monthly
                      : plan.price.annually}
                  </span>
                  <span className="text-gray-400">
                    {billPlan === "monthly" ? "/month" : "/year"}
                  </span>
                </div>
                {/* Conditionally render the logo only for the Standard plan */}
                {plan.name === "Standard" && (
                  <img src={free} alt="logo" className="w-24 h-12" />
                )}
              </div>

              {/* Description */}
              <div className="flex-shrink-0 pb-6 space-y-2 border-b border-gray-700">
                <h2 className="text-2xl font-normal text-white">{plan.name}</h2>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              {/* Features Included */}
              <FeatureList features={plan.featuresIncluded} isIncluded={true} />

              {/* Features Not Included */}
              <FeatureList
                features={plan.featuresNotIncluded}
                isIncluded={false}
              />

              {/* Button */}
              <div className="flex-shrink-0 pt-4">
                <button
                  className={`inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    plan.name === "Standard"
                      ? "bg-indigo-400 text-lg text-white hover:bg-indigo-700"
                      : "bg-indigo-400 text-lg text-white hover:bg-yellow-500"
                  }`}
                >
                  Get {plan.name}
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Pricing;
