import AboutMe from "./AboutMeArea";
import ContactLinks from "./ContactLinks";
import Name from "./Name";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <div className="homepage-1">
        <Name />
        <div className="homepage-2">
          <AboutMe />
          <ContactLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
