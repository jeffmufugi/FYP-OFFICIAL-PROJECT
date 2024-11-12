
import ai from "./site_icons/atom1.svg";
import {motion} from "framer-motion";
import bg2 from "./site_icons/bg4.png";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { Context } from './App.jsx';

const Homepage3 = () => {
  const [signedIn,setSignedIn] = useContext(Context);
  function setSignedInfunc(){
    setSignedIn(true);
}



  const navigate = useNavigate();
    const signInClick = () => {
      navigate('/signin');
    }
    const contactUsClick = () => {
      navigate('/contactus');
    }
    const AboutUsClick = () => {
      navigate('/aboutus');
    }

   const coursePageClick = () => {
    navigate('/courses');
  }
  


    return (
        <div className="third-section" id="third-section">
            <img src={bg2} className="background-icon2"/>
            <div className="header3-top-section" >
                <div className="header3-top-left-section">
                  <div style={{width:"700px",alignContent:"center"}}>
                  <motion.h1 className="main-txt3" initial={{ x: -100 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0.4 }}
                        viewport={{ once: true }}>
                    explore a world of possibilities in STEM education & find the course that ignites your passion!
                    </motion.h1>

                  </div>
                    
                </div>
                <div className="header3-top-right-section">
                    <button className="btn-vc" onClick={coursePageClick}>View All Courses</button>

                </div>
            
            </div>
<div className="header3-main-section">


<div className="footer-3">
  <div className="scroll-container">
    <div className="top-footer3">
      <span className="itemfoot item1f">Computer Science</span>
      <span className="itemfoot item2f">Mechanical Engineering</span>
      <span className="itemfoot item3f">Electrical Engineering</span>
      <span className="itemfoot item4f">Physics</span>
      <span className="itemfoot item5f">Cybersecurity</span>
      <span className="itemfoot item6f">Data Science</span>
      <span className="itemfoot item7f">Nuclear Engineering</span>
      <span className="itemfoot item8f">Aerospace Engineering</span>
      <span className="itemfoot item1f">Computer Science</span>
      <span className="itemfoot item2f">Mechanical Engineering</span>
      <span className="itemfoot item3f">Electrical Engineering</span>
      <span className="itemfoot item4f">Physics</span>
      <span className="itemfoot item5f">Cybersecurity</span>
      <span className="itemfoot item6f">Data Science</span>
      <span className="itemfoot item7f">Nuclear Engineering</span>
      <span className="itemfoot item8f">Aerospace Engineering</span>
    </div>
  </div>
  <div className="scroll-container">
    <div className="bottom-footer3">
      <span className="itemfoot item1f">Chemical Engineering</span>
      <span className="itemfoot item2f">Mathematics</span>
      <span className="itemfoot item3f">Environmental Engineering</span>
      <span className="itemfoot item4f">Marine Biology</span>
      <span className="itemfoot item5f">Robotics</span>
      <span className="itemfoot item6f">Astronomy</span>
      <span className="itemfoot item7f">Biotechnology</span>
      <span className="itemfoot item8f">Computer Engineering</span>
      <span className="itemfoot item9f">Statistics</span>
      <span className="itemfoot item1f">Chemical Engineering</span>
      <span className="itemfoot item2f">Mathematics</span>
      <span className="itemfoot item3f">Environmental Engineering</span>
      <span className="itemfoot item4f">Marine Biology</span>
      <span className="itemfoot item5f">Robotics</span>
      <span className="itemfoot item6f">Astronomy</span>
      <span className="itemfoot item7f">Biotechnology</span>
      <span className="itemfoot item8f">Computer Engineering</span>
      <span className="itemfoot item9f">Statistics</span>
    </div>
  </div>
</div>

</div>
<div className="bottom-llc">
    <div className="left-foot">
            <ul>
              
              <li onClick={coursePageClick} className="left-foot-1">Courses</li>
              <li onClick={AboutUsClick} className="left-foot-1">About Us</li>
              <li onClick={contactUsClick} className="left-foot-1">Contact Us</li>
              {signedIn === false && <li onClick={signInClick} className="left-foot-1">Sign In</li>}
              {signedIn === true && <li onClick={setSignedInfunc} className="left-foot-1">Sign Out</li>}
              
              
        
            </ul>
            

    </div>
    <div className="mid-foot">
    <img src={ai} className="footer3-img"/>
        </div>
    <div className="right-foot">
        <p>© 2024 Mufugi LLC. All right reserved.</p>
        <p>choose the right STEM path with us.</p>
    </div>
         
</div>


          
       
        </div>
      );
    };
    
    export default Homepage3;