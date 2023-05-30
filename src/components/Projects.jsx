import discordGIF from "../images/discord.gif";
import "./css/Projects.css";

const Projects = ({ items }) => {
  return (
    <div className="container">
      <ul>
        {items.map((item, index) => (
          <>
            <li key={index}>{item.name}</li>
            <img src={discordGIF} alt={"Picture324"} />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
