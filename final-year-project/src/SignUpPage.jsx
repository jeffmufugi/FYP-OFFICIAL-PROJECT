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
import rec from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/rec1.png";
import Header from "./Homepage1/Header1.jsx";
import axios from 'axios';
import React, { useState } from 'react';

export default function SignUpPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneNo: '',
        region: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/signup', {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                phoneNo: formData.phoneNo,
                region: formData.region,
                password: formData.password
            });
            console.log(response.data);
            alert('Registration successful!');
            navigate('/');
        } catch (error) {
            console.error('Registration error:', error.response?.data?.message || error.message);
            alert('Registration failed. Please try again.');
        }
    };

    const homepageClick = () => {
        navigate('/');
    };

    const signInClick = () => {
        navigate('/signin');
    };
    return (
        <div className="sign-up-page">
            <img src={rec} className="background-top-light" alt="Background" />
            <Header />
            <div className="sign-up-header">
                <div className="left-sign-up-header">
                    <div className="top-left-sign-up-header"></div>
                    <div className="bottom-left-sign-up-header">
                        <motion.h1 className="sign-up-header-text"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}>
                            create your <br/>account .
                        </motion.h1>
                    </div>
                </div>
                <div className="right-sign-up-header">
                    <img src={rocketMan} alt="page-icon" className="sign-up-page-icon"/>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="main-sign-up-form">
                <div className="left-main-sign-up-form"></div>
                <motion.div className="mid-main-sign-up-form" 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}>
                    <div className="left-mid-main-sign-up-form">
                        <div className="input-field-1">
                            <p className="TopPlaceHolder">First Name*</p>
                            <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />
                            <img src={person} alt="person-icon" className="text-img"/>
                        </div>
                        <div className="input-field-2">
                            <p className="TopPlaceHolder">Email*</p>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                            <img src={email} alt="email-icon" className="text-img"/>
                        </div>
                        <div className="input-field-3">
                            <p className="TopPlaceHolder">Phone Number*</p>
                            <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
                            <img src={phone} alt="phone-icon" className="text-img"/>
                        </div>
                        <div className="input-field-4">
                            <p className="TopPlaceHolder">Confirm Password*</p>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                            <img src={lock} alt="lock-icon" className="text-img"/>
                        </div>
                    </div>
                    <div className="right-mid-main-sign-up-form">
                        <div className="input-field-5">
                            <p className="TopPlaceHolder">Last Name*</p>
                            <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
                            <img src={person} alt="person-icon" className="text-img"/>
                        </div>
                        <div className="input-field-6">
                            <p className="TopPlaceHolder">Region*</p>
                            <input type="text" name="region" value={formData.region} onChange={handleChange} required />
                            <img src={location} alt="location-icon" className="text-img"/>
                        </div>
                        <div className="input-field-7">
                            <p className="TopPlaceHolder">Password*</p>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                            <img src={lock} alt="lock-icon" className="text-img"/>
                        </div>
                        <div className="input-field-x">
                            <button type="submit" className="register-btn-sp">Register</button>
                        </div>
                    </div>
                </motion.div>
                <div className="right-main-sign-up-form"></div>
            </form>
            <p className="sign-in-link-sip">Already Have an account? <a href="#" onClick={signInClick}>Sign in</a></p>
        </div>
    );
}
