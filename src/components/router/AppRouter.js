import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Home.jsx";
import ProjectsArea from "../ProjectsArea.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsArea />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
