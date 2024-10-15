import { useNavigate } from 'react-router-dom';
import {motion, useInView} from "framer-motion";



export default function MainContent(){

    const navigate = useNavigate();

    const signUpClick = () => {
      navigate('/signup');
    }

  
  
    return (
      <>
      <div className="main-content">
       
        <div className="left-mc"></div>
  
        <div className="middle-mc">
              <motion.h1 className="main-txt" initial={{ x: 100 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0 }}
                        viewport={{ once: true }}>choose the right STEM<br />path with us.</motion.h1>

                <div className="wdwd-txt">
                  
                  <p>We provide you with valuable insights into various STEM courses,<br/>highlighting the benefits, potential salaries, job opportunities, 
                  <br/>as well as the challenges associated with each field.</p>
                </div>

                <div className="btn-main">
                  <button className="btn1" onClick={signUpClick}>
                    Join Today!
                  </button>
                  <a href="#third-section"><button className="btn2"> Explore Opportunities</button></a>
                </div>
  
                <p className="explore-txt">
                Explore different fields ALL based on certified DATA<br />
                all to help you choose a course based on your interests and strengths.
                </p>
        </div>
  
        <div className="right-mc"></div>

      </div>
      </>
    )
  
  }

