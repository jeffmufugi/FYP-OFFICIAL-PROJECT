import { useNavigate } from 'react-router-dom';
import ai from "../site_icons/atom1.svg";
import a2 from "../site_icons/loggedin.png";
import ax from "../site_icons/menu.svg";
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import { Context } from '../App';
import { useMediaQuery } from 'react-responsive';

export default function Header(){

  const [signedIn,setSignedIn] = useContext(Context);

  function setSignedInfunc(){
    setSignedIn(true);
}

function setSignedOutfunc(){
  setSignedIn(false);
  window.location.reload();
}





const [isOpen,setIsOpen]= useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen);

  const [isOpen2,setIsOpen2]= useState(false)
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);

  const navigate = useNavigate();

  const AboutUsClick = () => {
    navigate('/aboutus');
  }

  const homeClick = () => {
    navigate('/');
  }

  const signUpClick = () => {
    navigate('/signup');
  }

  const signInClick = () => {
    navigate('/signin');
  }

  const contactUsClick = () => {
    navigate('/contactus');
  }

   const coursePageClick = () => {
    navigate('/courses');
  }

  const isLargeScreen = useMediaQuery({ minWidth: 1024 });


return (
  <>
      {isLargeScreen ? (<header className="header-list">
        
        
        <div className="left-hdr">
        <img src={ai} className="header1-img" onClick={homeClick}/>
        </div>
          <div className="middle-hdr">
            <ul className="mid-header">
            {signedIn === true &&  <li onClick={homeClick}>Home</li>}
              <li onClick={coursePageClick}>Courses</li>
              <li onClick={AboutUsClick}>About Us</li>
              <li onClick={contactUsClick}>Contact Us</li>
              {signedIn === false &&  <li onClick={signInClick}>Sign In</li>}
        
            </ul>
          </div>
          <div className="right-hdr" style={{position:"relative"}}>
          {signedIn === false &&  <button className="join-btn" onClick={signUpClick}>Click to Join</button> }
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
          
      </header>):(<header className="header-list" style={{justifyContent:"space-between"}}>
        
        
       
        <img src={ai} className="header1-img"/>
        
          
        <img src={ax} onClick={toggleDropdown2} style={{zIndex:3,cursor:"pointer"}}/> 
        <AnimatePresence>
                {isOpen2  && 
                (<>
                      
                <motion.ul className="mediaheadersmall"  
                                 initial={{ opacity: 0, y:-4 }}
                                 animate={{ opacity: 1, y:0 }}
                                 exit={{ opacity: 0, y: -4 }}
                                 transition={{ duration: 0.3 }}
                                 >
                      <li className='l1' onClick={coursePageClick}>Courses</li>
                      <li className='l1' onClick={AboutUsClick}>About Us</li>
                      {/* <li className='l1' onClick={contactUsClick}>Contact Us</li> */}
                      {signedIn === true &&  <li onClick={homeClick}>Home</li>}
                      {signedIn === true &&  <li onClick={setSignedOutfunc}>Sign Out</li>}
                      {signedIn === false &&  <li className='l1' onClick={signInClick}>Sign In</li>}
                      {signedIn === false &&  <li onClick={signUpClick}>Register</li>}
                </motion.ul>
                
                
                </>) }
                </AnimatePresence>
             

       
          
      </header>)}

     
  </>

)


  }

  //________________________________LOGGED OUT HEADER______________________________
// return (
//   <>
//       <header className="header-list">
//         <div className="left-hdr">
//         <img src={ai} className="header1-img"/>
//         </div>
//           <div className="middle-hdr">
//             <ul className="mid-header">
//               <li onClick={coursePageClick}>Courses</li>
//               <li onClick={AboutUsClick}>About Us</li>
//               <li onClick={contactUsClick}>Contact Us</li>
//               <li onClick={signInClick}>Sign In</li>

//             </ul>
//           </div>
//           <div className="right-hdr">
//                 <button className="join-btn" onClick={signUpClick}>Click to Join</button>
//                 <img src={a2} alt="" />
//           </div>
          
//       </header>
//   </>

// )