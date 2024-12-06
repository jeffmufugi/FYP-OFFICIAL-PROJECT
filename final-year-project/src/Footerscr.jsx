
import ai from "./site_icons/atom1.svg";
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Footer3 = () => {

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
              <li onClick={signInClick} className="left-foot-1">Sign In</li>
              
        
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
    
    export default Footer3;