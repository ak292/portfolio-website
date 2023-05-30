import ContactArea from "./ContactArea";

const ContactLinks = () => {
  const links = [
    {
      id: 1,
      linkName: "View my GitHub profile",
      linkSRC: "https://www.github.com/ak292",
      linkDesc: "Click here to view my GitHub profile.",
    },
    {
      id: 2,
      linkName: "Connect with me on LinkedIn",
      linkSRC: "https://www.linkedin.com/in/ahmed-keshka-7aab73266/",
      linkDesc: "Click here to connect with me on LinkedIn.",
    },
    {
      id: 3,
      linkName: "Check out some of my personal projects",
      linkSRC: "/projects",
      linkDesc: "Click here to view some of my personal projects.",
    },
  ];
  return <ContactArea links={links} />;
};

export default ContactLinks;
