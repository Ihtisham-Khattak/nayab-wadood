import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-circular-progressbar/dist/styles.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Testamonial from "./components/Testamonial";
import { createContext, useState } from "react";


export const ThemeContext = createContext(null);
function App() {
  //Set the Current State
  const [theme, setTheme] = useState("light");
  //OnClick toggle the theme
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <NavBar toggleTheme={toggleTheme} theme={theme === "light"} />
        <Banner />
        <Skills />
        <Projects />
        <Testamonial />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
