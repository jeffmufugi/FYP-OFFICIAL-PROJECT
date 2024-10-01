
import ai from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/atom.svg";
import {motion} from "framer-motion";
import bg2 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/bg4.png";
import { useNavigate } from 'react-router-dom';

const Homepage3 = () => {

  const navigate = useNavigate();
    const signInClick = () => {
      navigate('/signin');
    }


    return (
        <div className="third-section" id="third-section">
            <img src={bg2} className="background-icon2"/>
            <div className="header3-top-section" >
                <div className="header3-top-left-section">
                    <motion.h1 className="main-txt3" initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }} >
                    Explore a world of possibilities <br/>in STEM education. <br/>Find the course that <br/>ignites your passion!
                    </motion.h1>
                </div>
                <div className="header3-top-right-section">
                    <motion.button className="btn-vc" initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}>View All Courses</motion.button>

                </div>
            
            </div>
<div className="header3-main-section">


<div className="footer-3">
  <div className="scroll-container">
    <div class="top-footer3">
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
    <motion.div className="bottom-footer3" initial={{ skew:90, y: -10000}}
        whileInView={{ skew:0}}
        transition={{ duration: 1 }}
        viewport={{ once: false }}>
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
    </motion.div>
  </div>
</div>

</div>
<div className="bottom-llc">
    <div className="left-foot">
            <ul>
              <li className="left-foot-1">Courses</li>
              <li className="left-foot-1">About Us</li>
              <li className="left-foot-1">Contact Us</li>
              <li onClick={signInClick} className="left-foot-1">Sign In</li>
              
        
            </ul>
            

    </div>
    <div className="mid-foot">
    <img src={ai}/>
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