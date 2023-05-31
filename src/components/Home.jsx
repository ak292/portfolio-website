import AboutMe from "./AboutMeArea";
import ContactLinks from "./ContactLinks";
import ProjectsArea from "./ProjectsArea.jsx";
import Name from "./Name";
import { useState } from "react";
import "./css/Home.css";

const Home = () => {
  const [projects, setProjects] = useState(false);

  return (
    <div className="homepage">
      <div className="homepage-1">
        {!projects && <Name />}
        <div className="homepage-2">
          {!projects && <AboutMe />}
          {!projects && <ContactLinks setProjects={setProjects} />}
          {projects && <ProjectsArea setProjects={setProjects} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
