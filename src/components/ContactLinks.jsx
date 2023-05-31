import ContactArea from "./ContactArea";

const ContactLinks = ({ setProjects }) => {
  const links = [
    {
      id: 1,
      linkName: "View my GitHub profile",
      linkSRC: "https://www.github.com/ak292",
    },
    {
      id: 2,
      linkName: "Connect with me on LinkedIn",
      linkSRC: "https://www.linkedin.com/in/ahmed-keshka-7aab73266/",
    },
    {
      id: 3,
      linkName: "Check out some of my personal projects",
      linkSRC: "#",
    },
  ];
  return <ContactArea links={links} setProjects={setProjects} />;
};

export default ContactLinks;
