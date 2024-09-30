import back from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/back-arrow.svg"
import { useNavigate } from 'react-router-dom';
import bg2 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/lines.svg";
import person from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Person.svg"
import lock from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Lock1.svg"
import email from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Email.svg"
import phone from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Phone enabled.svg"
import location from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Location on.svg"
import tech from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Tech icon12.svg"
import rocketMan from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/RocketMan.svg"
import {motion} from "framer-motion";

export default function SignUpPage(){
    const navigate = useNavigate();

    const homepageClick = () => {
      navigate('/');
    }

    return(
      <>
      
        <div className="sign-up-page">
        <img src={bg2} className="background-icon1"/>
            <div className="sign-up-header">
                <div className="left-sign-up-header">
                    <div className="top-left-sign-up-header">
                        <img src={back} alt="back-icon" className="sign-up-to-homepage-icon" onClick={homepageClick}/>
                    </div>
                    <div className="bottom-left-sign-up-header">
                    <motion.h1 className="sign-up-header-text"initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}>create your <br/>account .</motion.h1>
                    </div>
                    
                </div>
                <div className="right-sign-up-header">
                <img src={rocketMan} alt="page-icon" className="sign-up-page-icon"/>
                </div>
            </div>
        
            <div className="main-sign-up-form">
                <div className="left-main-sign-up-form"></div>
                <motion.div className="mid-main-sign-up-form" initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}>
                    
                    <div className="left-mid-main-sign-up-form">

                        <div className="input-field-1">
                            <p className="TopPlaceHolder">First Name*</p>
                            <input type="text"/>
                            <img src={person} alt="person-icon" className="text-img"/>
                        </div>

                        <div className="input-field-2"> 
                            <p className="TopPlaceHolder">Email*</p>
                            <input type="text"/>
                            <img src={email} alt="person-icon" className="text-img"/>
                        </div>
                           
                        <div className="input-field-3">
                            <p className="TopPlaceHolder"><strong>Phone Number*</strong></p>
                            <input type="text"/>
                            <img src={phone} alt="person-icon" className="text-img"/>
                        </div>

                        <div className="input-field-4">
                            <p className="TopPlaceHolder">Confirm Password*</p>
                            <input type="password"/>
                            <img src={lock} alt="person-icon" className="text-img"/>
                        </div>


                    </div>
                    <div className="right-mid-main-sign-up-form">
                        <div className="input-field-5">
                            <p className="TopPlaceHolder">Last Name*</p>
                            <input type="text"/>
                            <img src={person} alt="person-icon" className="text-img"/>
                        </div>
                        <div className="input-field-6">
                            <p className="TopPlaceHolder">Region*</p>
                            <input type="text"/>
                            <img src={location} alt="person-icon" className="text-img"/>
                        </div>
                        <div className="input-field-7">
                            <p className="TopPlaceHolder">Password*</p>
                            <input type="password"/>
                            <img src={lock} alt="person-icon" className="text-img"/>
                        </div>
                        <div className="input-field-x">
                            <button className="register-btn-sp">Register</button>
                        </div>
                    </div>
                


                </motion.div>
                <div className="right-main-sign-up-form"></div>
            </div>
        </div>
      </>
    )
  
  
  }

