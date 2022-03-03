import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme) {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="65, 105, 225"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <Routes />
    </>
  );
};

export default App;
