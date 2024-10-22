import Header1 from "../Homepage1/Header2.jsx";
import fadebg from "../site_icons/rectora.png";
import img1 from "../site_icons/Paidj.svg";
import img2 from "../site_icons/Coj.svg";
import img3 from "../site_icons/exj.svg";
import h1 from "../site_icons/doctj.svg";
import h2 from "../site_icons/doctj2.svg";
import h3 from "../site_icons/doctj3.svg";
import h4 from "../site_icons/tj1.svg";
import h5 from "../site_icons/tj2.svg";
import h6 from "../site_icons/tj3.svg";
import dd from "../site_icons/dropdown.svg";
import mm from "../site_icons/mm.svg";
import ds from "../site_icons/ds.svg";
import tm from "../site_icons/tmj.svg";
import dsp from "../site_icons/dsp.svg";
import dst from "../site_icons/dst.svg";
import {motion} from "framer-motion";
import { useState } from "react";
import {fadeInFromLeft,fadeInFromLeft2,fadeInFromLeft3,countries,topcourses,topspecializations,
  trend,skills,challengesArray,issuesArray,coreAreasOfStudy,jobGrowthFields,experienceSalary,
  homepageInfo,prerequisites} from './aeroextdata.jsx';

const AerospaceEngineeringCourse = () => {

  const [hoveredCourse, setHoveredCourse] = useState(null);
  const handleMouseEnter = (index) => {
    console.log('Mouse entered:', index);
    setHoveredCourse(index);
  };

  const handleMouseLeave = () => {
    console.log('Mouse left');
    setHoveredCourse(null);
  };


  const [hoveredText, setHoveredText] = useState(null);
  const handleMouseEnt = (index) => {
    console.log('Mouse entered:', index);
    setHoveredText(index);
  };

  const handleMouseLeav = () => {
    console.log('Mouse left');
    setHoveredText(null);
  };


  
  return (
    <>
    <div className="cs-course-page">
      <img src={fadebg} className="course-fadebg"/>
      <Header1 />
      <div className="course-mainbody">
          <div className="left-course-main"></div>
          <div className="mid-course-main">
          <div className="course-title">
            {/*-----------------------FIRST HOMEPAGE1 COURSE NAME---------------------------  */}
          <motion.h1 className="cs-text" {...fadeInFromLeft.left1}>{homepageInfo[0].courseName}</motion.h1></div>

           {/*-----------------------FIRST HOMEPAGE1 COURSE NAME, COURSE DEFINITION---------------------------  */}
          <div className="course-definition">
              <motion.p className="course-description" {...fadeInFromLeft.left2}>{homepageInfo[0].courseDefinition}</motion.p>
          </div>
            {/*-----------------------FIRST HOMEPAGE1 COURSE NAME, COUNTRY SECTION---------------------------  */}
          <div className="course-country">
          <motion.p {...fadeInFromLeft.left3}>
              <select name="region" placeholder="hi" className="custom-select">  
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </motion.p>
          </div>
          <div className="course-stats-title">
              <motion.p className="course-stats-text" style={{ color: homepageInfo[1].fontColor }}{...fadeInFromLeft.left4}>live stats.</motion.p>
          </div>
           {/*-----------------------FIRST HOMEPAGE1 COURSE NAME, BOTTOM SECTION---------------------------  */}
          <motion.div className="course-stats-info" {...fadeInFromLeft.left5}>
              <div className="course-details-info">
                <img src={img1} alt="" />
                <p className="numbers-course-info">{homepageInfo[0].undergradsal}</p>
                <p className="img-course-description">fresh undergraduate base salary</p>
            </div>
            <div className="course-details-info">
            <img src={img2} alt=""/>
              <p className="numbers-course-info">{homepageInfo[0].jobavail}</p>
              <p className="img-course-description">job availability</p>
            </div>
            <div className="course-details-info">
              <img src={img3} alt=""/>
              <p className="numbers-course-info">{homepageInfo[0].emprate}</p>
              <p className="img-course-description">employment rate</p>
            </div>
          </motion.div>
          </div>
          <div className="right-course-main"></div>
        </div>
    </div>
      {/*-----------------------SECOND HOMEPAGE2 COURSE NAME, BOTTOM SECTION---------------------------  */}
    <section name="second-course-section">
      <div className="cs-course-page2">
        <div className="page2-main-content">
          <div className="left-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor1}}> 
            <div className="ab1">
              <motion.img className="course-p2-img" src={h1} alt="" {...fadeInFromLeft2.left1}/>
            </div>
            {/*--------------------- HOMEPAGE2 section 1--------------------- H*/}
            <div className="ab2">
              <motion.p className="course-page-desc" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft2.left2}>DESCRIPTION</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p className="course-bar" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft2.left3}>____________________</motion.p>
             </div>
            <div className="ab4">
              <motion.p className="main-text-course" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft2.left4}>{homepageInfo[1].description}</motion.p>
            </div>
          </div>
          <div className="mid-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor2}}>
          <div className="ab1">
              <motion.img className="course-p2-img" src={h2} alt="" {...fadeInFromLeft3.left1}/>
            </div>
            <div className="ab2">
              {/*--------------------- HOMEPAGE2 section 2--------------------- H*/}
            <motion.p className="course-page-desc" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left2}>CORE AREAS OF STUDY</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p className="course-bar" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left3}>____________________</motion.p>
             </div>
            <div className="ab4">
            <motion.p className="main-text-course" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left4}>
              {coreAreasOfStudy.map((index)=>(
                <li>{index}<br/><br/></li>
              ))}
              </motion.p>
            </div>
          </div>
          <div className="right-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor3}}>
          <div className="ab1">
              <motion.img className="course-p2-img" src={h3} alt="" {...fadeInFromLeft3.left1}/>
            </div>
             {/*--------------------- HOMEPAGE2 section 3--------------------- H*/}
            <div className="ab2">
            <motion.p className="course-page-desc" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left2}>PRE-REQUISITES</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p className="course-bar" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left3}>____________________</motion.p>
             </div>
            <div className="ab4" > 
            <motion.p className="main-text-course" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left4}>{prerequisites.map((index)=>(
              <li>{index}<br/><br/></li>
            ))}</motion.p>
            </div>
          </div>



        </div>
      </div>

    </section>

 {/*---------------------HOMEPAGE3 section 1--------------------- H*/}
    <section>
      <div className="cs-course-page3">

        <div className="salary-course-left" style={{backgroundColor :homepageInfo[1].backgroundColor2}}>
        <div className="ab1">
              <motion.img className="course-p2-img" src={mm} alt="" {...fadeInFromLeft2.left1}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc1" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left2}>HIGHEST PAYING FIELDS IN THE SECTOR</motion.p>
            </div>

            <div className="ab3"> 
            <motion.p className="course-bar" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft2.left3}>____________________</motion.p>
             </div>

          <div className="ab4x">
          <motion.ul 
                className="main-text-coursex" 
                {...fadeInFromLeft3.left2}
                
                
            >

                    {topcourses.map((course,index) => (
                      <li className="course-name-desc"
                      style={{ color: homepageInfo[1].fontColor }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}>
                        {course.name}
                        {hoveredCourse === index && (
                          <motion.div className="course-desc-hov" style={{ 
                            backgroundColor: homepageInfo[1].popupcolor1, 
                            color: homepageInfo[1].popupcolor2, 
                            boxShadow: `0px -30px 20px -10px ${homepageInfo[1].popupcolor2}, 
                                        20px 0px 20px -10px ${homepageInfo[1].popupcolor2},  
                                        -20px 0px 20px -10px ${homepageInfo[1].popupcolor2}` 
                        }}{...fadeInFromLeft3.left7}>
                          {course.description}
                        </motion.div>
            )}
                        </li>
                    ))}



            </motion.ul>


            <motion.ul 
                className="main-text-coursey" 
                {...fadeInFromLeft3.left6}
              >
                {topcourses.map((course)=>( 
                    <li>{course.salaryRange}</li>
                    ))}
              </motion.ul>

            </div>
        

      
 {/*---------------------HOMEPAGE3 section 2--------------------- H*/}
        </div>
        <div className="salary-course-right">
          <div className="top-salary-course-right" style={{backgroundColor :homepageInfo[1].backgroundColor3}}>
          <div className="ab1x">
              <motion.img className="course-p2-img" src={ds} alt="" {...fadeInFromLeft2.left1}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc1" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left2}>10-YEAR AVERAGE SALARY PROJECTION BY EXPERIENCE LEVEL</motion.p>
            </div>

            <div className="ab3"> 
            <motion.p className="course-bar" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft2.left3}>____________________</motion.p>
             </div>

          <div className="ab4x">
          <motion.ul 
                className="main-text-coursex" 
                {...fadeInFromLeft3.left6}
            >
                {experienceSalary.map((index)=>(
                  <li style={{ color: homepageInfo[1].fontColor }}>{index.experience}</li>
                ))}

            </motion.ul>
            <motion.ul 
                className="main-text-coursey" 
                {...fadeInFromLeft3.left6}
              >
                {experienceSalary.map((index)=>(
                  <li>{index.salaryRange}</li>
                ))}
              </motion.ul>

            </div>
        
         
 {/*---------------------HOMEPAGE3 section 3--------------------- H*/}                  
          </div>
          <div className="bottom-salary-course-right" style={{backgroundColor :homepageInfo[1].backgroundColor1}}>
          <div className="ab1x">
              <motion.img className="course-p2-img" src={tm} alt="" {...fadeInFromLeft2.left1}/>
            </div>
            <div className="ab2x">
            <motion.p style={{ color: homepageInfo[1].fontColor }} className="course-page-desc2" {...fadeInFromLeft3.left2}>AVERAGE JOB GROWTH RATE</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p style={{ color: homepageInfo[1].fontColor }} className="course-bar" {...fadeInFromLeft2.left3}>____________________</motion.p>
             </div>

            <div className="ab3x"> 
            <motion.ul className="course-barx" {...fadeInFromLeft2.left4}>
                          <li>__________</li>
                          {jobGrowthFields.map((index)=>(
                          <li  style={{ backgroundColor: homepageInfo[1].fontColor }}>{index}</li>
                           )
                            )}

                        </motion.ul>
             </div>

          <div className="ab4xx">
          <motion.ul 
                className="main-text-coursexy" 
                {...fadeInFromLeft2.left4}
            >
                <ul className="yrs-rate2" style={{ color: homepageInfo[1].fontColor }}>
                <li>2022</li>
                <li>2023</li>
                <li>2024</li>
                <li>2025</li>
                <li>2026</li>
              </ul>

            </motion.ul>
            <motion.ul 
                className="main-text-coursexy" 
                {...fadeInFromLeft2.left4}
            >
                <ul className="yrs-rate">
                <li>15%</li>
                <li>20%</li>
                <li>40%</li>
                <li>12%</li>
                <li>3.2%</li>
              </ul>

            </motion.ul>
            <motion.ul 
                className="main-text-coursexy" 
                {...fadeInFromLeft2.left4}
            >
                <ul className="yrs-rate">
                <li>15%</li>
                <li>20%</li>
                <li>40%</li>
                <li>12%</li>
                <li>3.2%</li>
              </ul>

            </motion.ul>
            <motion.ul 
                className="main-text-coursexy" 
                {...fadeInFromLeft2.left4}
            >
                <ul className="yrs-rate">
                <li>15%</li>
                <li>20%</li>
                <li>40%</li>
                <li>12%</li>
                <li>3.2%</li>
              </ul>

            </motion.ul>
            <motion.ul 
                className="main-text-coursexy" 
                {...fadeInFromLeft2.left4}
            >
                <ul className="yrs-rate">
                <li>15%</li>
                <li>20%</li>
                <li>40%</li>
                <li>12%</li>
                <li>3.2%</li>
              </ul>

            </motion.ul>
            <motion.ul 
                className="main-text-coursexy" 
                {...fadeInFromLeft2.left4}
            >
                <ul className="yrs-rate">
                <li>15%</li>
                <li>20%</li>
                <li>40%</li>
                <li>12%</li>
                <li>3.2%</li>
              </ul>

            </motion.ul>

            </div>
            
          </div>

        </div>






     </div>
    </section>

 {/*--------------------- FOURTH HOMEPAGE4 section 1--------------------- H*/}
    <section name="second-course-section">
      <div className="cs-course-page2">
        <div className="page2-main-content">
          <div className="left-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor1}}>
            <div className="ab1">
              <img className="course-p2-img" src={h4} alt="" />
            </div>
            <div className="ab2">
              <p style={{ color: homepageInfo[1].fontColor }} className="course-page-desc">EMERGING TRENDS</p>
            </div>
            <div className="ab3"> 
            <p style={{ color: homepageInfo[1].fontColor }} className="course-bar">____________________</p>
             </div>
            <div className="ab4">
              <ul className="main-text-course">
                {
                trend.map((trend)=>(
                  <li style={{ color: homepageInfo[1].fontColor }}>{trend}<br/><br/></li>
                ))
                
                }
              </ul>
            </div>
          </div>
          <div className="mid-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor2}}>
          <div className="ab1">
              <img src={h5} className="course-p2-img" alt="" />
            </div>
            <div className="ab2">
              <p style={{ color: homepageInfo[1].fontColor }} className="course-page-desc">TOP SPECIALIZATIONS</p>
            </div>
            <div className="ab3"> 
            <p style={{ color: homepageInfo[1].fontColor }} className="course-bar">____________________</p>
             </div>
            <div className="ab4">
              <ul className="main-text-course">
                      {
                        topspecializations.map((course)=>(
                          <li style={{ color: homepageInfo[1].fontColor }}>{course}<br/><br/></li>
                        ))
                      }
                      </ul>

                      
            </div>
          </div>
          <div className="right-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor3}}>
          <div className="ab1">
              <img src={h6} className="course-p2-img" alt="" />
            </div>
            <div className="ab2">
              <p style={{ color: homepageInfo[1].fontColor }} className="course-page-desc">SKILLS TO BE ACQUIRED</p>
            </div>
            <div className="ab3"> 
            <p style={{ color: homepageInfo[1].fontColor }} className="course-bar">____________________</p>
             </div>
            <div className="ab4">
              <ul className="main-text-course" style={{ color: homepageInfo[1].fontColor }}>
                        {
                          skills.map((skills)=>(
                            <li>{skills}<br/><br/></li>
                          ))
                        }
              </ul>
            </div>
          </div>



        </div>
      </div>

    </section>

<section>
      <div className="cs-course-page3">

        <div className="salary-course-left" style={{backgroundColor :homepageInfo[1].backgroundColor2}}>
        <div className="ab1">
              <motion.img className="course-p2-img" src={dsp} alt="" {...fadeInFromLeft2.left1}/>
            </div>
            <div className="ab2">
            <motion.p style={{ color: homepageInfo[1].fontColor }} className="course-page-desc1" {...fadeInFromLeft3.left2}>{challengesArray[0]}</motion.p>
            </div>

            <div className="ab3"> 
            <motion.p  style={{ color: homepageInfo[1].fontColor }} className="course-bar" {...fadeInFromLeft2.left4}>____________________</motion.p>
             </div>

          <div className="ab4x">
          <motion.ul 
                className="main-text-coursex" 
                {...fadeInFromLeft3.left6}
                style={{ color: homepageInfo[1].fontColor }}>
                    {challengesArray.map((title,index) => (
                      <li className="course-name-desc1"
                    
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}>
                        {title.heading}
                        {hoveredCourse === index && (
                        <motion.div className="course-desc-hov1"  style={{ 
                          backgroundColor: homepageInfo[1].popupcolor1, 
                          color: homepageInfo[1].popupcolor2, 
                          boxShadow: `0px -30px 20px -10px ${homepageInfo[1].popupcolor2}, 
                                      20px 0px 20px -10px ${homepageInfo[1].popupcolor2},  
                                      -20px 0px 20px -10px ${homepageInfo[1].popupcolor2}` 
                      }}
                        {...fadeInFromLeft3.left7}>
                          {title.description}
  </motion.div>
)}</li>))}</motion.ul> </div></div>


        <div className="salary-course-right" >
          <div className="top-salary-course-right" style={{backgroundColor :homepageInfo[1].backgroundColor3}}>
          <div className="ab1x">
              <motion.img className="course-p2-img" src={dst} alt="" {...fadeInFromLeft2.left1}/>
            </div>
            <div className="ab2">
            <motion.p style={{ color: homepageInfo[1].fontColor }} className="course-page-desc1" {...fadeInFromLeft3.left2}>{issuesArray[0]}</motion.p>
            </div>

            <div className="ab3"> 
            <motion.p style={{ color: homepageInfo[1].fontColor }} className="course-bar" {...fadeInFromLeft2.left3}>____________________</motion.p>
             </div>

          <div className="ab4x">
          
          <motion.ul 
                className="main-text-coursex" 
                {...fadeInFromLeft3.left6}
                style={{ color: homepageInfo[1].fontColor }}>{issuesArray.map((title,index) => (
                      <li className="course-name-desc1" onMouseEnter={() => handleMouseEnt(index)}
                      onMouseLeave={handleMouseLeav}>
                      {title.heading}
                      {hoveredText === index && (
                      <motion.div className="course-desc-hov1"style={{ 
                        backgroundColor: homepageInfo[1].popupcolor1, 
                        color: homepageInfo[1].popupcolor2, 
                        boxShadow: `0px -30px 20px -10px ${homepageInfo[1].popupcolor2}, 
                                    20px 0px 20px -10px ${homepageInfo[1].popupcolor2},  
                                    -20px 0px 20px -10px ${homepageInfo[1].popupcolor2}` 
                    }} 

                      
                      {...fadeInFromLeft3.left7}>
                      {title.description}
  </motion.div>)}</li>))} </motion.ul></div></div> </div>
 </div>
    </section>
    </>
  );
};
export default AerospaceEngineeringCourse;




