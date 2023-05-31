import "./css/ContactArea.css";

const ContactArea = ({ links, setProjects }) => {
  const handleClick = (event) => {
    event.preventDefault();
    setProjects(true);
  };

  return (
    <div>
      {links.map((link, index) => (
        <div key={index}>
          <a onClick={handleClick} href={link.linkSRC}>
            {link.linkName}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactArea;
