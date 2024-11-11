import { useNavigate } from 'react-router-dom';
import ai from "../site_icons/atom1.svg";
import a2 from "../site_icons/loggedin.svg";
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useState } from 'react';
import { Context } from '../App';

export default function Header(){

  const [signedIn,setSignedIn] = useContext(Context);

  function setSignedInfunc(){
    setSignedIn(true);
}

function setSignedOutfunc(){
  setSignedIn(false);
}





const [isOpen,setIsOpen]= useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const AboutUsClick = () => {
    navigate('/aboutus');
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

  


return (
  <>
      <header className="header-list">
        <div className="left-hdr">
        <img src={ai} className="header1-img"/>
        </div>
          <div className="middle-hdr">
            <ul className="mid-header">
              <li onClick={coursePageClick}>Courses</li>
              <li onClick={AboutUsClick}>About Us</li>
              <li onClick={contactUsClick}>Contact Us</li>
              {signedIn === true &&  <li>Forums</li>}
              {signedIn === false &&  <li onClick={signInClick}>Sign In</li>}
        
            </ul>
          </div>
          <div className="right-hdr" style={{position:"relative"}}>
          {signedIn === false &&  <button className="join-btn" onClick={signUpClick}>Click to Join</button> }
          {signedIn === true &&  <>
            <img src={a2} alt="" onClick={toggleDropdown} style={{cursor:"pointer"}}/>
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
          
      </header>
  </>

)
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

  }