
import Header from "./Homepage1/Header.jsx";
import MainContent from "./Homepage1/MainContent.jsx";
import bg2 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/bgech1.png";
import ICONS from "./site_icons/index.jsx";


const Homepage1 = () => {
  return (
    <div className="first-section">
      <img src={bg2} className="background-icon1"/>

      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};
export default Homepage1;




const Footer = () => {
  const iconsArray = Object.values(ICONS); // Get the array of image paths

  return (
    <div className="footer">
      <div className="footer-images">
        {iconsArray.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Icon ${index + 1}`}
            className="footer-image"
          />
        ))}
      </div>
    </div>
  );
};
