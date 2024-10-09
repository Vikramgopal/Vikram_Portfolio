import TypingEffect from "../components/TypingEffect";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

// eslint-disable-next-line react/prop-types
const About = ({ darkMode }) => {
  const [knowMe, setKnowMe] = useState(false);

  const paragraphs = [
    "Hello! I'm Vikram, a passionate front-end web developer with a BSc degree. I am deeply curious about the art of building websites and love turning creative ideas into functional and visually appealing digital experiences. With a solid foundation in front-end technologies like HTML, CSS, and JavaScript, I am constantly exploring new techniques and tools to stay ahead in the ever-evolving world of web development.",
    "I thrive on problem-solving, whether it's creating responsive layouts, optimizing performance, or ensuring cross-browser compatibility. My goal is to build websites that not only look great but also provide seamless user experiences.",
    "I'm excited to continue learning and growing in the field, and I look forward to collaborating on innovative projects!",
  ];

  return (
    <main id="about" className={`${darkMode && "dark"} padding `}>
      <div className=" transiton-all duration-500 bg-white text-black dark:text-white dark:bg-black">
        <h1 className="mb-[4rem] font-poppins text-xl custom-border relative  font-semibold">
          {" "}
          About Me
        </h1>
        <div className="  bg-white dark:text-slate-white dark:bg-black text-slate-gray">
          {knowMe && (
            <div className="space-y-4">
              <TypingEffect
                texts={paragraphs}
                speed={80}
                delayBetweenParagraphs={500}
              />
            </div>
          )}
        </div>
        {knowMe ? (
          ""
        ) : (
          <p
            className=" text-center justify-center
           flex flex-row font-prosima font-semibold items-center"
          >
            <span className="max-lg:hidden pr-2">
              <ImQuotesLeft />
            </span>
            <p>
              Are you <span className="text-red-500">&nbsp;Loki</span>,
              <span className="text-blue-500">&nbsp;Captain America</span>,
              <span className="text-green">&nbsp;Thor</span>? Only the worthy
              can decrypt this. Hover to prove yourself!
            </p>

            <span className="pl-2 max-lg:hidden ">
              <ImQuotesRight />
            </span>
          </p>
        )}
        <div className="flex justify-center items-center pt-[5rem] ">
          {knowMe ? "" : <Example knowMe={knowMe} setKnowMe={setKnowMe} />}
        </div>
      </div>
    </main>
  );
};

export default About;

import { useRef, useState } from "react";
import { FiLock, FiUnlock } from "react-icons/fi";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Example = ({ knowMe, setKnowMe }) => {
  return <EncryptButton knowMe={knowMe} setKnowMe={setKnowMe} />;
};

const TARGET_TEXT = "Encrypted";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 75;

const CHARS = "!@#$%^&*():{};|,.<>/?";

// eslint-disable-next-line react/prop-types
const EncryptButton = ({ knowMe, setKnowMe }) => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = "DECRYPTED"
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText("CLICK ME");
  };

  return (
    <motion.button
      onClick={() => setKnowMe(!knowMe)}
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className=" group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-neutral-700 px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300"
    >
      <div className="relative z-10 flex items-center gap-2">
        {text === "CLICK ME" ? <FiUnlock /> : <FiLock />}
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};
