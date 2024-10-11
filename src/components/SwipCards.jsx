import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
// eslint-disable-next-line react/prop-types
const SwipeCards = ({ darkMode }) => {
  const [cards, setCards] = useState(cardData);

  const handleCardSwipe = (swipedCardId) => {
    setCards((prevCards) => {
      const remainingCards = prevCards.filter(
        (card) => card.id !== swipedCardId
      );

      if (remainingCards.length === 0) {
        // When no more cards, reset to the original cardData
        setTimeout(() => {
          setCards(cardData); // Reset cards to original data
        }, 300); // Delay to give animation time
      }

      return remainingCards;
    });
  };

  return (
    <div className={`${darkMode} && "dark`}>
      <div
        className="grid h-[500px]  place-items-center bg-white dark:bg-black transition-colors duration-500"
        //   style={{
        //     backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        //   }}
      >
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              cards={cards}
              setCards={setCards}
              onCardSwipe={handleCardSwipe}
              {...card}
            />
          );
        })}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({ id, body, url, title, cards, onCardSwipe, isMobile }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isSmall, setIsSmall] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 640); // Tailwind's `sm` breakpoint is 640px
    };

    // Check screen size on initial render and on every resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  // eslint-disable-next-line react/prop-types
  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEndPc = () => {
    if (Math.abs(x.get()) > 100) {
      onCardSwipe(id); // Handle swipe and reset cards if needed
    }
  };
  const handleDragEndMobile = () => {
    if (Math.abs(x.get()) > 50) {
      onCardSwipe(id); // Handle swipe and reset cards if needed
    }
  };

  return (
    // <motion.img
    //   src={url}
    //   alt="Placeholder alt"
    //   className="h-96 w-72 origin-bottom rounded-lg bg-white object-center object-cover hover:cursor-grab active:cursor-grabbing"
    //   style={{
    //     gridRow: 1,
    //     gridColumn: 1,
    //     x,
    //     opacity,
    //     rotate,
    //     transition: "0.125s transform",
    //     boxShadow: isFront
    //       ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
    //       : undefined,
    //   }}
    //   animate={{
    //     scale: isFront ? 1 : 0.98,
    //   }}
    //   drag={isFront ? "x" : false}
    //   dragConstraints={{
    //     left: 0,
    //     right: 0,
    //   }}
    //   onDragEnd={handleDragEnd}
    // />
    <motion.div
      className=" shadow-lg overflow-hidden h-96 sm:w-72 w-[16rem]  origin-bottom rounded-lg dark:bg-neutral-300 bg-gray-300 transition-colors duration-500 opacity-0 object-center object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(1 1 1 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: 0,
        right: 0,
      }}
      onDragEnd={isSmall ? handleDragEndMobile : handleDragEndPc}
    >
      {/* <img
        src={url} // URL for Tailwind CSS icon
        alt="Tailwind CSS Icon"
        className="w-20 h-20 mx-auto my-8" // Image size and centering
      /> */}
      <div className="  w-20 h-20 flex justify-center items-center mx-auto  my-8">
        {url}
      </div>
      <div className="p-4">
        <h3 className="text-xl  flex flex-row justify-center items-center gap-2 font-bold dark:text-black text-black text-center mb-4">
          {title}
        </h3>
        <p className="text-gray-800 dark:text-gray-800 text-center">{body}</p>
      </div>
    </motion.div>
  );
};

export default SwipeCards;

const cardData = [
  {
    id: 1,
    title: " HTML",
    body: " HTML (Hypertext Markup Language) is the standard markup language used to create and structure content on the web. ",
    url: <FaHtml5 color="#E34F26" size={100} />,
    // url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "CSS",
    body: " CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and layout of HTML documents. ",
    url: <FaCss3Alt color="#1572B6" size={100} />,
    // url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: " GitHub",
    body: " GitHub is a web-based platform that facilitates version control and collaboration for software development projects using Git.",
    url: <FaGithub color="#181717" size={100} />,
    // url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Framer",
    body: " Framer is a powerful design and prototyping tool that allows designers and developers to create interactive and responsive web applications.",
    url: <SiFramer color="#000000" size={100} />,
    // url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "JavaScript",
    body: " JavaScript is a versatile, high-level programming language that enables dynamic content and interactive features on websites",
    url: <RiJavascriptFill color="#F7DF1E" size={100} />,

    // url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Bootstrap",
    body: " Bootstrap is a widely used open-source CSS framework that enables developers to create responsive and mobile-first websites quickly.",
    url: <FaBootstrap color="#7952B3" size={100} />,
    // url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Tailwind CSS",
    body: " Tailwind CSS is a utility-first framework that enables developers to build custom designs directly in their HTML, promoting rapid development and maintainable code.",
    url: <RiTailwindCssFill color="#38BDF8" size={100} />,
    // url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", // URL for Tailwind CSS icon
    // url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "React JS ",
    body: "  React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers andcompanies.",
    url: <FaReact color="#61DAFB" size={100} />,
    // url: "https://github.com/devicons/devicon/blob/ca28c779441053191ff11710fe24a9e6c23690d6/icons/algolia/algolia-original.svg",
    // url: reactjs,
    // url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", // URL for Tailwind CSS icon
  },
];
