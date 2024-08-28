import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import RecentWorks from "./components/RecentWorks";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <Router basename="/personal-portfolio">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/recent-works" element={<RecentWorks />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;
