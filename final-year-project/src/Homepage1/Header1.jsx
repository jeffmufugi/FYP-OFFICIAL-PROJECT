import { useNavigate } from 'react-router-dom';
import ai from "../site_icons/atom1.svg";
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import { Context } from '../App';
import a2 from "../site_icons/loggedin.png";
import useMedia from 'use-media';
import ax from "../site_icons/menu.svg";

export default function Header1(){

  const navigate = useNavigate();
  const [signedIn,setSignedIn] = useContext(Context);

  function setSignedInfunc(){
    setSignedIn(true);
}

function setSignedOutfunc(){
  setSignedIn(false);
}





const signInClick = () => {
  navigate('/signin');
}





const [isOpen,setIsOpen]= useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen);

  const [isOpen2,setIsOpen2]= useState(false)
  const isLargeScreen = useMedia({ minWidth: 1024 });
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const homepageClick = () => {
    navigate('/');
  }

  const AboutUsClick = () => {
    navigate('/aboutus');
  }


  const homeClick = () => {
    navigate('/');
  }

  const contactUsClick = () => {
    navigate('/contactus');
  }

  const signUpClick = () => {
    navigate('/signup');
  }

   const coursePageClick = () => {
    navigate('/courses');
  }


return (
  <>
       {isLargeScreen && <header className="header-list">
        <div className="left-hdr">
        <img src={ai} className="header1-img" onClick={homeClick}/>
        </div>
          <div className="middle-hdr">
            <ul className="mid-header2">
              <li onClick={homeClick}>Home</li>
              <li onClick={coursePageClick}>Courses</li>
              <li onClick={contactUsClick}>Contact Us</li>
              <li onClick={AboutUsClick}>About Us</li>
            </ul>
          </div>
          <div className="right-hdr" style={{position:"relative"}}>
        
          {signedIn === true &&  <>
            <img src={a2} alt="" onClick={toggleDropdown} style={{cursor:"pointer",width:"25px"}}/>
                <AnimatePresence>
                {isOpen === true && 
                (<>
                      
                <motion.ul className="listhdrhmp"
                initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
           >
                  {/* <li >Profile</li> */}
                  <li  onClick={setSignedOutfunc}>Sign Out</li>
                </motion.ul>
                
                </>) }
                </AnimatePresence>
          </>}
               
                

          </div>
          
      </header>}

      {!isLargeScreen && <header className="header-list" style={{justifyContent:"space-between"}}>
        
        
       
        <img src={ai} className="header1-img" onClick={homeClick}/>
        
          
        <img src={ax} onClick={toggleDropdown2} style={{zIndex:3,cursor:"pointer"}}/> 
        <AnimatePresence>
                {isOpen2  && 
                (<>
                      
                <motion.ul className="mediaheadersmall"  
                                 initial={{ opacity: 0, y:-4 }}
                                 animate={{ opacity: 1, y:0 }}
                                 exit={{ opacity: 0, y: -4 }}
                                 transition={{ duration: 0.3 }}>
                      <li className='l1' onClick={homeClick}>Home</li>
                      <li className='l1' onClick={AboutUsClick}>About Us</li>
                      {/* <li className='l1' onClick={contactUsClick}>Contact Us</li> */}
                      {signedIn === true &&  <li className='l1'>Forums</li>}
                      {signedIn === true &&  <li >Sign Out</li>}
                      {signedIn === false &&  <li className='l1' onClick={signInClick}>Sign In</li>}
                      {signedIn === false &&  <li onClick={signUpClick}>Register</li>}
                </motion.ul>
                
                
                </>) }
                </AnimatePresence>
             

       
          
      </header>}
                

         
  </>

)

  }