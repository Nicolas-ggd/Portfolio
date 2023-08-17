import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./components/home/Home";
import { About } from "./components/about/About";
import { Projects } from "./components/projects/Projects";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Page404 } from "./components/404Page/404Page";
import { Navigation } from "./components/navigation/Navigation";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Navigation />
      <Footer />
    </Router>
  );
}

export default App;
