import Projects from "./Projects";

const ProjectsArea = () => {
  const items = [
    {
      id: 1,
      name: "Discord Management Bot (Graduation Project)",
      imageName: "discord.gif",
      description: 1,
    },
    {
      id: 2,
      name: "Spotify Clone (Made with React, Redux & more)",
      imageName: "discord.gif",
      description: 1,
    },
    {
      id: 3,
      name: "Custom Version of 'Wordle'",
      imageName: "discord.gif",
      description: 1,
    },
    {
      id: 4,
      name: "Real-time Chat Room with Socket.io",
      imageName: "discord.gif",
      description: 1,
    },
  ];

  return <Projects items={items} />;
};

export default ProjectsArea;
