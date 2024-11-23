
import Header from "./Homepage1/Header.jsx";
import MainContent from "./Homepage1/MainContent.jsx";
import {ICONS,ICONS2} from "./site_icons/index.jsx";

import rec from "../src/site_icons/rec3.png";
import xxx from "./site_icons/roboto.png";
import xx from "./site_icons/atom.png";
import x1 from "./site_icons/maths.png";
import x2 from "./site_icons/researcher.png";
import { useState } from 'react';
import useMedia from 'use-media';


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
  const isLargeScreen = useMedia({ minWidth: 1024 });
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
    <div className="jeff" style={{display:"flex",flex:0.5,minHeight:"0px",height:"auto"}}></div>
  <footer className="imgft">
  <img 
    src={xxx} 
    alt="" 
    style={{
      height: "180px",
      width: "auto",
      position: "absolute",
      right: "70vw", /* Even more overlap */
      zIndex: 3
    }} 
  />
    <img 
    src={x1} 
    alt="" 
    style={{
      height: "180px",
      width: "auto",
      position: "absolute",
      right: "-11vw", /* Even more overlap */
      zIndex: 0
    }} 
  />
  <img 
    src={xx} 
    alt="" 
    style={{
      height: "170px",
      width: "auto",
      position: "absolute",
      right: "17vw", /* Even more overlap */
      zIndex: 2
    }} 
  />
  <img 
    src={x2} 
    alt="" 
    style={{
      height: "180px",
      width: "auto",
      position: "absolute",
      right: "42vw", /* Even more overlap */
      zIndex: 1
    }} 
  />
</footer>
</>
     }
     
      </>  

    
  );
};
