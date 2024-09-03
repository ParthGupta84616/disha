import React, { useState } from 'react';

const faqItems = [
  {
    question: 'How does Disha ensure the authenticity of alumni profiles?',
    answer: 'Disha utilizes blockchain technology to verify and authenticate alumni profiles. This ensures that all users are genuine and their credentials are verified, preventing fake profiles and fostering a secure networking environment.',
  },
  {
    question: 'Can students choose their mentors on Disha, or are they automatically matched?',
    answer: 'Students can either be automatically matched with mentors using our AI-driven recommendation system based on interests and career goals, or they can use advanced search filters to choose mentors manually from the alumni network.',
  },
  {
    question: 'How does the AI-driven chatbot assist users on the platform?',
    answer: 'The AI-driven chatbot on Disha is available 24/7 to assist users with common queries, provide guidance on navigating the platform, suggest relevant resources, and facilitate quick connections with alumni or mentors based on specific needs.',
  },
  {
    question: 'What types of events and interactions can I participate in on Disha?',
    answer: 'Disha offers a variety of events including online webinars, alumni meetups, panel discussions, and career guidance sessions. These events are designed to provide valuable insights, networking opportunities, and real-world experience-sharing directly from industry experts and alumni.',
  },
  {
    question: 'How is user data protected on the Disha platform?',
    answer: 'Disha prioritizes user data privacy and security by implementing two-factor authentication (2FA) and robust encryption methods.',
  }
];

export default function FAQ() {
  const [openIndices, setOpenIndices] = useState([]);

  const handleClick = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index) // Close the clicked item
        : [...prevIndices, index] // Open the clicked item
    );
  };

  return (
    <main className="p-5 bg-gray-900 text-gray-100">
      <div className="flex justify-center items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-4xl font-semibold text-gray-300 mb-2">Frequently Asked Questions</h2>
          <ul className="flex flex-col">
            {faqItems.map((item, index) => (
              <li key={index} className="bg-gray-800 my-2 shadow-lg rounded-lg">
                <h2
                  onClick={() => handleClick(index)}
                  className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer hover:rounded-t-lg hover:bg-gray-700"
                >
                  <span>{item.question}</span>
                  <svg
                    className={`fill-current text-teal-600 h-6 w-6 transition-transform duration-500 ${openIndices.includes(index) ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                  </svg>
                </h2>
                <div
                  className={`border-l-2 border-teal-600 overflow-hidden transition-all duration-500 rounded-b-lg ${openIndices.includes(index) ? 'max-h-screen' : 'max-h-0'}`}
                  style={{ maxHeight: openIndices.includes(index) ? '1000px' : '0' }}
                >
                  <p className="p-3">
                    {item.answer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
