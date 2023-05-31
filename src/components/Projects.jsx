import { useState } from "react";
import discordGIF from "../images/discord.gif";
import "./css/Projects.css";

const Projects = ({ items, setProjects }) => {
  const [activeOverlayIndex, setActiveOverlayIndex] = useState(null);

  const handleMoreDetailsClick = (index) => {
    setActiveOverlayIndex(index);
  };

  const handleCloseOverlay = () => {
    setActiveOverlayIndex(null);
  };

  const handleClick = () => {
    setProjects(false);
  };

  return (
    <div>
      <div class="message-container">
        <h1>Welcome to my projects page!</h1>
        <button className="link-button" onClick={handleClick}>
          Click here to go back to the homepage
        </button>
      </div>
      <div className="container">
        {items.slice(0, 2).map((item, index) => (
          <div className="container-2" key={index}>
            <p>{item.name}</p>
            <img src={discordGIF} alt={"Discord GIF"} />
            <button
              className="details-button"
              onClick={() => handleMoreDetailsClick(index)}
            >
              More Details
            </button>
          </div>
        ))}
      </div>
      <div className="container">
        {items.slice(2, 4).map((item, index) => (
          <div className="container-2" key={index}>
            <p>{item.name}</p>
            <img src={discordGIF} alt={"Discord GIF"} />
            <button
              className="details-button"
              onClick={() => handleMoreDetailsClick(index + 2)}
            >
              More Details
            </button>
          </div>
        ))}
      </div>

      {activeOverlayIndex !== null && (
        <div className="overlay active">
          <div className="overlay-content">
            <h2>{items[activeOverlayIndex].name}</h2>
            {/* Additional information related to the item */}
            <button
              className="overlay-hide-button"
              onClick={handleCloseOverlay}
            >
              Hide
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
