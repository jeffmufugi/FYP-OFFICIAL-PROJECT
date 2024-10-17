import { useNavigate } from 'react-router-dom';
import back from "./site_icons/backab.svg";
import { motion } from "framer-motion";
import ai from "./site_icons/atom1.svg";
import bg2 from "./site_icons/bg4.png";
import Homepage3 from "./Homepage3.jsx";
import Header from "./Homepage1/Header1.jsx";
import rec from "./site_icons/rec3.png";

export default function AboutUs(){
    const navigate = useNavigate();
    const homepageClick = () => {
        navigate('/');
    }

    return(
        <>
        <div className="AboutUsPage">
        <img src={rec} className="background-top-light"/>
        <Header />
        <img src={bg2} className="background-icon2"/>
            <div className="about-us-header">
               
                    
                    <motion.h1 className="about-us-header-text" initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}>about Us.</motion.h1>
                    
            
                
            </div>
            <div className='about-us-main-section'>
                <div className='about-us-left-main-section'></div>
                <div className='about-us-mid-main-section'>
                <p className='about-us-text'>Career Compass is a newly launched website founded
                    by Michelo Jeff Mufugi. The website is dedicated to 
                    providing individuals seeking to pursue careers 
                    in STEM fields with comprehensive information 
                    at their fingertips. Our mission is to assist individuals 
                    in making informed career choices early in their lives, 
                    thereby enabling them to avoid career transitions 
                    due to a lack of knowledge and ultimately leading 
                     to a fulfilling and productive life that benefits their 
                    future endeavors.
</p>
                </div>
                <div className='about-us-right-main-section'></div>
            </div>
        </div>

        </>
    )
}