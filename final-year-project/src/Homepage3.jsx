
import ai from "./site_icons/atom1.svg";
import {motion,AnimatePresence } from "framer-motion";
import bg2 from "./site_icons/bg4.png";
import bg3 from "./site_icons/phoneslide3.svg";
import bg4 from "./site_icons/iphone.svg";
import bg5 from "./site_icons/tt1.svg";
import bg7 from "./site_icons/tt2.svg";
import s1 from "./site_icons/slide.svg";
import s2 from "./site_icons/slide2.svg";
import sx from "./site_icons/probody.svg";
import s3 from "./site_icons/slide3.svg";
import bg6 from "./site_icons/phoneslide2.svg";
import slide from "./site_icons/lapslide.png";
import slide1 from "./site_icons/lapslide2.png";
import slide2 from "./site_icons/lapslide3.png";
import slide3 from "./site_icons/lapslide4.png";
import slide4 from "./site_icons/lapslide5.png";
import slide5 from "./site_icons/lapslide6.png";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";
import { Context } from './App.jsx';
import useMedia from 'use-media';

const Homepage3 = () => {
  const [currentText, setCurrentText] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev === 4 ? 1 : prev + 1)); // Cycle between 1, 2, and 3
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const [currentText1, setCurrentText1] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText1((prev) => (prev === 5 ? 1 : prev + 1)); // Cycle between 1, 2, and 3
    }, 4000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  

  // Toggle between bg5 and bg7 every 3 seconds
  const [signedIn,setSignedIn] = useContext(Context);
  function setSignedInfunc(){
    setSignedIn(true);
}
function setSignedOutfunc(){
  window.location.reload();
  setSignedIn(false);
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
                <div className="header3-top-left-section" style={{position:"relative",display:"flex",flex:1, overflow: "hidden",height: "auto", justifyContent: "center",
    alignItems: "center"}} 
    >

              <motion.img 
              {...FadeIn.left}
              src={bg4} alt="" style={{width:"43vw",height:"auto",alignSelf:"center",position:"absolute",objectFit:"contain",zIndex:"12"}} onClick={set}/>
              <motion.img 
                {...FadeIn.left}  
              src={sx} style={{position:"absolute",width:"19vw",height:"auto",zIndex:"20",right:"13vw"}} alt="" />
            
              <motion.div 
                {...FadeIn.left}// Animation duration
              style={{position:"absolute",width:"15vw",height:"auto",right:"15vw",backgroundColor:"white",aspectRatio:"1.4/1",zIndex:"18",overflow: "hidden" }}>
              
              <AnimatePresence>{currentText1 === 1 && 
            
             <motion.img src={slide} 
             
              initial={{ opacity: 1,filter: "blur(10px)" }} 
              animate={{ opacity: 1 ,filter: "blur(0px)"}} 
  
              transition={{duration: 0.5}}

              style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  overflow: "hidden"
              }}/>}
              </AnimatePresence>
              
              <AnimatePresence>{currentText1 === 2 && 
              <motion.img src={slide5} 
              initial={{ opacity: 1,filter: "blur(10px)" }} 
              animate={{ opacity: 1 ,filter: "blur(0px)"}} 
              transition={{duration: 0.5}} 

              style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  overflow: "hidden"
              }}/>}</AnimatePresence>
              <AnimatePresence>
              {currentText1 === 5 && 
              <motion.img src={slide2} 
              initial={{ opacity: 1,filter: "blur(10px)" }} 
              animate={{ opacity: 1 ,filter: "blur(0px)"}} 
              transition={{duration: 0.5}}
       

              style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  overflow: "hidden"
              }}/>}
              </AnimatePresence>
              <AnimatePresence>
              {currentText1 === 4 && 
              <motion.img src={slide3} 
              initial={{ opacity: 1,filter: "blur(10px)" }} 
              animate={{ opacity: 1 ,filter: "blur(0px)"}} 
              transition={{duration: 0.5}}
         

              style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  overflow: "hidden"
              }}/>}
              </AnimatePresence>
              <AnimatePresence>
              {currentText1 === 3 && 
              <motion.img src={slide1} 
              initial={{ opacity: 1,filter: "blur(10px)" }} 
              animate={{ opacity: 1 ,filter: "blur(0px)"}} 
              transition={{duration: 0.5}}
      
              style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  overflow: "hidden"
              }}/>}
              </AnimatePresence>
              </motion.div>
              <motion.div 
             {...FadeIn.left}  // Animation duration
              className="bgrad"
        src={s1}
        alt=""
        style={{
          width: "42vw",
          overflow:"hidden"
        }}
      >
        
        
        {currentText === 1 && <>
          <motion.h1 style={{fontSize:"3vw",marginLeft:"4vw",marginTop:"3vw",fontFamily:"Inter",fontWeight:"900",color:"#355356"}}
           initial={{ x: "-10px", opacity: 1 }} // Start off-screen
           animate={{ x: 0, opacity: 1 }} // Slide in and fade in
           transition={{duration: 0.5}}
          
          >WELCOME</motion.h1>
            <motion.h1 style={{fontSize:"2vw",marginLeft:"4vw",marginTop:"3vw",fontFamily:"Inter",fontWeight:"100",color:"white"}}
              initial={{ x: "10px", opacity: 1 }} 
              animate={{ x: 0, opacity: 1 }} 
              transition={{duration: 0.5}}

            >EXPLORE DIVERSE<br/>CAREER PATHS</motion.h1>
        </>}
        {currentText === 2 && <>
          <motion.h1 
                   initial={{ x: "-10px", opacity: 1 }} // Start off-screen
                   animate={{ x: 0, opacity: 1 }} // Slide in and fade in
                   transition={{duration: 0.5}}
            style={{fontSize:"3vw",marginLeft:"4vw",marginTop:"3vw",fontFamily:"Inter",fontWeight:"900",color:"#355356"}}>SIGN UP</motion.h1>
        <motion.h1 
               initial={{ x: "10px", opacity: 1 }} // Start off-screen
               animate={{ x: 0, opacity: 1 }} // Slide in and fade in
               transition={{duration: 0.5}}
        style={{fontSize:"2vw",marginLeft:"4vw",marginTop:"3vw",fontFamily:"Inter",fontWeight:"100",color:"white"}}>TO ACCESS<br/>YOUR AI CHATBOT</motion.h1 >

        </>}
        {currentText === 3 && <>
          <motion.h1  style={{fontSize:"3vw",marginLeft:"4vw",marginTop:"3vw",fontFamily:"Inter",fontWeight:"900",color:"#355356"}}
                 initial={{ x: "10px", opacity: 1 }} // Start off-screen
                 animate={{ x: 0, opacity: 1 }} // Slide in and fade in
                 transition={{duration: 0.5}}
          >COMPARE</motion.h1 >
        <motion.h1  style={{fontSize:"2vw",marginLeft:"4vw",marginTop:"3vw",fontFamily:"Inter",fontWeight:"100",color:"white"}}
               initial={{ x: "-10px", opacity: 0 }} // Start off-screen
               animate={{ x: 0, opacity: 1 }} // Slide in and fade in
               transition={{duration: 0.5}}
        >WEIGH WHICH PATH<br/>SUITS YOU BEST</motion.h1 >


        </>}
        {currentText === 4 && <>
          <motion.h1 
                   initial={{ x: "-10px", opacity: 1 }} // Start off-screen
                   animate={{ x: 0, opacity: 1 }} // Slide in and fade in
                   transition={{duration: 0.5}}
            style={{fontSize:"3vw",marginLeft:"4vw",marginTop:"3vw",fontFamily:"Inter",fontWeight:"900",color:"#355356"}}>ANALYSE</motion.h1>
        <motion.h1 
               initial={{ x: "10px", opacity: 1 }} // Start off-screen
               animate={{ x: 0, opacity: 1 }} // Slide in and fade in
               transition={{duration: 0.5}}
        style={{fontSize:"2vw",marginLeft:"4vw",marginTop:"3vw",fontFamily:"Inter",fontWeight:"100",color:"white"}}>INTO CAREER<br/>INSIGHTS</motion.h1 >

        </>}
       
           
      
      </motion.div>
        
                </div>
                <div className="header3-top-right-section">
                <motion.button 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{   delay: 0,
                      type: "spring",}}
                    viewport={{ once: true }}
                    className="btn-vc" onClick={coursePageClick}>View All Courses</motion.button>

                </div>
            
            </div>}

            {!isLargeScreen &&             <div className="header3-top-section" style={{flexDirection:"column"}} >
                <div className="header3-top-left-section" style={{position:"relative",display:"flex",flex:5, overflow: "hidden",height: "auto", justifyContent: "center",
    alignItems: "center",}} >

              <img src={bg4} alt="" style={{width:"94vw",height:"auto",alignSelf:"center",position:"absolute",objectFit:"contain",zIndex:"12"}}/>
              <img src={sx} style={{position:"absolute",width:"56vw",height:"auto",zIndex:"20",right:"5vw"}} alt="" />
              <div style={{position:"absolute",width:"44vw",height:"auto",zIndex:"18",right:"11vw",backgroundColor:"white",aspectRatio:"1.4/1",overflow: "hidden" }}>
              <AnimatePresence>{currentText1 === 1 && 
            
            <motion.img src={slide} 
            
             initial={{ opacity: 1,filter: "blur(10px)" }} 
             animate={{ opacity: 1 ,filter: "blur(0px)"}} 
             transition={{duration: 0.5}}

             style={{
                 maxWidth: "100%",
                 maxHeight: "100%",
                 overflow: "hidden"
             }}/>}
             </AnimatePresence>
             
             <AnimatePresence>{currentText1 === 2 && 
             <motion.img src={slide5} 
             initial={{ opacity: 1,filter: "blur(10px)" }} 
             animate={{ opacity: 1 ,filter: "blur(0px)"}} 
             transition={{duration: 0.5}}
           

             style={{
                 maxWidth: "100%",
                 maxHeight: "100%",
                 overflow: "hidden"
             }}/>}</AnimatePresence>
             <AnimatePresence>
             {currentText1 === 5 && 
             <motion.img src={slide2} 
             initial={{ opacity: 1,filter: "blur(10px)" }} 
             animate={{ opacity: 1 ,filter: "blur(0px)"}} 
             transition={{duration: 0.5}}
          

             style={{
                 maxWidth: "100%",
                 maxHeight: "100%",
                 overflow: "hidden"
             }}/>}
             </AnimatePresence>
             <AnimatePresence>
             {currentText1 === 4 && 
             <motion.img src={slide3} 
             initial={{ opacity: 1,filter: "blur(10px)" }} 
             animate={{ opacity: 1 ,filter: "blur(0px)"}} 
             transition={{duration: 0.5}}
            

             style={{
                 maxWidth: "100%",
                 maxHeight: "100%",
                 overflow: "hidden"
             }}/>}
             </AnimatePresence>
             <AnimatePresence>
              {currentText1 === 3 && 
              <motion.img src={slide1} 
              initial={{ opacity: 1,filter: "blur(10px)" }} 
              animate={{ opacity: 1 ,filter: "blur(0px)"}} 
              transition={{duration: 0.5}}
         

              style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  overflow: "hidden"
              }}/>}
              </AnimatePresence>
              </div>
              <div className="bgrad"
        src={s1}
        alt=""
        style={{
          width: "94vw",borderRadius:"7vw",overflow:"hidden"
        }}
   
      >

        {currentText === 1 && <>
          <motion.h1 
             initial={{ x: "-10px", opacity: 1 }} // Start off-screen
             animate={{ x: 0, opacity: 1 }} // Slide in and fade in
             transition={{duration: 0.5}}
            style={{fontSize:"5vw",marginLeft:"8vw",marginTop:"6vw",fontFamily:"Inter",fontWeight:"900",color:"#355356"}}>WELCOME</motion.h1>
            <motion.h1 
             initial={{ x: "10px", opacity: 1 }} // Start off-screen
             animate={{ x: 0, opacity: 1 }} // Slide in and fade in
             transition={{duration: 0.5}}
            style={{fontSize:"3vw",marginLeft:"8vw",marginTop:"6vw",fontFamily:"Inter",fontWeight:"400",color:"white"}}>EXPLORE DIVERSE<br/>CAREER PATHS</motion.h1>
        </>}
        {currentText === 2 && <>
          <motion.h1 
                   initial={{ x: "-10px", opacity: 1 }} // Start off-screen
                   animate={{ x: 0, opacity: 1 }} // Slide in and fade in
                   transition={{duration: 0.5}}
                   style={{fontSize:"5vw",marginLeft:"8vw",marginTop:"6vw",fontFamily:"Inter",fontWeight:"900",color:"#355356"}}>SIGN UP</motion.h1>
        <motion.h1 
               initial={{ x: "10px", opacity: 1 }} // Start off-screen
               animate={{ x: 0, opacity: 1 }} // Slide in and fade in
               transition={{duration: 0.5}}
               style={{fontSize:"3vw",marginLeft:"8vw",marginTop:"6vw",fontFamily:"Inter",fontWeight:"300",color:"white"}}>TO ACCESS<br/>YOUR AI CHATBOT</motion.h1 >

        </>}
        {currentText === 3 && <>
          <motion.h1 
             initial={{ x: "10px", opacity: 1 }} // Start off-screen
             animate={{ x: 0, opacity: 1 }} // Slide in and fade in
             transition={{duration: 0.5}}
            style={{fontSize:"5vw",marginLeft:"8vw",marginTop:"6vw",fontFamily:"Inter",fontWeight:"900",color:"#355356"}}>COMPARE</motion.h1>
        <motion.h1 
         initial={{ x: "-10px", opacity: 1 }} // Start off-screen
         animate={{ x: 0, opacity: 1 }} // Slide in and fade in
         transition={{duration: 0.5}}
        style={{fontSize:"3vw",marginLeft:"8vw",marginTop:"6vw",fontFamily:"Inter",fontWeight:"300",color:"white"}}>WEIGH WHICH PATH<br/>SUITS YOU BEST</motion.h1>


        </>}
        {currentText === 4 && <>
          <motion.h1 
             initial={{ x: "-10px", opacity: 1 }} // Start off-screen
             animate={{ x: 0, opacity: 1 }} // Slide in and fade in
             transition={{duration: 0.5}}
            style={{fontSize:"5vw",marginLeft:"8vw",marginTop:"6vw",fontFamily:"Inter",fontWeight:"900",color:"#355356"}}>ANALYSE</motion.h1>
        <motion.h1 
         initial={{ x: "10px", opacity: 1 }} // Start off-screen
         animate={{ x: 0, opacity: 1 }} // Slide in and fade in
         transition={{duration: 0.5}}
        style={{fontSize:"3vw",marginLeft:"8vw",marginTop:"6vw",fontFamily:"Inter",fontWeight:"300",color:"white"}}>INTO CAREER<br/>INSIGHTS</motion.h1>

        </>}
           
      
      </div>
              
            
                </div>
           
                <div className="header3-top-right-section">
                    <motion.button 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5}}
                    viewport={{ once: true }}
                    className="btn-vc" onClick={coursePageClick}>View All Courses</motion.button>

                </div>
              </div>}
      
<div className="header3-main-section">


<div className="footer-3">
  <div className="scroll-container">
    <div className="top-footer3">
      <span className="itemfoot item1f">Computer Science</span>
      <span className="itemfoot item2f">Mechanical Engineering</span>
      <span className="itemfoot item3f">Biotechnology</span>
      <span className="itemfoot item4f">Physics</span>
      <span className="itemfoot item5f">Cybersecurity</span>
      <span className="itemfoot item6f">Data Science</span>
      <span className="itemfoot item7f">Nuclear Engineering</span>
      <span className="itemfoot item8f">Aerospace Engineering</span>
      <span className="itemfoot item1f">Computer Science</span>
      <span className="itemfoot item2f">Mechanical Engineering</span>
      <span className="itemfoot item3f">Nuclear Engineering</span>
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
      <span className="itemfoot item3f">Aerospace Engineering</span>
      <span className="itemfoot item4f">Marine Biology</span>
      <span className="itemfoot item5f">Robotics</span>
      <span className="itemfoot item6f">Astronomy</span>
      <span className="itemfoot item7f">Biotechnology</span>
      <span className="itemfoot item8f">Computer Engineering</span>
      <span className="itemfoot item9f">Data Science</span>
      <span className="itemfoot item1f">Chemical Engineering</span>
      <span className="itemfoot item2f">Mathematics</span>
      <span className="itemfoot item3f">Physics</span>
      <span className="itemfoot item4f">Marine Biology</span>
      <span className="itemfoot item5f">Robotics</span>
      <span className="itemfoot item6f">Astronomy</span>
      <span className="itemfoot item7f">Biotechnology</span>
      <span className="itemfoot item8f">Computer Engineering</span>
      <span className="itemfoot item9f">Marine Biology</span>
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
              {signedIn === true && <li onClick={setSignedOutfunc} className="left-foot-1">Sign Out</li>}
              
              
        
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

    export const FadeIn = {
      left: {
        initial: { x: -300 }, // Start state
        whileInView: { x: 0},
        transition: {
          delay: 0,
          type: "spring",
          damping: 50,
        },
        viewport: { once: true },
      },
    };