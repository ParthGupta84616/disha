import React from "react";
import { useParams } from "react-router-dom";
import {
  FaJava,
  FaJs,
  FaReact,
  FaPython,
  FaCuttlefish,
  FaPhp,
  FaNodeJs,
  FaSwift,
} from "react-icons/fa";
import { RiTailwindCssFill, RiAngularjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

// Dummy skill data
const skills = [
  {
    index: 1,
    name: "JavaScript",
    description: "A versatile programming language used for web development.",
    icon: <FaJs className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    index: 2,
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: <FaReact className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://reactjs.org/",
  },
  {
    index: 3,
    name: "Tailwind CSS",
    description: "A utility-first CSS framework for creating custom designs.",
    icon: <RiTailwindCssFill className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://tailwindcss.com/",
  },
  {
    index: 4,
    name: "React Native",
    description: "A framework for building native apps using React.",
    icon: <FaReact className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://reactnative.dev/",
  },
  {
    index: 5,
    name: "TypeScript",
    description: "A superset of JavaScript that adds static types.",
    icon: <SiTypescript className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://www.typescriptlang.org/",
  },
  {
    index: 6,
    name: "Python",
    description:
      "A high-level programming language known for its readability and versatility.",
    icon: <FaPython className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://www.python.org/",
  },
  {
    index: 7,
    name: "Java",
    description:
      "A high-level, class-based, object-oriented programming language.",
    icon: <FaJava className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://www.oracle.com/java/",
  },
  {
    index: 8,
    name: "C++",
    description: "A powerful general-purpose programming language.",
    icon: <FaCuttlefish className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://isocpp.org/",
  },
  {
    index: 9,
    name: "PHP",
    description:
      "A popular general-purpose scripting language for web development.",
    icon: <FaPhp className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://www.php.net/",
  },
  {
    index: 10,
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    icon: <FaNodeJs className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://nodejs.org/",
  },
  {
    index: 11,
    name: "Swift",
    description:
      "A powerful and intuitive programming language for iOS and macOS.",
    icon: <FaSwift className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://swift.org/",
  },
  {
    index: 12,
    name: "Angular",
    description: "A platform for building mobile and desktop web applications.",
    icon: <RiAngularjsFill className="text-3xl lg:text-4xl text-gray-200" />,
    link: "https://angular.io/",
  },
];

// Mapping of alumniId to the number of skills to display
const alumniSkillsCount = {
  "1": 5,
  "2": 9,
  "3": 7,
  "4": 4,
  "5": 8,
  "6": 6,

};

// Utility function to get a random subset of skills
const getRandomSkills = (allSkills, numberOfSkills) => {
  const shuffledSkills = [...allSkills].sort(() => 0.5 - Math.random());
  return shuffledSkills.slice(0, numberOfSkills);
};

// SkillCard Component
const SkillCard = ({ skill }) => (
  <div className="p-5 rounded-lg bg-gray-800 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
    <div className="flex items-center space-x-2">
      <div>{skill.icon}</div>
      <div className="py-2 px-4">
        <a
          href={skill.link}
          className="text-lg lg:text-xl font-medium text-blue-400 hover:underline"
          aria-label={`Learn more about ${skill.name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {skill.name}
        </a>
        <p className="text-md lg:text-lg text-gray-300">{skill.description}</p>
      </div>
    </div>
  </div>
);

// Skills Component
export default function Skills() {
  const { alumniId } = useParams(); // Get the alumniId from the URL

  // Determine the number of skills to display based on alumniId
  const numberOfSkills = alumniSkillsCount[alumniId] || 0;

  // Generate a random subset of skills
  const selectedSkills = getRandomSkills(skills, numberOfSkills);

  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center">
      <div className="container sm:p-6 md:p-8 lg:p-10">
        <h2 className="font-bold pl-4 text-3xl lg:text-4xl mb-6">Skills of Alumni {alumniId}</h2>
        <h3 className="font-semibold pl-4 text-gray-400 text-lg lg:text-xl mb-6">
          You can identify Skills to Enhance Your Abilities
        </h3>
        <div className="grid p-10 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {selectedSkills.map((skill) => (
            <SkillCard key={skill.index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
