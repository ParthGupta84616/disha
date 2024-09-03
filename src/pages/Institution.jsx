import React from "react";
import InstituteCard from "../components/InstituteCard";
import InstituteHeroSection from "../components/InstituteHeroSection";
import AcropolisLogo from "../assests/AcropolisLogo.png"
import BitLogo from "../assests/BitLogo.png"
import CLG2 from "../assests/CLG2.png"
import CLG3 from "../assests/CLG3.png"
import CLG4 from "../assests/CLG4.png"
import CLG5 from "../assests/CLG5.png"
import CLG6 from "../assests/CLG6.png"
import CLG7 from "../assests/CLG7.png"

const instituteData = [
  {
    title: "Acropolis Institute of Technology and Research",
  description: "Located in Indore, Acropolis Institute of Technology and Research offers engineering and management programs with a focus on innovation, practical training, and industry engagement.",
  link: "https://aitr.ac.in/",
  Logo: AcropolisLogo
  },
  {
    title: "Bhilai Institute of Technology (BIT)",
    description: "BIT Bhilai provides high-quality education in engineering and technology, with a focus on research and industry-oriented training, making it a leading technical institute in the region.",
    link: "http://www.bitdurg.ac.in/",
    Logo : BitLogo
  },
  {
    "title": "Radharaman College of Engineering and Technology",
    "description": "Situated in Bhopal, Radharaman College offers a range of engineering and technology programs, emphasizing practical knowledge and industry relevance in its curriculum.",
    "link": "http://www.rknec.edu/",
    "Logo": CLG2
  },
  {
    "title": "Sushila Devi College of Engineering and Technology",
    "description": "This college in Bhopal offers a variety of engineering programs with a focus on research and development, preparing students for careers in technology and engineering fields.",
    "link": "https://sdbc.ac.in/",
    "Logo": CLG3

  },
  {
    "title": "Government Engineering College, Jabalpur",
    "description": "One of the oldest engineering colleges in Madhya Pradesh, it offers undergraduate and postgraduate programs in engineering with a strong emphasis on research and innovation.",
    "link": "https://www.jecjabalpur.ac.in/",
    "Logo": CLG4
  },
  {
    "title": "Shri G.S. Institute of Technology and Science (SGSITS)",
    "description": "Located in Indore, SGSITS offers engineering and technology education with a focus on research and development, and is known for its strong industry connections and academic excellence.",
    "link": "https://www.sgsits.ac.in/",
    "Logo": CLG5
  },
  {
    "title": "Shri Vaishnav Institute of Technology and Science (SVITS)",
    "description": "SVITS Indore offers engineering and management programs with an emphasis on research, innovation, and practical training, aiming to produce highly skilled professionals.",
    "link": "http://www.svits.edu.in/",
    "Logo": CLG6
  },
  {
    "title": "Lakshmi Narain College of Technology (LNCT)",
    "description": "LNCT Bhopal provides a broad range of engineering and technology programs, focusing on industry readiness and research to ensure students are well-prepared for the job market.",
    "link": "http://www.lnct.ac.in/",
    "Logo": CLG7
  }
]


export default function institution() {
  return (
    <div className="bg-gray-900">
      <InstituteHeroSection />

      <section className="text-gray-200 body-font font-semibold text-xl">
        <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
          <div
            className="flex flex-wrap -mx-4 -mb-10 text-center border-t-2 border-gray-600 border-opacity-55"
            bis_skin_checked="1"
          >
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className={`w-full sm:w-1/2 p-4 ${
                    index % 2 === 0
                      ? "sm:border-r-2 border-gray-600 border-opacity-50"
                      : ""
                  }`}
                >
                  <InstituteCard image={instituteData[index].Logo} title={instituteData[index].title} description={instituteData[index].description} link={instituteData[index].link} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
