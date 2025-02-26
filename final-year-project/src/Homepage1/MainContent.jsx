import { useNavigate } from 'react-router-dom';
import {motion, useInView} from "framer-motion";
import { useContext, useState } from 'react';
import { Context } from '../App';
import { useMediaQuery } from 'react-responsive';


export default function MainContent(){
  const [signedIn,setSignedIn] = useContext(Context);

    const navigate = useNavigate();

    const signUpClick = () => {
      navigate('/signup');
    }
    const courseClick = () => {
      navigate('/courses');
    }

    const scrollToSection = (event) => {
      event.preventDefault();
      const section = document.querySelector("#third-section");
      section.scrollIntoView({ behavior: "smooth" });
    };



    const btnbreak = useMediaQuery({ minWidth: 825 });
  
    return (
      <>
      <div className="main-content">
       
        <div className="left-mc"></div>
  
        <div className="middle-mc">
        {btnbreak && <motion.h1 className="main-txt" initial={{ x: 100 ,opacity: 1 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0 }}
                        viewport={{ once: true }}>choose the right STEM <br/>path with us.</motion.h1>}
                

        {!btnbreak && <motion.h1 className="main-txt" 
                        initial={{ x: 100 ,opacity: 1 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0 }}
                        viewport={{ once: true }}
                        style={{whiteSpace:"nowrap",marginRight:"5px"}}
                        
                        >choose the<br/> right STEM<br/> path with us.</motion.h1>}

              <div className="wdwd-txt">
                  
                  <p>We provide you with valuable insights into various STEM courses,highlighting the benefits, potential salaries, job opportunities, 
                  as well as the challenges associated with each field.</p>
                  
                </div>

                <div className="btn-main">
        
                  {signedIn === true && <button onClick={courseClick} className="btn1">
                  <p className='txtx'>Browse Courses</p>
                  </button>}
                  {signedIn === false && <button className="btn1" onClick={signUpClick}>
                    <p className='txtx'>Join Today!</p>
                  </button>}
                  
              
                   <button className="btn2" onClick={scrollToSection}>Explore Opportunities</button>

                </div>
  

                {!btnbreak && <p className="explore-txt"><br/>
                Explore different fields ALL based on certified DATA
                all to help you choose a course based on your interests and strengths.
                </p>}

                {btnbreak && <p className="explore-txt"><br/>
                Explore different fields ALL based on certified DATA<br />
                all to help you choose a course based on your interests and strengths.
                </p>}

              

        </div>
  
        <div className="right-mc"></div>

      </div>
      </>
    )
  
  }

