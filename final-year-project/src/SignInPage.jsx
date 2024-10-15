import {motion} from "framer-motion";
import back from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/back-arrow2.svg"
import { useNavigate } from 'react-router-dom';
import bg2 from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/bgech1.png";
import lock from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Lock2.svg"
import email from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/Email2.svg"
import rocketL from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/RocketL.svg"
import rec from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/rec3.png";
import Header from "./Homepage1/Header1.jsx";
import axios from 'axios';
import React, { useState } from 'react';

export default function SignInPage(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/signin', {
                email: formData.email,
                password: formData.password
            });
            console.log(response.data);
            alert('Sign in successful!');
            navigate('/');
        } catch (error) {
            console.error('Sign in error:', error.response?.data?.message || error.message);
            alert('Sign in failed. Please try again.');
        }
    };


    const homepageClick = () => {
      navigate('/');
    }
    const signUpClick = () => {
        navigate('/signup');
      }
    




    return(
        <>
        <div className="sign-in-page">
        <img src={rec} className="background-top-light"/>
        <Header />
        {/* <img src={bg2} className="background-icon1"/> */}
            <div className="sign-in-header">
                <div className="left-sign-in-header">
                <div className="top-left-sign-in-header">
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
            <form onSubmit={handleSubmit}  className="main-sign-in-fields">
                <div className="left-sign-in-blank"></div>
                <div className="mid-main-sign-in-field">
                  
                   
                       <div className="input-field-1s">  
                            <p className="TopPlaceHolder">Email*</p>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} required/>
                            <img src={email} alt="person-icon" className="text-img"/>
                        </div>
                 
                   
                    <div className="input-field-2s">
                            <p className="TopPlaceHolder">Password*</p>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                            <img src={lock} alt="person-icon" className="text-img"/>
                    </div>

                    <button className="sign-in-button" type="submit">
                        Sign In
                    </button>

                    <p className="reg-link-sip">Not a member yet?{" "}<a href="#" onClick={signUpClick}>Register</a></p>

            


                </div>
                <div className="right-sign-in-blank"></div>
            </form>
            





        </div>

        

        </>
        )
        
    }