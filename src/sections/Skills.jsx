import SwipeCards from "../components/SwipCards";
import resume from "../assets/resume/Vikram.pdf";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const Skills = ({ darkMode }) => {
  return (
    <main id="skills" className={`${darkMode && "dark"} padding `}>
      <div className=" transition-colors duration-500 bg-white text-black dark:text-white dark:bg-black">
        <h1 className="mb-[4rem] font-poppins text-xl custom-border relative  font-semibold">
          My Skills
        </h1>
        <div className="grid grid-cols-2 max-lg:grid-cols-1">
          <div className="p-4  text-gray-900  dark:text-neutral-200">
            <h2 className="text-2xl font-poppins font-bold mb-4">
              Skills I Know
            </h2>
            <p className="mb-4 leading-relaxed">
              I am a passionate front-end developer with experience in various
              tools and technologies that allow me to create engaging,
              responsive websites and applications. Some of the key skills I
              have mastered include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">React.js</span> – Building modern
                web applications with reusable components.
              </li>
              <li>
                <span className="font-bold">Tailwind CSS & Bootstrap</span> –
                Utilizing popular frameworks for efficient, responsive design.
              </li>
              <li>
                <span className="font-bold">JavaScript</span> – Bringing
                interactivity and dynamic content to web experiences.
              </li>
              <li>
                <span className="font-bold">Framer Motion</span> – Creating
                complex animations and transitions in React apps.
              </li>
              <li>
                <span className="font-bold">HTML & CSS</span> – Building the
                foundation of web pages with clean, semantic code.
              </li>
              <li>
                <span className="font-bold">GitHub</span> – Version control and
                collaboration with teams using Git and GitHub.
              </li>
              <li>
                <span className="font-bold">AOS Library Tool</span> – Adding
                smooth scroll animations to enhance user experience.
              </li>
            </ul>

            <motion.div className="mt-6 inline-flex items-center gap-3 flex-row px-4 py-2 rounded-3xl font-bold dark:bg-black dark:border-white dark:hover:bg-white dark:hover:text-black dark:text-white bg-white text-black border-2 hover:bg-black hover:text-white transition-all duration-300 border-black">
              <a href={resume} target="blank" className="" download>
                <span>Download Resume</span>
                {/* <AiOutlineDownload size={25} /> */}
              </a>
              <FaFileDownload size={25} />
            </motion.div>

            {/* </div> */}
          </div>
          <div className=" flex justify-center items-center">
            <SwipeCards darkMode={darkMode} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
