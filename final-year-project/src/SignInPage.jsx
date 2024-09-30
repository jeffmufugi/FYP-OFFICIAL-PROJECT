import {motion} from "framer-motion";
import back from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/back-arrow2.svg"
import { useNavigate } from 'react-router-dom';
import bg2 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/bgech1.png";
import lock from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Lock2.svg"
import email from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Email2.svg"
import rocketL from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/RocketL.svg"


export default function SignInPage(){
    const navigate = useNavigate();

    const homepageClick = () => {
      navigate('/');
    }



    return(
        <>
        <div className="sign-in-page">
        <img src={bg2} className="background-icon1"/>
            <div className="sign-in-header">
                <div className="left-sign-in-header">
                <div className="top-left-sign-in-header">
                        <img src={back} alt="back-icon" className="sign-in-to-homepage-icon" onClick={homepageClick}/>
                    </div>
                <div className="bottom-left-sign-in-header">
                <motion.h1 className="sign-in-header-text"initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}>sign in to <br/>your account .</motion.h1>
                </div>
          
                </div>
                <div className="right-sign-in-header">
                <img src={rocketL} alt="page-icon" className="sign-in-page-icon"/>
                </div>
            </div>
            <div className="main-sign-in-fields">
                <div className="left-sign-in-blank"></div>
                <div className="mid-main-sign-in-field">
                  
                   
                       <div className="input-field-1s">  
                            <p className="TopPlaceHolder">Email*</p>
                            <input type="text"/>
                            <img src={email} alt="person-icon" className="text-img"/>
                        </div>
                 
                   
                    <div className="input-field-2s">
                            <p className="TopPlaceHolder">Password*</p>
                            <input type="password"/>
                            <img src={lock} alt="person-icon" className="text-img"/>
                    </div>

                    <button className="sign-in-button">
                        Sign In
                    </button>
            


                </div>
                <div className="right-sign-in-blank"></div>
            </div>
            





        </div>

        

        </>
        )
        
    }