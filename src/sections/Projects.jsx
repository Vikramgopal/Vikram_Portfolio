import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
// import { FiMousePointer } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import { useState, useEffect } from "react";
import nikepc from "../assets/images/nikepc.png";
import luxurypc from "../assets/images/luxury-chronoluxe-pc.png";
import pepsipc from "../assets/images/pepsi-pc.png";
import nikembl from "../assets/images/nike-mbl.png";
import luxurymbl from "../assets/images/luxury-mbl.png";
import pepsimbl from "../assets/images/pepsi-mbl.png";
// import { message } from "../constant";
const Projects = ({ darkMode }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isMobile, setIsMobile] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Tailwind's `sm` breakpoint is 640px
    };

    // Check screen size on initial render and on every resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main id="projects" className={`${darkMode && "dark"} padding `}>
      <div className=" transiton-all duration-500 bg-white text-black dark:text-white dark:bg-black">
        <h1 className="mb-[4rem] font-poppins text-xl custom-border relative  font-semibold">
          {" "}
          My Projects
        </h1>
        <div className="grid grid-rows-3 gap-10">
          <div className="sm:bg-gradient-to-br from-slate-100 to-slate-200 dark:text-black  max-sm:text-black max-sm:dark:text-white  sm:dark:bg-gradient-to-br dark:from-gray-50 dark:to-gray-100 max-sm:bg-white max-sm:dark:bg-black grid grid-cols-2 max-lg:grid-cols-1 gap-10 lg:gap-14 max-sm:gap-5 p-10 max-sm:p-0 rounded-3xl">
            <div className="flex justify-center  items-center">
              {" "}
              {!isMobile && <Example backgroundImage={nikepc} />}
              {isMobile && <Example backgroundImage={nikembl} />}
            </div>
            <div>
              <h2 className="text-start font-bold  max-sm:px-2 py-12 text-2xl font-palanquin flex justify-between items-center ">
                <a
                  href="https://nikeindia-clone.netlify.app/"
                  className="flex items-center cursor-pointer  gap-2"
                >
                  Nike Clone
                  <FaExternalLinkAlt className="pt-1" size={25} />
                </a>
                <a href="https://github.com/Vikramgopal/Nike">
                  <FaGithub size={30} />
                </a>
              </h2>
              <p className="text-start font-inter  max-sm:px-2 text-gray-500 dark:text-neutral-900 max-sm:dark:text-neutral-300 leading-1 text-lg">
                <span className="text-[red] font-poppins text-lg  font-semibold">
                  Description:
                </span>{" "}
                The Nike India clone project features a fully responsive design
                that provides users with a seamless browsing experience. It
                showcases a variety of Nike products with engaging animations,
                creating an interactive environment. Each product displayed on
                the site is linked to the official Nike page, allowing users to
                click and be redirected directly to Nike for more details and
                purchases. This project effectively combines aesthetic appeal
                with functionality, enhancing user engagement while maintaining
                a clean and intuitive interface.
              </p>
              <div className="flex flex-row gap-5 py-10 flex-wrap  max-sm:px-2">
                <button className=" px-4 py-2 rounded-full  flex items-center gap-2  bg-white   text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] max-sm:dark:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.1),_5px_5px_15px_rgba(0,_0,_0,_0.8)] max-sm:dark:hover:hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.1),_2px_2px_5px_rgba(0,_0,_0,_0.6),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.2),inset_2px_2px_5px_rgba(0,_0,_0,_0.7)] max-sm:dark:bg-slate-300 max-sm:dark:text-slate-900 transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500">
                  React JS
                </button>
                <button className=" px-4 py-2 rounded-full  flex items-center gap-2  bg-white   text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] max-sm:dark:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.1),_5px_5px_15px_rgba(0,_0,_0,_0.8)] max-sm:dark:hover:hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.1),_2px_2px_5px_rgba(0,_0,_0,_0.6),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.2),inset_2px_2px_5px_rgba(0,_0,_0,_0.7)] max-sm:dark:bg-slate-300 max-sm:dark:text-slate-900 transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500">
                  Tailwind CSS
                </button>
                <button className=" px-4 py-2 rounded-full  flex items-center gap-2  bg-white   text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] max-sm:dark:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.1),_5px_5px_15px_rgba(0,_0,_0,_0.8)] max-sm:dark:hover:hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.1),_2px_2px_5px_rgba(0,_0,_0,_0.6),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.2),inset_2px_2px_5px_rgba(0,_0,_0,_0.7)] max-sm:dark:bg-slate-300 max-sm:dark:text-slate-900 transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500">
                  AOS Library
                </button>
              </div>
            </div>
          </div>
          <div className="sm:bg-gradient-to-br from-slate-100 to-slate-200 dark:text-black  max-sm:text-black max-sm:dark:text-white  sm:dark:bg-gradient-to-br dark:from-gray-50 dark:to-gray-100 max-sm:bg-white max-sm:dark:bg-black grid grid-cols-2 max-lg:grid-cols-1 gap-10 lg:gap-14 max-sm:gap-5 p-10 max-sm:p-0 rounded-3xl">
            <div className="flex justify-center  items-center">
              {isMobile ? (
                <Example backgroundImage={pepsimbl} />
              ) : (
                <Example backgroundImage={pepsipc} />
              )}
            </div>
            <div>
              <h2 className="text-start font-bold  max-sm:px-2 py-12 text-2xl font-palanquin flex justify-between items-center ">
                <a
                  href="https://pepsiindia.netlify.app/"
                  className="flex items-center cursor-pointer  gap-2"
                >
                  Pepsi Clone
                  <FaExternalLinkAlt className="pt-1" size={25} />
                </a>
                <a href="https://github.com/Vikramgopal/pepsi">
                  <FaGithub size={30} />
                </a>
              </h2>
              <p className="text-start font-inter  max-sm:px-2 text-gray-500 dark:text-neutral-900 max-sm:dark:text-neutral-300 leading-1 text-lg">
                <span className="text-[red] font-poppins text-lg  font-semibold">
                  Description:
                </span>{" "}
                The Pepsi clone offers an engaging product showcase where users
                can explore different Pepsi variants with interactive
                color-switching effects, enhancing user engagement and overall
                experience. The website is fully responsive, adapting seamlessly
                to mobile, tablet, and desktop devices for a smooth browsing
                experience. It features simple navigation with clear visual cues
                and minimal clutter, making it easy for users to find what they
                need. Additionally, the site is optimized for speed, ensuring
                fast load times and smooth transitions for an enhanced
                user-friendly interface.
              </p>
              <div className="flex flex-row gap-5 py-10 flex-wrap  max-sm:px-2">
                <button className=" px-4 py-2 rounded-full  flex items-center gap-2  bg-white   text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] max-sm:dark:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.1),_5px_5px_15px_rgba(0,_0,_0,_0.8)] max-sm:dark:hover:hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.1),_2px_2px_5px_rgba(0,_0,_0,_0.6),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.2),inset_2px_2px_5px_rgba(0,_0,_0,_0.7)] max-sm:dark:bg-slate-300 max-sm:dark:text-slate-900 transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500">
                  Javs Script
                </button>
                <button className=" px-4 py-2 rounded-full  flex items-center gap-2  bg-white   text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] max-sm:dark:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.1),_5px_5px_15px_rgba(0,_0,_0,_0.8)] max-sm:dark:hover:hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.1),_2px_2px_5px_rgba(0,_0,_0,_0.6),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.2),inset_2px_2px_5px_rgba(0,_0,_0,_0.7)] max-sm:dark:bg-slate-300 max-sm:dark:text-slate-900 transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500">
                  Bootstrap
                </button>
                <button className=" px-4 py-2 rounded-full  flex items-center gap-2  bg-white   text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] max-sm:dark:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.1),_5px_5px_15px_rgba(0,_0,_0,_0.8)] max-sm:dark:hover:hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.1),_2px_2px_5px_rgba(0,_0,_0,_0.6),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.2),inset_2px_2px_5px_rgba(0,_0,_0,_0.7)] max-sm:dark:bg-slate-300 max-sm:dark:text-slate-900 transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500">
                  HTML
                </button>
                <button className=" px-4 py-2 rounded-full  flex items-center gap-2  bg-white   text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] max-sm:dark:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.1),_5px_5px_15px_rgba(0,_0,_0,_0.8)] max-sm:dark:hover:hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.1),_2px_2px_5px_rgba(0,_0,_0,_0.6),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.2),inset_2px_2px_5px_rgba(0,_0,_0,_0.7)] max-sm:dark:bg-slate-300 max-sm:dark:text-slate-900 transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500">
                  CSS
                </button>
              </div>
            </div>
          </div>
          <div className="sm:bg-gradient-to-br from-slate-100 to-slate-200 dark:text-black  max-sm:text-black max-sm:dark:text-white  sm:dark:bg-gradient-to-br dark:from-gray-50 dark:to-gray-100 max-sm:bg-white max-sm:dark:bg-black grid grid-cols-2 max-lg:grid-cols-1 gap-10 lg:gap-14 max-sm:gap-5 p-10 max-sm:p-0 rounded-3xl">
            <div className="flex justify-center  items-center">
              {isMobile ? (
                <Example backgroundImage={luxurymbl} />
              ) : (
                <Example backgroundImage={luxurypc} />
              )}
            </div>
            <div>
              <h2 className="text-start font-bold  max-sm:px-2 py-12 text-2xl font-palanquin flex justify-between items-center ">
                <a
                  href="https://luxurychronoluxe.netlify.app/"
                  className="flex items-center cursor-pointer  gap-2"
                >
                  Luxury Chronoluxe
                  <FaExternalLinkAlt className="pt-1" size={25} />
                </a>
                <a href="https://github.com/Vikramgopal/Luxury_chronoluxe">
                  <FaGithub size={30} />
                </a>
              </h2>
              <p className="text-start font-inter  max-sm:px-2 text-gray-500 dark:text-neutral-900 max-sm:dark:text-neutral-300 leading-1 text-lg">
                <span className="text-[red] font-poppins text-lg  font-semibold">
                  Description:
                </span>{" "}
                The Luxury Chronoluxe project is an innovative e-commerce
                website dedicated to showcasing luxury branded watches. Unlike
                traditional e-commerce platforms, it features a distinct visual
                style that enhances the user experience, offering a
                sophisticated and elegant browsing environment. Users can
                explore a curated selection of premium watches, all presented
                with a unique aesthetic that sets it apart from typical
                e-commerce websites. This project successfully combines luxury
                branding with an engaging interface, creating a memorable
                shopping experience.
              </p>
              <div className="flex flex-row gap-5 py-10 flex-wrap  max-sm:px-2">
                <button className=" px-4 py-2 rounded-full  flex items-center gap-2  bg-white   text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] max-sm:dark:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.1),_5px_5px_15px_rgba(0,_0,_0,_0.8)] max-sm:dark:hover:hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.1),_2px_2px_5px_rgba(0,_0,_0,_0.6),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.2),inset_2px_2px_5px_rgba(0,_0,_0,_0.7)] max-sm:dark:bg-slate-300 max-sm:dark:text-slate-900 transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500">
                  HTML
                </button>
                <button className=" px-4 py-2 rounded-full  flex items-center gap-2  bg-white   text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] max-sm:dark:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.1),_5px_5px_15px_rgba(0,_0,_0,_0.8)] max-sm:dark:hover:hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.1),_2px_2px_5px_rgba(0,_0,_0,_0.6),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.2),inset_2px_2px_5px_rgba(0,_0,_0,_0.7)] max-sm:dark:bg-slate-300 max-sm:dark:text-slate-900 transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500">
                  CSS
                </button>
                {/* <button className=" px-4 py-2 rounded-full  flex items-center gap-2  bg-white   text-slate-500 shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)] max-sm:dark:shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.1),_5px_5px_15px_rgba(0,_0,_0,_0.8)] max-sm:dark:hover:hover:shadow-[-2px_-2px_5px_rgba(255,_255,_255,_0.1),_2px_2px_5px_rgba(0,_0,_0,_0.6),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.2),inset_2px_2px_5px_rgba(0,_0,_0,_0.7)] max-sm:dark:bg-slate-300 max-sm:dark:text-slate-900 transition-all hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] hover:text-violet-500">
                  AOS Library
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const Example = ({ backgroundImage }) => {
  return (
    <div className="grid w-full place-content-center    text-slate-900">
      <TiltCard backgroundImage={backgroundImage} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

// eslint-disable-next-line react/prop-types, react-refresh/only-export-components
const TiltCard = ({ backgroundImage }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative xl:h-[25rem] xl:w-[35rem] lg:h-[26rem] lg:w-[26rem] md:w-[35rem] md:h-[22rem] sm:w-[30rem] sm:h-[20rem] w-[20rem] h-[30rem] rounded-xl bg-gradient-to-br from-gray-300 to-gray-400 max-sm:bg-gradient-to-br max-sm:from-gray-200 max-sm:to-gray-300 dark:bg-gradient-to-br dark:from-neutral-300 dark:to-neutral-400 max-sm:dark:bg-gradient-to-br max-sm:dark:from-gray-200 max-sm:dark:to-gray-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${backgroundImage})`,
        }}
        className={`absolute inset-4 grid place-content-center  bg-center bg-cover rounded-xl  shadow-lg`}
      >
        {/* <FiMousePointer
          style={{
            transform: "translateZ(75px)",
          }}
          className="mx-auto text-4xl"
        /> */}
        {/* <div> */}
        {/* <img src={message} alt="" /> */}
        {/* <p
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-2xl font-bold"
          >
            HOVER ME
          </p> */}
        {/* </div> */}
      </div>
    </motion.div>
  );
};
