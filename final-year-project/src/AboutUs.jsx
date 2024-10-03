import { useNavigate } from 'react-router-dom';
import back from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/backab.svg"
import {motion} from "framer-motion";
import ai from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/atom1.svg";
import bg2 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/bg4.png";
import Homepage3 from "./Homepage3.jsx";

export default function AboutUs(){
    const navigate = useNavigate();
    const homepageClick = () => {
        navigate('/');
    }

    return(
        <>
        <div className="AboutUsPage">
        <img src={bg2} className="background-icon2"/>
            <div className="about-us-header">
                <div className="left-about-us-header">
                    <div className="top-left-about-us-header">
                    <img src={back} alt="back-icon" className="about-us-to-homepage-icon" onClick={homepageClick}/>
                    </div>
                    <div className="bottom-left-about-us-header">
                        <motion.h1 className="about-us-header-text" initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}>about<br/>Us.</motion.h1>
                    </div>
                </div>
                <div className="right-about-us-header">
                <img src={ai} className="headerab-img"/>
                </div>
            </div>
            <div className='about-us-main-section'>
                <div className='about-us-left-main-section'></div>
                <div className='about-us-mid-main-section'>
                    <p className='about-us-text'>Career Compass is a newly launched website founded
                    <br/>by Michelo Jeff Mufugi. The website is dedicated to 
                    <br/>providing individuals seeking to pursue careers 
                    <br/>in STEM fields with comprehensive information 
                    <br/>at their fingertips. Our mission is to assist individuals 
                    <br/>in making informed career choices early in their lives, 
                    <br/>thereby enabling them to avoid career transitions 
                    <br/>due to a lack of knowledge and ultimately leading 
                    <br/> to a fulfilling and productive life that benefits their 
                    <br/>future endeavors.
</p>
                </div>
                <div className='about-us-right-main-section'></div>
            </div>
        </div>
        <Homepage3 />
        </>
    )
}