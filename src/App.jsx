import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <Router basename="/personal-portfolio">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;
