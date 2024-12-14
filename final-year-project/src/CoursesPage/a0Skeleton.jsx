import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import {motion} from "framer-motion";
import useMedia from 'use-media';


export function Page1({coursename,coursedesc,inputRef,selectedCountry,toggleDropdown,isOpen,countries,handleSelect,salaryUS,salaryMY,jobsUS,jobsMY,emplUS,emplMY,img1,img2,img3,selectedCurrency,homepageInfo,animat,setanimate,dropdownRef,homepageInfo1,homepageInfo2}){
    
  function HomepageNum(){
      return(
        <>
            <div className="course-details-info a">
                <img src={img1} alt="" />
{            /* 
selected flag must not be equal to current flag
there must be a change


*/}
                {selectedCountry === countries[0].flag &&   <a href="https://www.uwosh.edu/career/wp-content/uploads/sites/38/2024/01/Winter-2024-Salary-Survey-Report.pdf"  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><motion.p className="numbers-course-info" {...animat}><span style={{color:"#C2FFC0"}}>{selectedCurrency}</span>{salaryUS}</motion.p></a>}
                {selectedCountry === countries[1].flag &&   <a href={homepageInfo2[0].ulink}  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><motion.p className="numbers-course-info" {...animat}><span style={{color:"#C2FFC0"}}>{selectedCurrency}</span>{salaryMY}</motion.p></a>}
                {/* {selectedCountry === countries[0].flag && <p className="numbers-course-info">{selectedCurrency}{homepageInfo1[0].undergradsal}</p>}
                {selectedCountry === countries[1].flag && <p className="numbers-course-info">{selectedCurrency}{homepageInfo2[0].undergradsal}</p>} */}
                <p className="img-course-description">fresh undergraduate base salary</p>
            </div>
            <div className="course-details-info b">
                <img src={img2} alt=""/>
                {selectedCountry === countries[0].flag && (
  <a href={homepageInfo1[0].jlink}  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <motion.p className="numbers-course-info" {...animat}>{jobsUS}</motion.p>
  </a>
)}
{selectedCountry === countries[1].flag && (
  <a href={homepageInfo2[0].jlink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    <motion.p className="numbers-course-info" {...animat}>{jobsMY}</motion.p>
  </a>
)}
                
                {/* {selectedCountry === countries[0].flag && <p className="numbers-course-info">{homepageInfo1[0].jobavail}</p>}
                {selectedCountry === countries[1].flag && <p className="numbers-course-info">{homepageInfo2[0].jobavail}</p>} */}
                <p className="img-course-description">job availability</p>
                
            </div>
            <div className="course-details-info c">
                <img src={img3} alt=""/>
                {selectedCountry === countries[0].flag &&  <a href="https://www.bls.gov/emp/tables/stem-employment.htm#BLStable_2024_7_29_10_34"  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><motion.p className="numbers-course-info"{...animat}>10.4%</motion.p></a>}
                {selectedCountry === countries[1].flag &&  <a href={homepageInfo2[0].elink}  target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><motion.p className="numbers-course-info"{...animat}>4.4%</motion.p></a>}
                {/* {selectedCountry === countries[0].flag &&  <p className="numbers-course-info">{homepageInfo1[0].emprate}</p>}
                {selectedCountry === countries[1].flag &&  <p className="numbers-course-info">{homepageInfo2[0].emprate}</p>} */}
                <p className="img-course-description">job growth rate</p>
            </div>
        </>
      );
  }
    return(
      <>
 <div className="course-mainbody">
          <div className="left-course-main"></div>
          <div className="mid-course-main">
          <div className="course-title">
            {/* _______________________________________ TITLE {name={homepageInfo[0].courseName}} _______________________________________*/}
          <motion.h1 className="cs-text" {...fadeInFromLeft.left1}>{coursename}</motion.h1></div>

            {/* _______________________________________ DESCRIPTION {desc={homepageInfo[0].courseDefinition}} _______________________________________*/}
          <div className="course-definition">
              <motion.p className="course-description" {...fadeInFromLeft.left2}>{coursedesc}</motion.p>
          </div>
          <div className="course-country">
        <motion.p {...fadeInFromLeft.left3}>
          {/* Display selected country or placeholder */}
          <div
            className={`custom-select1 ${isOpen ? "open" : ""}`}
            ref={inputRef}
            onClick={toggleDropdown}
            
          >
            <span className="selected-value">
              {selectedCountry || "Select Country"}
            </span>
            {/* Dropdown arrow icon */}
            {isOpen ? (
              <AiOutlineCaretUp className="country-dd-icon" />
            ) : (
              <AiOutlineCaretDown className="country-dd-icon" color={homepageInfo[1].fontColor} />
            )}
          </div>

          {/* Custom dropdown menu */}
          {isOpen && (
            <motion.ul
              className="dropdown-menu"
              initial="closed"
              ref={dropdownRef}
              animate={isOpen ? "open" : "closed"}
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 }
       
              }}
            >
              {countries.map((country, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => {handleSelect(country);setanimate(country);}}
                  
                  
                  
                >
               
                  {country.flag}
                </li>
              ))}
            </motion.ul>
          )}
        </motion.p>
      </div>
          <div className="course-stats-title">
              <motion.p className="course-stats-text" style={{ color: homepageInfo[1].fontColor }}{...fadeInFromLeft.left4}>live stats.</motion.p>
          </div>
          <motion.div className="course-stats-info" {...fadeInFromLeft.left5}>
          <HomepageNum />
          </motion.div>
          </div>
          <div className="right-course-main"></div>
        </div>

      </>
    );
  
}


export function Page2({icon1,icon2,icon3,homepageInfo,coreAreasOfStudy,prerequisites,handleMouseEnt2,handleMouseLeav2,hoveredText2,hoveredText3}){

  return(
    <>
        <div className="page2-main-content">
          <div className="left-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor1}}>
            <div className="ab1">
              <motion.img 
                  className="course-p2-img" 
                  src={icon1} 
                  alt="" {...fadeInFromLeft2.left1}
              />
            </div>
            <div 
            className="ab2">
              <motion.p 
                className="course-page-desc" 
                style={{ color: homepageInfo[1].fontColor }} 
                {...fadeInFromLeft2.left2}>DESCRIPTION
              </motion.p>
            </div>
            <div className="ab3"> 
            <motion.p 
                className="course-bar" 
                style={{ color: homepageInfo[1].fontColor }} 
                {...fadeInFromLeft2.left3}>____________________
            </motion.p>
             </div>
            <div className="ab4">
              <motion.p 
                className="main-text-course" 
                style={{ color: homepageInfo[1].fontColor }} 
                {...fadeInFromLeft2.left4}>{homepageInfo[1].description}
              </motion.p>
            </div>
          </div>
          <div className="mid-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor2}}>
          <div className="ab1">
              <motion.img className="course-p2-img" src={icon2} alt="" {...fadeInFromLeft3.left1}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left2}>CORE AREAS OF STUDY</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p className="course-bar" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left3}>____________________</motion.p>
             </div>
            <div className="ab4">
            <motion.p className="main-text-course" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left4}>
              {
              coreAreasOfStudy.map((core,index)=>(
                <li className="course-name-desc"
                key={index} 
                style={{marginBottom:"1.5rem"}}
                onMouseEnter={() => handleMouseEnt2(index,"core")}
                onMouseLeave={handleMouseLeav2}
                >
                  {core.area}
                  {hoveredText2 === index && (
                        <motion.div className="course-desc-hov2" style={{ 
                            backgroundColor: homepageInfo[1].popupcolor1, 
                            color: homepageInfo[1].popupcolor2, 
                        }}
                        {...fadeInFromLeft3.a8}>
                          {core.description}
                        </motion.div>
            )}
                </li>
              ))}
              </motion.p>
            </div>
          </div>
          <div className="right-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor3}}>
          <div className="ab1">
              <motion.img className="course-p2-img" src={icon3} alt="" {...fadeInFromLeft3.left1}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left2}>PRE-REQUISITES</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p className="course-bar" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left3}>____________________</motion.p>
             </div>
            <div className="ab4" > 
            <motion.p className="main-text-course" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left4}>
              {prerequisites.map((pre,index)=>(
              <li 
              className="course-name-desc"
              key={index} 
              style={{marginBottom:"1.5rem"}}
              onMouseEnter={() => handleMouseEnt2(index,"pre")}
              onMouseLeave={handleMouseLeav2}
              >
                {pre.skill}
                {hoveredText3 === index && (
                      <motion.div className="course-desc-hov3" style={{ 
                          backgroundColor: homepageInfo[1].popupcolor1, 
                          color: homepageInfo[1].popupcolor2, 
                      }}
                      {...fadeInFromLeft3.a8}>
                        {pre.description}
                      </motion.div>
          )}
              </li>
            ))}</motion.p>
            </div>
          </div>



        </div>
 

    </>
  );

}

export function Page3({selectedCountry,countries,experienceSalary,experienceSalary1,homepageInfo,jobGrowthFields,courseData,handleMouseEnter,handleMouseLeave,hoveredCourse,mm,ds,tm}){
  function ExperienceNum(){
    return(
      <>
            <ul  className="main-text-coursex" >
                      {selectedCountry === countries[0].flag && experienceSalary.map((index,id)=>(<li key={id} style={{ color: homepageInfo[1].fontColor }}>{index.experience}</li>))}
                      {selectedCountry === countries[1].flag && experienceSalary1.map((index,id)=>(<li key={id} style={{ color: homepageInfo[1].fontColor }}>{index.experience}</li>))}
            </ul>
            <ul 
                className="main-text-coursey" 
             
              >
       {selectedCountry === countries[0].flag && experienceSalary.map((index,id)=>(<li key={id} style={{ color: homepageInfo[0].fontColor }}>{index.salaryRange}</li>))}
      {selectedCountry === countries[1].flag && experienceSalary1.map((index,id)=>(<li  key={id} style={{ color: homepageInfo[0].fontColor }}>{index.salaryRange}</li>))}
              </ul>
      </>
    );
}

  return(
    <>
              <div className="salary-course-left" style={{backgroundColor :homepageInfo[1].backgroundColor2}}>
        <div className="ab1">
              <motion.img className="course-p2-img" src={mm} alt="" {...fadeInFromLeft2.left1}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc1" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left2}>HIGHEST PAYING FIELDS IN THE SECTOR</motion.p>
            </div>

            <div className="ab3"> 
            <motion.p className="course-bar" style={{ color: homepageInfo[1].fontColor, marginBottom:"30px"}} {...fadeInFromLeft2.left3} >____________________</motion.p>
             </div>

          <div className="ab4x">
          <motion.ul 
                className="main-text-coursex" 
                {...fadeInFromLeft3.left2}
            >
                  {courseData.map((course, index) => (
  <li
    className="course-name-desc"
    style={{ color: homepageInfo[1].fontColor }}
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={handleMouseLeave}
    key={index}
  >
      {course.name}

    {hoveredCourse === index && (
      <motion.div
        className="course-desc-hov"
        style={{
          backgroundColor: homepageInfo[1].popupcolor1,
          color: homepageInfo[1].popupcolor2,
        }}
        {...fadeInFromLeft3.a8}
      >
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
              {courseData.map((course) => (
  <li key={course.id}>
    <a 
      href={course.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {course.salaryRange}
    </a>
  </li>
))}
              </motion.ul>

            </div>
        

      

        </div>
        <div className="salary-course-right">
          <div className="top-salary-course-right" style={{backgroundColor :homepageInfo[1].backgroundColor3}}>
          <div className="ab1x">
              <motion.img className="course-p2-img" src={ds} alt="" {...fadeInFromLeft2.left1}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc1" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left2} >10-YEAR AVERAGE SALARY PROJECTION BY EXPERIENCE LEVEL</motion.p>
            </div>

            <div className="ab3"> 
            <motion.p className="course-bar" style={{ color: homepageInfo[1].fontColor ,marginBottom:"30px"}} {...fadeInFromLeft2.left3}>____________________</motion.p>
             </div>

          <motion.div className="ab4x" {...fadeInFromLeft3.left6}>
          <ExperienceNum />
            </motion.div>
        
         
                  
          </div>

        </div>


    </>
  );

}


export function Page4({homepageInfo,h4,trend,h5,topspecializations,skills,h6,handleMouseEnt3,handleMouseLeav3,hoveredText4,hoveredText5,hoveredText6}){


  return(
    <>
           <div className="page2-main-content">
          <div className="left-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor1}}>
            <div className="ab1">
              <motion.img className="course-p2-img" src={h4} alt="" {...fadeInFromLeft2.left1} />
            </div>
            <div className="ab2">
              <motion.p style={{ color: homepageInfo[1].fontColor }} className="course-page-desc" {...fadeInFromLeft3.left2}>EMERGING TRENDS</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p {...fadeInFromLeft2.left3} style={{ color: homepageInfo[1].fontColor }} className="course-bar">____________________</motion.p>
             </div>
            <div className="ab4">
              <motion.ul className="main-text-course"  {...fadeInFromLeft3.left6}>
                {
                trend.map((trend,index)=>(
                  <li 
                  className="course-name-desc1"
                  key={index} style={{ color: homepageInfo[1].fontColor, marginBottom:"1.5rem" }}
                  onMouseEnter={() => handleMouseEnt3(index,"emerge")}
                  onMouseLeave={handleMouseLeav3}
                  >
                    {trend.trend}
                  {hoveredText4 === index && (
                      <motion.div className="course-desc-hov" style={{ 
                          backgroundColor: homepageInfo[1].popupcolor1, 
                          color: homepageInfo[1].popupcolor2, 
                      }}
                      {...fadeInFromLeft3.a8}>
                        {trend.description}
                      </motion.div>
          )}
                  
                  </li>
                ))
                
                }
              </motion.ul>
            </div>
          </div>
          <div className="mid-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor2}}>
          <div className="ab1">
              <motion.img src={h5} className="course-p2-img" alt="" {...fadeInFromLeft2.left1} />
            </div>
            <div className="ab2">
              <motion.p style={{ color: homepageInfo[1].fontColor }}  {...fadeInFromLeft3.left2} className="course-page-desc">TOP SPECIALIZATIONS</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p {...fadeInFromLeft2.left3} style={{ color: homepageInfo[1].fontColor }} className="course-bar">____________________</motion.p>
             </div>
            <div className="ab4">
              <motion.ul className="main-text-course"  {...fadeInFromLeft3.left6}>
                      {
                        topspecializations.map((top,index)=>(
                          <li 
                          className="course-name-desc1"
                          key={index} style={{ color: homepageInfo[1].fontColor,marginBottom:"1.5rem" }}
                          onMouseEnter={() => handleMouseEnt3(index,"top")}
                          onMouseLeave={handleMouseLeav3}
                          >
                            {top.specialization}
                          {hoveredText5 === index && (
                      <motion.div className="course-desc-hov" style={{ 
                          backgroundColor: homepageInfo[1].popupcolor1, 
                          color: homepageInfo[1].popupcolor2, 
                      }}
                      {...fadeInFromLeft3.a8}>
                        {top.description}
                      </motion.div>
          )}
                          </li>
                        ))
                      }
                      </motion.ul>

                      
            </div>
          </div>
          <div className="right-page-2" style={{backgroundColor :homepageInfo[1].backgroundColor3}}>
          <div className="ab1">
              <motion.img src={h6} className="course-p2-img" alt="" {...fadeInFromLeft2.left1}/>
            </div>
            <div className="ab2">
              <motion.p {...fadeInFromLeft3.left2} style={{ color: homepageInfo[1].fontColor }} className="course-page-desc">SKILLS TO BE ACQUIRED</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p style={{ color: homepageInfo[1].fontColor }} className="course-bar" {...fadeInFromLeft2.left3}>____________________</motion.p>
             </div>
            <div className="ab4">
              <motion.ul className="main-text-course" {...fadeInFromLeft3.left6} style={{ color: homepageInfo[1].fontColor }} >
                        {
                          skills.map((skills,index)=>(
                            <li 
                            className="course-name-desc1"
                            key={index} style={{marginBottom:"1.5rem"}}
                            onMouseEnter={() => handleMouseEnt3(index,"skills")}
                            onMouseLeave={handleMouseLeav3}
                            >
                              {skills.skill}
                            {hoveredText6 === index && (
                      <motion.div className="course-desc-hov" style={{ 
                          backgroundColor: homepageInfo[1].popupcolor1, 
                          color: homepageInfo[1].popupcolor2, 
                      }}
                      {...fadeInFromLeft3.a8}>
                        {skills.description}
                      </motion.div>
          )}
                            </li>
                          ))
                        }
              </motion.ul>
            </div>
          </div>



        </div>
    </>
  );

}

export function Page5({homepageInfo,challengesArray,dsp,handleMouseEnter,handleMouseLeave,dst,issuesArray,hoveredText,hoveredCourse,}){


  return(
    <>

<div className="salary-course-left" style={{backgroundColor :homepageInfo[1].backgroundColor2}}>
        <div className="ab1">
              <motion.img className="course-p2-img" src={dsp} alt="" {...fadeInFromLeft2.left1}/>
            </div>
            <div className="ab2">
            <motion.p style={{ color: homepageInfo[1].fontColor }} className="course-page-desc1" {...fadeInFromLeft3.left2}>UNDERGRADUATE CHALLENGES</motion.p>
            </div>

            <div className="ab3"> 
            <motion.p  style={{ color: homepageInfo[1].fontColor }} className="course-bar" {...fadeInFromLeft2.left4}>____________________</motion.p>
             </div>

          <div className="ab4x">
          <motion.ul 
                className="main-text-coursex2" 
                {...fadeInFromLeft3.left6}
                style={{ color: homepageInfo[1].fontColor }}>
                    {challengesArray.map((title,index) => (
                      <li className="course-name-desc1"
                      key={index}
                      onMouseEnter={() => handleMouseEnter(index,"challenges")}
                      onMouseLeave={handleMouseLeave}>
                        {title.heading}
                        {hoveredCourse === index && (
                        <motion.div className="course-desc-hov1" 
                        style={{ 
                            backgroundColor: homepageInfo[1].popupcolor1, 
                            color: homepageInfo[1].popupcolor2, 
    
                        }}
                        {...fadeInFromLeft3.a8}>
                          {title.description}
  </motion.div>
)}</li>))}</motion.ul> </div></div>


        <div className="salary-course-right" >
          <div className="top-salary-course-right" style={{backgroundColor :homepageInfo[1].backgroundColor3}}>
          <div className="ab1x">
              <motion.img className="course-p2-img" src={dst} alt="" {...fadeInFromLeft2.left1}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc1" style={{ color: homepageInfo[1].fontColor }} {...fadeInFromLeft3.left2}>CURRENT JOB ISSUES IN THE FIELD</motion.p>
            </div>

            <div className="ab3"> 
            <motion.p style={{ color: homepageInfo[1].fontColor }} className="course-bar" {...fadeInFromLeft2.left3}>____________________</motion.p>
             </div>

          <div className="ab4x">
          
          <motion.ul 
                className="main-text-coursex2" 
                {...fadeInFromLeft3.left6}
                style={{ color: homepageInfo[1].fontColor }}>
                  
                  {issuesArray.map((title,index) => (
                      <li key={index} 
                      className="course-name-desc1" 
                      onMouseEnter={() => handleMouseEnter(index,"issues")}
                      onMouseLeave={handleMouseLeave}>
                      
                      {title.heading}
                      
                      {hoveredText === index && (
                      <motion.div className="course-desc-hov1" 
                      style={{ 
                        backgroundColor: homepageInfo[1].popupcolor1, 
                        color: homepageInfo[1].popupcolor2, 
                    }}

                      
                      {...fadeInFromLeft3.a8}>
                      {title.description}
  </motion.div>)}</li>))} </motion.ul></div></div> </div>
    </>
  );

}


export const fadeInFromLeft = {
  left1: {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.1, delay: 0 },
    viewport: { once: true }
  },
    left2: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.3, delay: 0 },
      viewport: { once: true }
    },
    left3: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.4, delay: 0 },
      viewport: { once: true }
    },
    left4: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.5, delay: 0 },
      viewport: { once: true }
    },
    left5: {
      initial: { x: -100, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0 },
      viewport: { once: true }
    },
    left6: {
      initial: { y: 5, opacity: 1},
      whileInView: { y: 0, opacity: 1 },
      transition: { duration: 0.8, delay: 0 },
      viewport: { once: true },
    },
  };
  
  export const fadeInFromLeft2 = {
    left1: {
      initial: { x: -50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.3, delay: 0.5 },
      viewport: { once: true }
    },
    left2: {
      initial: { x: -50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.4, delay: 0.4 },
      viewport: { once: true }
    },
    left3: {
      initial: { x: -10, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.5, delay: 0.3 },
      viewport: { once: true }
    },
    left4: {
      initial: { x: -50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.2 },
      viewport: { once: true }
    },
    left5: {
      initial: { x: -50, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.1 },
      viewport: { once: true }
    }
  };
  
  export const fadeInFromLeft3 = {
    left1: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.3, delay: 0.5 },
      viewport: { once: true }
    },
    left2: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.4, delay: 0.4 },
      viewport: { once: true }
    },
    left3: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.5, delay: 0.3 },
      viewport: { once: true }
    },
    left4: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.2 },
      viewport: { once: true }
    },
    left5: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.1 },
      viewport: { once: true }
    },
    left6: {
      initial: { x: -30, opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.4 },
      viewport: { once: true }
    },
    left7: {
      initial: { y: -20, x: -10, opacity: 0 },
      whileInView: { y: 0, x: 0, opacity: 1 },
      transition: { duration: 0.6, delay: 0.4 },
      viewport: { once: true }
    },
    a8: {
      initial: { 
        opacity: 0, 
        scale: 0.7, 
        x: -80 
      },
      whileInView: { 
        opacity: 1, 
        scale: 1, 
        x: 0 
      },
      transition: { 
        stiffness:120,
        delay: 0.5, 
        type: "spring", 
        damping: 29 
      },
      viewport: { 
        once: true 
      }
    }
  };
