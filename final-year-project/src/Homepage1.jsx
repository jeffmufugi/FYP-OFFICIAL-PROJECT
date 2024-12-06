
import Header from "./Homepage1/Header.jsx";
import MainContent from "./Homepage1/MainContent.jsx";
import {ICONS,ICONS2} from "./site_icons/index.jsx";

import rec from "../src/site_icons/rec3.png";
import xxx from "./site_icons/worker1.png";
import xx from "./site_icons/doco.png";
import x1 from "./site_icons/maths.png";
import x2 from "./site_icons/rock2.png";
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const Homepage1 = () => {
  const [signedIn,setSignedIn]=useState(false);

  

  return (
    <div className="first-section">
      
         <img src={rec} className="background-top-light" style={{zIndex:"1"}}/>

      <Header signedIn={signedIn}/>
      <MainContent signedIn={signedIn}/>
      <Footer />
    </div>
  );
};
export default Homepage1;

 
const Footer = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });


  const iconsArray = Object.values(ICONS); // Get the array of image paths
  const iconsArray2 = Object.values(ICONS2); // Get the array of image paths

  return (
    <>
      {isLargeScreen && 
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
      </div>}





      {!isLargeScreen &&
    <>

  <footer className="imgft">
  <img 
    src={xxx} 
    alt="" 
    style={{
      height: "100%",
      width: "auto",
      position: "absolute",
      left: "-16%", /* Even more overlap */
      zIndex: 3,
      objectFit:"contain"
    }} 
  />
    <img 
    src={x1} 
    alt="" 
    style={{
      height: "100%",
      width: "auto",
      position: "absolute",
      right: "16%", /* Even more overlap */
      zIndex: 0
    }} 
  />
  <img 
    src={xx} 
    alt="" 
    style={{
      height: "100%",
      width: "auto",
      position: "absolute",
      right: "-16%", /* Even more overlap */
      zIndex: 2
    }} 
  />
  <img 
    src={x2} 
    alt="" 
    style={{
      height: "100%",
      width: "auto",
      position: "absolute",
      left: "16%", /* Even more overlap */
      zIndex: 1
    }} 
  />
</footer>
</>
     }
     
      </>  

    
  );
};
