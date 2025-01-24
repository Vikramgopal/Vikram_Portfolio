import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { GrMail } from "react-icons/gr";
import logo from "../assets/images/portfolio-fav.png";

// eslint-disable-next-line react/prop-types
const Nav = ({ darkMode, setDarkMode, isOpen, setIsOpen }) => {
  return (
    <header className={`${darkMode && "dark"} `}>
      <nav className="flex duration-500 padding-x bg-white items-center h-[123px] max-lg:h-[110px] justify-between flex-row font-poppins text-xl font-semibold  text-black  dark:bg-black dark:text-white">
        <div>
          <ul className="flex flex-row  items-center max-xl:gap-10 gap-16 max-sm:gap-8 justify-start ">
            <li>
              <img src={logo} width={70} height={50} alt="" />
            </li>
            <a href="mailto:vikrambg02@gmail.com">
              <li className="rounded-2xl max-xl:hidden flex gap-2 items-center bg-white px-6 py-3 font-semibold dark:text-white dark:bg-black text-black duration-500  dark:hover:translate-x-[-4px] hover:translate-x-[-4px] hover:translate-y-[-4px] dark:hover:translate-y-[-4px] hover:rounded-md dark:hover:rounded-md hover:shadow-[4px_4px_0px_black] dark:hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] dark:active:translate-x-[0px] active:translate-y-[0px] dark:active:translate-y-[0px] dark:active:rounded-2xl active:rounded-2xl active:shadow-none dark:active:shadow-none">
                <GrMail size={25} />
                vikrambg02@gmail.com
              </li>
            </a>

            <li
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer "
            >
              {darkMode ? (
                <motion.div whileTap={{ scale: 0 }}>
                  <ion-icon className="ion-icon" name="sunny"></ion-icon>
                </motion.div>
              ) : (
                <motion.div whileTap={{ scale: 0 }}>
                  <ion-icon className="ion-icon" name="moon"></ion-icon>
                </motion.div>
              )}
            </li>
          </ul>
        </div>

        <div className="bg-white duration-500 dark:bg-black max-lg:hidden ">
          <SlideTabs />
        </div>
        <div className="lg:hidden cursor-pointer ">
          <MotionConfig
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            <motion.button
              initial={false}
              animate={isOpen ? "open" : "closed"}
              onClick={() => setIsOpen((pv) => !pv)}
              className="relative h-14 w-[3.5rem] rounded-full bg-white/0 transition-colors hover:bg-black/20 dark:hover:bg-white/20"
            >
              <motion.span
                variants={VARIANTS.top}
                className="absolute h-[3px] w-[2rem] bg-black dark:bg-white"
                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
              />
              <motion.span
                variants={VARIANTS.middle}
                className="absolute h-[3px] w-[2rem] bg-black dark:bg-white"
                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
              />
              <motion.span
                variants={VARIANTS.bottom}
                className="absolute h-[3px] w-[1rem] bg-black dark:bg-white"
                style={{
                  x: "-50%",
                  y: "50%",
                  bottom: "35%",
                  left: "calc(50% + 10px)",
                }}
              />
            </motion.button>
          </MotionConfig>
        </div>

        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              // delay: 0.2,
              duration: 0.5,
            }}
            className="absolute duration-500 lg:hidden flex z-10 flex-row justify-center top-[1.81%] text-black dark:bg-black dark:text-white bg-white w-full left-0 pb-4 max-sm:top-[1.74%]"
          >
            <ul>
              <a href="#home">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.5,
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-5 "
                >
                  Home
                </motion.li>
              </a>
              <a href="#about">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-5 "
                >
                  About
                </motion.li>
              </a>
              <a href="#skills">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6,
                    duration: 0.5,
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-5 "
                >
                  Skills
                </motion.li>
              </a>
              <a href="#projects">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.5,
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-5 "
                >
                  Projects
                </motion.li>
              </a>
              <a href="#contact">
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-5 "
                >
                  Contact
                </motion.li>
              </a>
            </ul>
          </motion.div>
        ) : (
          ""
        )}
      </nav>
    </header>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white dark:border-white dark:bg-black transition-all duration-500 p-1"
    >
      <a href="#home">
        <Tab setPosition={setPosition}>Home</Tab>
      </a>
      <a href="#about">
        <Tab setPosition={setPosition}>about</Tab>
      </a>
      <a href="#skills">
        <Tab setPosition={setPosition}>skill</Tab>
      </a>
      <a href="#projects">
        <Tab setPosition={setPosition}>project</Tab>
      </a>
      <a href="#contact">
        <Tab setPosition={setPosition}>contact</Tab>
      </a>

      <Cursor position={position} />
    </ul>
  );
};

// eslint-disable-next-line react/prop-types
const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase duration-500 text-white dark:text-white  mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

// eslint-disable-next-line react/prop-types
const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full  bg-black dark:bg-white md:h-12"
    />
  );
};

export default Nav;

import { MotionConfig } from "framer-motion";

export const Example = () => {
  return (
    <div className="grid h-screen place-content-center bg-gradient-to-br from-violet-500 to-indigo-500">
      <AnimatedHamburgerButton />
    </div>
  );
};

const AnimatedHamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen((pv) => !pv)}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(45% + 10px)",
    },
  },
};
