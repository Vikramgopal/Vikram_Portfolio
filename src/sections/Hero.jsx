import { image1, message } from "../constant";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Hero = ({ darkMode }) => {
  return (
    <hero
      id="home"
      className={`${darkMode && "dark"}  transition-all duration-500`}
    >
      <div className=" grid grid-cols-2 max-lg:grid-cols-1 bg-white dark:bg-black duration-500 max-sm:pb-8 ">
        <div className="bg-white dark:bg-black dark:text-white duration-500 hero-text-grid text-black flex pt-5 max-lg:pt-0 justify-center items-center flex-col">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 1.4,
              type: "spring",
              stiffness: 460,
              damping: 15,
            }}
            className="message relative pt-[4rem]"
          >
            <img
              src={message}
              className="message-icon relative"
              alt=""
              height={125}
              width={125}
            />
          </motion.div>

          <div className="flex flex-row">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.5 }}
              className="font-poppins text-6xl font-bold"
            >
              V
            </motion.h1>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.7 }}
              className="font-poppins text-6xl font-bold"
            >
              I
            </motion.h1>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.9 }}
              className="font-poppins text-6xl font-bold"
            >
              K
            </motion.h1>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.1 }}
              className="font-poppins text-6xl font-bold"
            >
              R
            </motion.h1>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.3 }}
              className="font-poppins text-6xl font-bold"
            >
              A
            </motion.h1>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.5 }}
              className="font-poppins text-6xl font-bold"
            >
              M
            </motion.h1>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              // transition={{ delay: 2.7 }}
              className="font-poppins text-6xl font-bold"
            >
              &nbsp;
            </motion.h1>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.7 }}
              className="font-poppins text-6xl font-bold"
            >
              B
            </motion.h1>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              // transition={{ delay: 3.1 }}
              className="font-poppins text-6xl font-bold"
            >
              &nbsp;
            </motion.h1>
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 3.9 }}
              className="font-poppins text-6xl font-bold"
            >
              G
            </motion.h1>
          </div>
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1, y: -20 }}
            transition={{ delay: 4.3 }}
            className="font-inter text-4xl pt-7 pb-[1rem] text-shade-green font-semibold"
          >
            Frontend Developer
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, y: -20 }}
            transition={{ delay: 4.6 }}
            className="flex gap-7 pt-[1rem] "
          >
            {/* <a
              href="#contact"
              className="button-card dark:hover:text-email-color dark:hover:bg-white bg-slate-gray dark:bg-slate-white dark:text-slate-gray duration-500 text-slate-white hover:bg-email-color  hover:text-white"
            >
              <BiLogoGmail size={25} />
              <span className="max-sm:hidden">Mail</span>
            </a> */}
            <a
              href="https://github.com/Vikramgopal"
              target="_blank"
              className="button-card hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white bg-slate-gray dark:bg-slate-white duration-500 dark:text-slate-gray text-slate-white "
            >
              <AiFillGithub size={25} />
              <span className="max-sm:hidden">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vikrambg/"
              target="_blank"
              className="button-card  dark:hover:text-linkedin-color  dark:hover:bg-white hover:text-white hover:bg-linkedin-color  bg-slate-gray duration-500 dark:bg-slate-white dark:text-slate-gray text-slate-white"
            >
              <AiFillLinkedin size="25" />

              <span className="max-sm:hidden">LinkedIn</span>
            </a>
          </motion.div>
          <a href="mailto:vikrambg02@gmail.com">
            <motion.div
              initial={{ scale: 0 }}
              // animate={{ rotate: 360, scale: 2 }}
              animate={{
                scale: [0, 1.5, 1],
                rotate: [360, -360, 360],
                borderRadius: ["100%", "100%", "100%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.3, 0.6],

                delay: 5,
              }}
              className="bg-red-400 orange-cicle border-2 scale-100 border-black dark:border-white transition-colors duration-500 relative rounded-full h-[7rem] w-[7rem] my-[5rem]  
            "
            >
              <span className="bg-[#ff0000] absolute  rounded-full h-[5rem] w-[5rem] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></span>
              <p className="absolute font-semibold top-[36%] left-[36%] text-xl translate-x-[-30%] font-nunito  text-black dark:text-white duration-500  translate-y-[-30%]">
                let&apos;s
              </p>
              <p className="absolute font-semibold top-[54%] left-[59%] translate-x-[-50%] text-xl text-black dark:text-white duration-500 font-nunito translate-y-[-30%]">
                {" "}
                talk
              </p>
            </motion.div>
          </a>
        </div>
        <div className="bg-white  dark:bg-black transition-colours duration-500 flex  justify-center items-center ">
          <img
            className="  duration-500 "
            src={image1}
            alt="vikram"
            height={650}
            width={650}
          />
        </div>
      </div>
    </hero>
  );
};

export default Hero;
