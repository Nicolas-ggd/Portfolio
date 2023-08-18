import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Page404 } from "./components/404Page/404Page";
import { Navigation } from "./components/navigation/Navigation";
import { Transition } from "./components/transition/Transition";

function App() {
  return (
    <Router>
      <MainComponent />
    </Router>
  );
}

function MainComponent() {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => clearTimeout(transitionTimeout);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <motion.div className="h-full" key={location}>
        {isTransitioning && <Transition />}
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Navigation />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
