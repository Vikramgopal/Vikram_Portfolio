import SwipeCards from "../components/SwipCards";

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
            {/* <div className="mt-6">
              <a
                href="/resume.pdf" // Path to the resume file in the public folder
                download="Vikram-Resume.pdf" // Download attribute to specify file name
                className="bg-green-500 hover:bg-green-600 text-gray-900 dark:text-neutral-200 border-2 border-blue-500 font-bold py-2 px-4 rounded inline-block"
              >
                Download Resume
              </a>
            </div> */}

            {/* <div className="grid min-h-[2px] place-content-center bg-slate-900 p-4"> */}
            <button className=" group relative mt-6 px-4 py-2 dark:text-white text-black transition-colors duration-[400ms] font-bold hover:text-indigo-400">
              <span>Download Resume</span>
              {/* {/* TOP */}
              <span className="absolute left-0 top-0 h-[4px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
              {/* RIGHT */}
              <span className="absolute right-0 top-0 h-0 w-[4px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
              {/* BOTTOM */}
              <span className="absolute bottom-0 right-0 h-[4px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
              {/* LEFT */}
              <span className="absolute bottom-0 left-0 h-0 w-[4px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />{" "}
            </button>

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

// const DrawOutlineButton = ({ children, ...rest }) => {
//   return (
//     <button
//       {...rest}
//       className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
//     >
//       <span>{children}</span>

//       {/* TOP */}
//       <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

//       {/* RIGHT */}
//       <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

//       {/* BOTTOM */}
//       <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

//       {/* LEFT */}
//       <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
//     </button>
//   );
// };
