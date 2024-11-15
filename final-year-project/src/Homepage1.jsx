
import Header from "./Homepage1/Header.jsx";
import MainContent from "./Homepage1/MainContent.jsx";
import ICONS from "./site_icons/index.jsx";
import rec from "../src/site_icons/rec3.png";
import { useState } from 'react';

const Homepage1 = () => {
  const [signedIn,setSignedIn]=useState(false);

  

  return (
    <div className="first-section">
      
         <img src={rec} className="background-top-light"/>

      <Header signedIn={signedIn}/>
      <MainContent signedIn={signedIn}/>
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
        {
        iconsArray.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Icon ${index + 1}`}
            className="footer-image"
          />
        ))
        }
      </div>
    </div>
  );
};
