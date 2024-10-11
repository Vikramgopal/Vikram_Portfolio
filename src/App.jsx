import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import { useState } from "react";
import terminalbg from "./assets/images/bg8.jpg";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);

  return (
    <main className="relative component">
      <section className={`${darkMode && "dark"}`}>
        <Nav
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <section className="">
          <Hero darkMode={darkMode} setDarkMode={setDarkMode} />
        </section>

        <section className=" bg-white dark:bg-black transition-color duration-500">
          <About darkMode={darkMode} />
        </section>

        <section className=" bg-white dark:bg-black transition-color duration-500">
          <Skills darkMode={darkMode} />
        </section>
        <section className="  bg-white  dark:bg-black transition-color duration-500">
          <Projects darkMode={darkMode} />
        </section>

        <section
          style={{ backgroundImage: `url(${terminalbg})` }}
          className={
            isFullSize
              ? "h-[100vh] max-md:h-[60vh] bg-bg3 bg-cover bg-center"
              : " max-md:p-0 max-md:max-w-full md:padding-x md:padding-y max-md:h-[60vh] h-[100vh]  bg-cover bg-center "
          }
        >
          <Footer isFullSize={isFullSize} setIsFullSize={setIsFullSize} />
        </section>
      </section>
    </main>
  );
};

export default App;
