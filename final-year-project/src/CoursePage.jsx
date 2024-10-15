
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion";
import Header from "./Homepage1/Header1.jsx";
import back from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/backab.svg"
import ai from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/atom1.svg";
import cst from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/cst.svg";
import mec from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/mec.svg";
import chem from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/chem.svg";
import phy from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/phy.svg";
import ast from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/ast.svg";
import bio from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/bio.svg";
import mat from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/mat.svg";
import rob from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/rob.svg";
import civ from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/civ.svg";
import nuc from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/nuc.svg";
import geo from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/geo.svg";
import dat from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/dat.svg";
import air from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/air.svg";
import cyb from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/cyb.svg";
import mar from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/mar.svg";
import rec from "/Users/mvsterjeffrey/Desktop/FYP-OFFICIAL-PROJECT/final-year-project/src/site_icons/rec3.png";

export default function CoursePage(){



    let courses = [
        {courseName: "Computer Science", 
        imgName: cst,
        upColor: "#F0F6B0",
        downColor: "#52A1AD",
        fontcolor: "white",
        id: 1},
        
        {courseName: "Mechanical Engineering", 
        imgName: mec,
        upColor: "#33C9E3",
        downColor: "#92FFC9",
        fontcolor: "black",
        id: 2},

        {courseName: "Chemical Engineering", 
        imgName: chem,
        upColor: "#FB9EDD",
        downColor: "#CD86E4",
        fontcolor: "white",
        id: 3},

        {courseName: "Physics", 
        imgName: phy,
        upColor: "#FB7B94",
        downColor: "#FFFD92",
        fontcolor: "#E62F2F",
        id: 4},

        {courseName: "Astronomy", 
        imgName: ast,
        upColor: "#FFA0A0",
        downColor: "#CDFFE6",
        fontcolor: "#B11212",
        id: 5},

        {courseName: "Biomedical Engineering", 
        imgName: bio,
        upColor: "#B0F6F5",
        downColor: "#8DAD52",
        fontcolor: "white",
        id: 2},

        {courseName: "Mathematics", 
        imgName: mat,
        upColor: "#BEFB9E",
        downColor: "#D3D84D",
        fontcolor: "black",
        id: 3},

        {courseName: "Robotics", 
        imgName: rob,
        upColor: "#BAB9FF",
        downColor: "#3D2F44",
        fontcolor: "white",
        id: 4},

        {courseName: "Civil Engineering", 
        imgName: civ,
        upColor: "#D3A0AA",
        downColor: "#B392FF",

        fontcolor: "white",
        id: 5},

        {courseName: "Nuclear Engineering", 
        imgName: nuc,
        upColor: "#93FFD2",
        downColor: "#57CD92",
        fontcolor: "white",
        id: 1},

        {courseName: "Marine Biology", 
        imgName: mar,
        upColor: "#FCC1DF",
        downColor: "#696FED",
        fontcolor: "white",
        id: 1},
        
        {courseName: "Data Science", 
        imgName: dat,
        upColor: "#FFE2B1",
        downColor: "#92E4FF",
        fontcolor: "black",
        id: 2},

        {courseName: "Cybersecurity", 
        imgName: cyb,
        upColor: "#A69EFB",
        downColor: "#E48686",
        fontcolor: "white",
        id: 3},

        {courseName: "Aerospace Engineering", 
        imgName: air,
        upColor: "#7BB4FB",
        downColor: "#FFC992",
        fontcolor: "black",
        id: 4},

        {courseName: "Geology and Earth Sciences", 
        imgName: geo,
        upColor: "#DED1E2",
        downColor: "#B2CEC0",
        fontcolor: "black",
        id: 5},

        

     


     

     

        
        ];

    


    return(
        <>
        <div className="coursePage">
        <img src={rec} className="background-top-light"/>
        <Header />
            <div className="course-header">
                <div className="left-course-header">
                </div>
                <div className="mid-course-header">
                </div>
                <div className="right-course-header"></div>
            </div>

            <div className="course-page-headings">
            <div className="left-hd-cs"></div>
                <motion.div className="mid-hd-cs" initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}>
                            <div className="main-course-txt">courses.</div>
                            <p className="hdr-course-txt2">decide your future path today</p>
                            <button className="btn-course-view">click for list view of courses</button>
                </motion.div>
                <div className="right-hd-cs"></div>
            </div>
              

            <div className="main-course-section">
                <div className="left-main-cs"></div>
                <div className="mid-main-cs">
                   <motion.div className="card-row" initial={{ x: 100 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0 }}
                        viewport={{ once: true }}>
                        {courses.map((course)=>( 
                            
                         <div className="course-program-card">
                            <div className="course-card" key={course.id} style={{backgroundColor : course.upColor}}>
                            <img src={course.imgName} className="imgcst"/>
                            <div className="computer-science-ftr" style={{backgroundColor : course.downColor}}>
                                <p className="txt-121" style={{color : course.fontcolor}}>{course.courseName}</p>
                            </div>
                        </div>
                    </div>
                        ))}

                    </motion.div>
                  
                        
                    
                </div>
                <div className="right-main-cs"></div>
            </div>
                
        </div>
        </>
    )
}