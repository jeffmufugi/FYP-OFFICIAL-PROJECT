import { useNavigate } from 'react-router-dom';
import back from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/backcd.svg"
import {motion} from "framer-motion";
import bg2 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/bgech1.png";
import person from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Personb.svg"
import inst from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/inst3.svg"
import email from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Emailb.svg"
import email1 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/mailcd.svg"
import phone from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Phone enabledb.svg"
import phone1 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/phonecd.svg"
import location from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/locationcd.svg"
import tech from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Tech icon12.svg"
import rocketMan from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/RocketMan.svg"
import Header from "./Homepage1/Header1.jsx";
export default function ContactUs(){
    const navigate = useNavigate();

    const homepageClick = () => {
      navigate('/');
    }


    return(
        <>
        <div className="ContactUsPage">
        <Header />
        <img src={bg2} className="background-icon1"/>
            <div className="contact-us-header">
                <div className="left-contact-us-header">
                <div className="top-left-contact-us-header">
                    </div>
                <div className="bottom-left-contact-us-header">
                <motion.h1 className="contact-us-header-text"initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}>contact Us.</motion.h1>
                </div>
                </div>
                <div className="right-contact-us-header"> 
                <img src={inst} className="contact-us-icon"/>
                </div>
            </div>
            <div className='contact-us-main-section'>
                <div className='left-contact-us-main-section'>
                </div>
                <div className='mid-contact-us-main-section'>
                    <div className='left-mid-contact-us'>
                    <div className='mid-hdrcu'>Leave us a message!.</div>
                    <div className="input-field-1cu">
                            <p className="TopPlaceHolder">Name*</p>
                            <input type="text"/>
                            <img src={person} alt="person-icon" className="text-img"/>
                        </div>

                        <div className="input-field-2cu"> 
                            <p className="TopPlaceHolder">Email*</p>
                            <input type="text"/>
                            <img src={email} alt="person-icon" className="text-img"/>
                        </div>
                           
                        <div className="input-field-3cu">
                            <p className="TopPlaceHolder"><strong>Phone Number*</strong></p>
                            <input type="text"/>
                            <img src={phone} alt="person-icon" className="text-img"/>
                        </div>

                        <div className="input-field-4cu">
                            <p className="TopPlaceHolder">Message*</p>
                            <input type="text"/>
                        </div>
                    </div>
                    <div className='right-mid-contact-us'>
                    <div className='mid-hdrcu'>contact details.</div>
                    <div className="input-field-1cu2">
                        
                            <img src={email1} alt="person-icon" className="text-img1"/>
                            <p className='cdtext'>cst2102095@xmu.edu.my</p>
                        </div>

                        <div className="input-field-2cu2"> 

                            <img src={phone1} alt="person-icon" className="text-img1"/>
                            <p className='cdtext'>+601114421148</p>
                        </div>
                           
                        <div className="input-field-3cu2">

                            <img src={location} alt="person-icon" className="text-img1"/>
                            <p className='cdtext'>Xiamen University Malaysia, Jalan <br/>Sunsuria, Bandar Sunsuria, 43900 Sepang,<br/> Selangor, D2</p>
                        </div>

      
                    </div>
                </div>
                <div className='right-contact-us-main-section'></div>
            </div>












        </div>
        </>
    )

}