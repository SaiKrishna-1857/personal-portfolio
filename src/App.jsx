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
    <Router>
      <TopNav />
      <Routes>
        <Route path="/personal-portfolio" element={<Home />} />
        <Route path="/personal-portfolio/work-experience" element={<WorkExperience />} />
        <Route path="/personal-portfolio/projects" element={<Projects />} />
        <Route path="/personal-portfolio/recent-works" element={<RecentWorks />} />
        <Route path="/personal-portfolio/get-in-touch" element={<GetInTouch />} />
      </Routes>
    </Router>
  );
}

export default App;
