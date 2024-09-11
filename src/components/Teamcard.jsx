import React from "react";
import MK from "../assests/members/MK.jpg";
import MP from "../assests/members/MP.jpg";
import PL from "../assests/members/PL.jpg";
import SRP from "../assests/members/SRP.jpg";
import SS from "../assests/members/SS.jpg";
import ND from "../assests/members/ND.jpg";

// Reusable Card Component
const TeamMemberCard = ({ member }) => (
  <div className="p-4 flex lg:flex-row flex-col items-center text-center border rounded-lg shadow-md bg-gray-800 border-gray-700">
    <div className="lg:w-1/3 w-full flex flex-col items-center text-center">
      <img
        alt={member.name}
        className="rounded-lg w-24 h-24 object-cover object-center my-2"
        src={member.imgSrc}
      />
      <h2 className="title-font font-medium text-lg text-gray-100">
        {member.name}
      </h2>
      <h3 className="text-gray-400 mb-3">{member.role}</h3>
    </div>
    <div className="lg:w-2/3 w-full px-4 flex items-center text-left">
      <p className="mb-4 text-gray-300">{member.description}</p>
    </div>
  </div>
);

const teamMembers = [
  {
    id: 1,
    name: "Mohit Kumar",
    role: "Cloud Architect",
    description:
      "Specializes in designing and managing cloud infrastructure, ensuring scalability, security, and efficiency of cloud-based systems.",
    imgSrc: MK,
  },
  {
    id: 2,
    name: "Mayank Piparde",
    role: "Front-end Developer",
    description:
      "Skilled in creating dynamic and responsive user interfaces, translating design concepts into functional, engaging web applications.",
    imgSrc: MP,
  },
  {
    id: 3,
    name: "Priti Lalwani",
    role: "Project Manager",
    description:
      "Experienced in overseeing projects from conception to completion, ensuring timely delivery, budget adherence, and team coordination.",
    imgSrc: PL,
  },
  {
    id: 4,
    name: "Namish Dheer",
    role: "Back-end Developer",
    description:
      "Expert in server-side development, focusing on building robust and scalable backend systems, APIs, and database management.",
    imgSrc: ND,
  },
  {
    id: 5,
    name: "Sweta Raj Patel",
    role: "Operations Executive",
    description:
      "Focused on optimizing business operations, managing logistics, and improving efficiency across various organizational processes.",
    imgSrc: SRP,
  },
  {
    id: 6,
    name: "Shruti Sonane",
    role: "Marketing Manager",
    description:
      "Expert in developing and executing marketing strategies, driving brand awareness, and analyzing market trends to boost business growth.",
    imgSrc: SS,
  },
];

export default function Teamcard() {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-4xl font-bold title-font mb-4 text-gray-100 tracking-widest">
            Our Team Members
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            Meet our dedicated team of professionals who drive our mission
            forward. From innovative developers to creative designers, we're
            committed to delivering excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
