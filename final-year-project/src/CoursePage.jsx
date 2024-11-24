
import { useNavigate } from 'react-router-dom';
import Header from "./Homepage1/Header1.jsx";
import back from "../src/site_icons/backab.svg";
import ai from "../src/site_icons/atom1.svg";
import cst from "../src/site_icons/cst.png";
import cst2 from "../src/site_icons/cst2.svg";
import mec from "../src/site_icons/mec.svg";
import chem from "../src/site_icons/chem.svg";
import phy from "../src/site_icons/phy1.png";
import ast from "../src/site_icons/ast.svg";
import bio from "../src/site_icons/bio.svg";
import mat from "../src/site_icons/mat.svg";
import rob from "../src/site_icons/rob.svg";
import civ from "../src/site_icons/civ.svg";
import nuc from "../src/site_icons/nuc.svg";
import geo from "../src/site_icons/geo.svg";
import dat from "../src/site_icons/dat.svg";
import air from "../src/site_icons/air.svg";
import cyb from "../src/site_icons/cyb.svg";
import mar from "../src/site_icons/mar.svg";
import rec from "../src/site_icons/rec3.png";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';





export default function CoursePage(){

  const [courseView,SetCourseView]=useState(false)
  function changeview(){
    SetCourseView(!courseView);
  }

    const navigate = useNavigate();
    const csCourseClick = () => {
      navigate('/cscoursepage');
    }
    const chemCourseClick = () => {
        navigate('/chemcoursepage');
      }
      const mechCourseClick = () => {
        navigate('/mechcoursepage');
      }
      const phyCourseClick = () => {
        navigate('/phycoursepage');
      }
      const mathCourseClick = () => {
        navigate('/mathcoursepage');
      }

      const aeroCourseClick = () => {
        navigate('/aerocoursepage');
      }
      const bioCourseClick = () => {
        navigate('/biocoursepage');
      }

      const civCourseClick = () => {
        navigate('/civcoursepage');
      }
      const nucCourseClick = () => {
        navigate('/nuccoursepage');
      }
      const marCourseClick = () => {
        navigate('/marcoursepage');
      }

      const datCourseClick = () => {
        navigate('/datcoursepage');
      }
      const robCourseClick = () => {
        navigate('/robcoursepage');
      }
      const cybCourseClick = () => {
        navigate('/cybcoursepage');
      }

      const ceCourseClick = () => {
        navigate('/cecoursepage');
      }


    

    let courses = [
        {courseName: "Computer Science", 
        imgName: cst,
        upColor: "#B0E4F6",
        downColor: "#52A1AD",
        fontcolor: "white",
        route: csCourseClick,
        id: 1},

        {courseName: "Chemical Engineering", 
        imgName: chem,
        upColor: "#FB9E9E",
        downColor: "#E48686",
        fontcolor: "white",
        route: chemCourseClick,
        id: 3},

        {courseName: "Physics", 
        imgName: phy,
        upColor: "#D29EFB",
        downColor: "#9A86E4",
        fontcolor: "white",
        route: phyCourseClick,
        id: 4},

        {courseName: "Mathematics", 
        imgName: mat,
        upColor: "#9EE8FB",
        downColor: "#81CBDC",
        fontcolor: "white",
        route: mathCourseClick,
        id: 3},

        {courseName: "Aerospace Engineering", 
        imgName: air,
        upColor: "#FBD9BC",
        downColor: "#EEAC89",
        fontcolor: "white",
        route: aeroCourseClick,
        id: 4},


        {courseName: "Biomedical Engineering", 
        imgName: bio,
        upColor: "#A87FC7",
        downColor: "#865075",
        fontcolor: "white",
        route: bioCourseClick,
        id: 2},

        {courseName: "Civil Engineering", 
        imgName: civ,
        upColor: "#FFB9B9",
        downColor: "#9E6162",
        route: civCourseClick,

        fontcolor: "white",
        id: 5},

        {courseName: "Nuclear Engineering", 
        imgName: nuc,
        upColor: "#93C0FF",
        downColor: "#5771CD",
        fontcolor: "white",
        route: nucCourseClick,
        id: 1},

        {courseName: "Marine Biology", 
        imgName: mar,
        upColor: "#C1EEFC",
        downColor: "#DAF8FF",
        fontcolor: "#19455F",
        route: marCourseClick,
        id: 1},
        
        {courseName: "Data Science", 
        imgName: dat,
        upColor: "#DBDBDB",
        downColor: "#ABABAB",
        fontcolor: "white",
        route: datCourseClick,
        id: 2},

        {courseName: "Robotics", 
        imgName: rob,
        upColor: "#BAB9FF",
        downColor: "#3D2F44",
        fontcolor: "white",
        route: robCourseClick,
        id: 4},

        {courseName: "Cybersecurity", 
        imgName: cyb,
        upColor: "#A69EFB",
        downColor: "black",
        fontcolor: "white",
        route: cybCourseClick,
        id: 3},

        {courseName: "Mechanical Engineering", 
        imgName: mec,
        upColor: "#92FFC9",
        downColor: "black",
        fontcolor: "white",
        route: mechCourseClick,
        id: 2},

        {courseName: "Computer Engineering", 
        imgName: cst2,
        upColor: "#7BB4FB",
        downColor: "black",
        fontcolor: "white",
        route: ceCourseClick,
        id: 2},

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
                         {/* <p className="hdr-course-txt2">explore opportunities</p> */}
                            {courseView === true && <button className="btn-course-view" onClick={changeview}>click for list view of courses</button>}
                            {courseView === false && <button className="btn-course-view" onClick={changeview}>click for card view of courses</button>}
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
                       
                        {courseView === false && courses.map((course)=>( 
                            
                         <motion.div className="course-program-card2"         
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1}}
                         exit={{ opacity: 0}}
                         transition={{ duration: 0.3 }}>
                            <div className="course-card2">
                          
                            <div className="computer-science-ftr2" style={{backgroundColor : "#4C4A59"}} onClick={course.route}>
                                <p className="txt-121" style={{color : "white"}}>{course.courseName}</p>
                            </div>
                        </div>
                    </motion.div>
                        ))
                        }
                   
                  
                        {courseView === true && courses.map((course)=>( 
                            
                            <motion.div className="course-program-card"         
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1}}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}> 
                               <div className="course-card" key={course.id} style={{backgroundColor : "#E0E0E0"}} onClick={course.route} >
                               <img src={course.imgName} className="imgcst"/>
                               <div className="computer-science-ftr" style={{backgroundColor : "#4C4A59"}}>
                                   <p className="txt-121" style={{color : "white"}}>{course.courseName}</p>
                               </div>
                           </div>
                       </motion.div>
                           ))
                           }
                      

                    </motion.div>
                  
                        
                    
                </div>
                <div className="right-main-cs"></div>
            </div>
                
        </div>
        </>
    )
}