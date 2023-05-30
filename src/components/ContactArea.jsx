import "./css/ContactArea.css";

const ContactArea = ({ links }) => {
  return (
    <div>
      {links.map((link, index) => (
        <div key={index}>
          <a target="_blank" rel="noreferrer" href={link.linkSRC}>
            {link.linkName}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ContactArea;
