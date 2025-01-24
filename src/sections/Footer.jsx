///////////////////////////////////////////////////////////////////////

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { terminal } from "../constant/index";
import { FaArrowRight } from "react-icons/fa";
import { PiTildeBold } from "react-icons/pi";

const Footer = ({ isFullSize, setIsFullSize }) => {
  const [input, setInput] = useState("");
  // const [email, setEmail] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null); // Reference to the input field
  const [showEmail, setShowEmail] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showData, setShowData] = useState(false);
  const [isRemove, setIsRemove] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [clickedInside, setIsClickedInside] = useState(false);
  // const [sendMessage, setSendMessage] = useState("Send it!");

  const boxRef = useRef(null);

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      // Click outside the box
      setIsClickedInside(false);
    }
  };

  const handleClickInside = () => {
    // Click inside the box
    setIsClickedInside(true);
  };

  useEffect(() => {
    // Attach listener when the component is mounted
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      setHistory([...history, input]);
      // console.Console(input);
      setInput(""); // Clear the input after hitting enter
    }
  };
  const handleShowEmail = (e) => {
    if (e.key === "Enter") {
      setShowEmail(true);
    }
  };
  const handleShowDescription = (e) => {
    if (e.key === "Enter") {
      setShowDescription(true);
    }
  };
  const handleShowDData = (e) => {
    if (e.key === "Enter") {
      setShowData(true);
    }
  };
  // const length =history.length
  const focusInput = () => {
    inputRef.current.focus(); // Focus the input field when called
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Successfully submitted!");
    // setSendMessage("Sent");
  };
  const handleReset = (e) => {
    e.preventDefault();
    setHistory([]);
    setInput("");
    setShowData(false);
    setShowDescription(false);
    setShowEmail(false);
  };
  const handleResize = () => {
    setIsFullSize(!isFullSize);
  };
  const handleRemove = () => {
    setIsRemove(!isRemove);
  };
  const handleExit = () => {
    setIsExit(!isExit);
    setHistory([]);
    setInput("");
    setShowData(false);
    setShowDescription(false);
    setShowEmail(false);
  };
  if (isRemove)
    return (
      <div onClick={handleRemove} className=" text-white font-prosima">
        <img src={terminal} width={50} height={50} alt="Termimal" />
        Terminal
      </div>
    );
  if (isExit)
    return (
      <div onClick={handleExit} className=" text-white font-prosima">
        <img src={terminal} width={50} height={50} alt="Terminal" />
        Terminal
      </div>
    );
  if (!isRemove || !isExit)
    return (
      <footer
        ref={boxRef}
        onClick={handleClickInside}
        className={
          isFullSize
            ? "w-full md:h-[100vh] max-md:h-[60vh] "
            : "max-w-2xl mx-auto h-[60vh]  rounded-lg  "
        }
        // Focus the input when the terminal is clicked
      >
        {/* {terminals Header} */}
        <div
          className={
            isFullSize
              ? "h-[6vh] max-md:h-[6vh] bg-black bg-opacity-90  text-white backdrop-blur-lg  px-4 py-2 flex justify-between items-center"
              : "bg-black  bg-opacity-90 text-white backdrop-blur-lg rounded-t-lg px-4 py-2 h-[6vh] flex justify-between items-center"
          }
        >
          <div className="flex flex-row gap-1">
            <span
              onClick={handleExit}
              className={
                clickedInside
                  ? "bg-red-500 h-3 w-3 rounded-full"
                  : "bg-gray-600 h-3 w-3 rounded-full"
              }
            ></span>
            <span
              onClick={handleRemove}
              className={
                clickedInside
                  ? "bg-yellow-500 h-3 w-3 rounded-full"
                  : "bg-gray-600 h-3 w-3 rounded-full"
              }
            ></span>
            <span
              onClick={handleResize}
              className={
                clickedInside
                  ? "bg-green h-3 w-3 rounded-full"
                  : "bg-gray-600 h-3 w-3 rounded-full"
              }
            ></span>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>vikrambg02@gmail.com</p>
          </motion.div>
        </div>
        {/* Terminals body */}
        <div
          className={
            isFullSize
              ? "h-[94vh] max-md:h-[54vh] overflow-y-scroll overflow-x-scroll scrollbar-hide bg-black bg-opacity-60 backdrop-blur-lg text-lg text-gray-300 p-4  font-mono cursor-text"
              : "bg-black bg-opacity-60 overflow-y-scroll overflow-x-scroll scrollbar-hide backdrop-blur-lg text-lg text-gray-300 p-4 rounded-b-lg font-mono cursor-text h-[54vh]"
          }
          onClick={focusInput}
        >
          <p>Hey there! We're excited to link with you!</p>
          <p className="mt-4">
            To start, could you give us your{" "}
            <span className="text-violet-400">name?</span>
          </p>
          <div className=" min-h-[300px]  overflow-y-scroll scrollbar-hide">
            {/* {history.map((cmd, index) => ( */}
            <motion.div
              // key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // transition={{ duration: 0.5, delay: index * 0.1 }}
              className=" items-center text-green"
            >
              {history.length > 0 && (
                <div>
                  <p className="flex items-center gap-2">
                    <FiCheckCircle /> {history[0]}
                  </p>
                  <p className=" text-white">
                    Awesome! And what's{" "}
                    <span className="text-violet-400">your email?</span>
                  </p>
                </div>
              )}
              {history.length > 1 && (
                <div>
                  <p className="flex items-center gap-2">
                    <FiCheckCircle /> {history[1]}
                  </p>
                  <p className="text-white ">
                    Perfet, and
                    <span className="text-violet-400">
                      {" "}
                      how can we help you?
                    </span>
                  </p>
                </div>
              )}
              {history.length > 2 && (
                <div>
                  <p className="flex items-center gap-2">
                    <FiCheckCircle /> {history[2]}
                  </p>
                </div>
              )}
              {/* {console.log(cmd, index, history)} */}
            </motion.div>

            {!showEmail && (
              <div className="flex items-center text-white mt-4 flex-wrap">
                <span className="text-green flex flex-row gap-2 items-center justify-center pr-4">
                  <FaArrowRight size={15} />
                  <PiTildeBold size={15} />
                </span>
                <p>Enter Name:</p>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleCommand}
                  onKeyPress={handleShowEmail}
                  className="bg-transparent border-none outline-none  text-green-500  ml-2 "
                  ref={inputRef} // Reference the input field
                  // autoFocus
                />
              </div>
            )}
            {!showDescription && (
              <div>
                {showEmail && (
                  <div className="flex items-center text-white mt-4 flex-wrap ">
                    <span className="text-green flex flex-row gap-2 items-center justify-center pr-4">
                      <FaArrowRight size={15} />
                      <PiTildeBold size={15} />
                    </span>
                    <p>Enter Email : </p>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleCommand}
                      onKeyPress={handleShowDescription}
                      className="bg-transparent border-none outline-none text-green-500  ml-2   "
                      ref={inputRef} // Reference the input field
                      autoFocus
                    />
                  </div>
                )}
              </div>
            )}
            {!showData && (
              <div>
                {showDescription && (
                  <div className="flex items-center text-white mt-4 flex-wrap">
                    <span className="text-green flex flex-row gap-2 items-center justify-center pr-4">
                      <FaArrowRight size={15} />
                      <PiTildeBold size={15} />
                    </span>
                    <p>Enter Description:</p>
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleCommand}
                      onKeyPress={handleShowDData}
                      className="bg-transparent border-none outline-none text-green-500  ml-2 "
                      ref={inputRef} // Reference the input field
                      autoFocus
                    />
                  </div>
                )}
              </div>
            )}
            {showData && (
              <div>
                <p>Beautiful! Here is what we've got:</p>
                <div>
                  <p>
                    <span className="text-blue-500">name:</span>
                    {history[0]}{" "}
                  </p>
                  <p>
                    <span className="text-blue-500">email:</span>
                    {history[1]}{" "}
                  </p>
                  <p>
                    <span className="text-blue-500">description:</span>
                    {history[2]}{" "}
                  </p>
                </div>
                <p>Looks good?</p>
                <div className="flex flex-row gap-3 mt-2">
                  <button
                    onClick={handleReset}
                    className="bg-white text-black rounded-lg px-2 py-1"
                  >
                    Restart
                  </button>
                  <motion.button
                    onClick={handleSubmit}
                    className="bg-black text-white rounded-lg py-1 px-2"
                  >
                    Send it!
                  </motion.button>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <VerticalScrollingComponent /> */}
      </footer>
    );
};

export default Footer;

// const VerticalScrollingComponent = () => {
//   return (
//     <div className="h-64 overflow-y-auto border border-gray-300 p-4">
//       <h2 className="text-xl font-bold mb-2">Scrollable Content</h2>
//       <div>
//         {/* Add a lot of content here to enable scrolling */}
//         {Array.from({ length: 2 }).map((_, index) => (
//           <div key={index} className="mb-2 p-2 bg-blue-500 text-white rounded">
//             Item {index + 1}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
