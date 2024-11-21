
import ai from "./site_icons/atom1.svg";
import {motion} from "framer-motion";
import bg2 from "./site_icons/bg4.png";
import bg3 from "./site_icons/phoneslide3.svg";
import bg4 from "./site_icons/phoneslide.svg";
import bg5 from "./site_icons/phoneslide2.svg";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { Context } from './App.jsx';
import useMedia from 'use-media';

const Homepage3 = () => {
  const [signedIn,setSignedIn] = useContext(Context);
  function setSignedInfunc(){
    setSignedIn(true);
}
const isLargeScreen = useMedia({ minWidth: 1024 });
  const navigate = useNavigate();
    const signInClick = () => {
      navigate('/signin');
    }
    const signUpClick = () => {
      navigate('/signup');
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
  
  const [phone,setPhone]=useState(false)

  function set(){
    setPhone(!phone);
  }



    return (
        <div className="third-section" id="third-section">
            <img src={bg2} className="background-icon2"/>
            {isLargeScreen &&       
            <div className="header3-top-section" >
                <div className="header3-top-left-section">

              {phone == true &&  <img src={bg3} alt="" style={{width:"60vw",height:"auto",position:"relative",alignSelf:"center",marginTop:"3px",marginBottom:"3px"}} onClick={set}/>}
              {phone == false &&  <img src={bg4} alt="" style={{width:"60vw",height:"auto",position:"relative",alignSelf:"center",marginTop:"3px",marginBottom:"3px"}} onClick={set}/>}
                    
                </div>
                <div className="header3-top-right-section">
                    <button className="btn-vc" onClick={coursePageClick}>View All Courses</button>

                </div>
            
            </div>}

            {!isLargeScreen &&  <div className="header3-top-section" style={{flexDirection:"column"}}>
            <div className="header3-top-left-section" >
                  {/* <div style={{width:"100vw",height:"150px",display:"flex"}}>
                     <img src={bg3} alt="" style={{width:"90vw",height:"auto",position:"absolute",alignSelf:"center",zIndex:"6",top:"5px",right:"16px"}}/>
                     <div style={{width:"86vw",height:"157px",backgroundColor:"#3B3B3B",borderRadius:"25px",position:"absolute",zIndex:"5",alignSelf:"center",top:"20px",right:"23px"}}>
                    <h1 style={{color:"#FFE100",paddingLeft:"30px",paddingTop:"30px",fontFamily:"Inter",fontWeight:"900",fontSize:"25px"}}>EXPLORE YOUR OPTIONS AND IGNITE YOUR FUTURE</h1>
                  </div>

                  </div> */}
                {phone == true &&  <img src={bg3} alt="" style={{width:"100vw",height:"auto",position:"relative",alignSelf:"center",marginTop:"3px",marginBottom:"3px"}} onClick={set}/>}
              {phone == false &&  <img src={bg4} alt="" style={{width:"100vw",height:"auto",position:"relative",alignSelf:"center",marginTop:"3px",marginBottom:"3px"}} onClick={set}/>}
                    
                </div>
                <div className="header3-top-right-section">
                    <button className="btn-vc" onClick={coursePageClick}>View All Courses</button>

                </div>
              </div>}
      
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
              { isLargeScreen && <li onClick={contactUsClick} className="left-foot-1">Contact Us</li>}
              { signedIn === false && !isLargeScreen && <li onClick={signUpClick} className="left-foot-1">Sign Up</li>}
              {signedIn === false && <li onClick={signInClick} className="left-foot-1">Sign In</li>}
              {signedIn === true && <li onClick={setSignedInfunc} className="left-foot-1">Sign Out</li>}
              
              
        
            </ul>
            

    </div>
      <div className="mid-foot">
    <img src={ai} className="footer3-img"/>
        </div>

{ isLargeScreen && <div className="right-foot">
          <p>© 2024 Mufugi LLC. All right reserved.</p>
          <p>choose the right STEM path with us.</p>
      </div>
            }
</div>


          
       
        </div>
      );
    };
    
    export default Homepage3;