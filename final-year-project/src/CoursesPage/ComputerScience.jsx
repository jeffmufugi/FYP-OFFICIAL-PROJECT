import Header1 from "../Homepage1/Header2.jsx";
import fadebg from "../site_icons/rectangleblue.png";
import img1 from "../site_icons/Paid.svg";
import img2 from "../site_icons/Co.svg";
import img3 from "../site_icons/ex.svg";
import h1 from "../site_icons/doct.svg";
import h2 from "../site_icons/doct2.svg";
import h3 from "../site_icons/doct3.svg";
import h4 from "../site_icons/t1.svg";
import h5 from "../site_icons/t2.svg";
import h6 from "../site_icons/t3.svg";
import dd from "../site_icons/dropdown.svg";
import mm from "../site_icons/mm.svg";
import ds from "../site_icons/ds.svg";
import tm from "../site_icons/tm.svg";
import {motion} from "framer-motion";

const ComputerScienceCourse = () => {

  const countries = ["🇺🇸","🇲🇾","🇿🇲"];

  const topcourses = ["DATA SCIENCE",
    "CYBERSECURITY",
    "SOFTWARE DEVELOPER",
    "ARTIFICIAL INTELLIGENCE",
    "QUANTUM COMPUTING",
    "PRODUCT MANAGER",
    "CLOUD COMPUTING",
    "COMPUTER VISION",
    "ROBOTICS",
   " INTERNET OF THINGS (IoT)"];

   const topspecializations = ["Artificial Intelligence and Machine Learning", 
   "Data Science and Big Data Analytics", 
   "Cybersecurity and Information Assurance", 
   "Cloud Computing and Distributed Systems", 
   "Human-Computer Interaction", 
   "Computer Vision and Image Processing", 
   "Bioinformatics", "Quantum Computing", 
   "Robotics", "Internet of Things (IoT)"];

   const trend = [
    "Quantum Computing",
    "Edge Computing",
    "Extended Reality (XR) - including AR and VR",
    "Blockchain and Cryptocurrency",
    "Green Computing and Sustainability",
    "Neuromorphic Computing"
  ];

  const skills = [
    "Critical thinking and problem-solving",
    "Programming in multiple languages (e.g., Python, Java, C++, JavaScript)",
    "Data analysis and interpretation",
    "Algorithm design and optimization",
    "Software development methodologies",
    "System design and architecture",
    "Database management",
    "Network administration",
    "Cybersecurity practices",
    "Project management"
  ];

  
  

  
  return (
    <>
    <div className="cs-course-page">
      <img src={fadebg} className="course-fadebg"/>
      <Header1 />
      <div className="course-mainbody">
          <div className="left-course-main"></div>
          <div className="mid-course-main">
          <div className="course-title">
              <motion.h1 className="cs-text" initial={{ x: -100 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.1,delay: 0 }}
                        viewport={{ once: true }}>computer science.</motion.h1>
          </div>
          <div className="course-definition">
              <motion.p className="course-description"initial={{ x: -100 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.3,delay: 0 }}
                        viewport={{ once: true }}>
              Computer science is the study of algorithms, programming, computation, and data processing systems.</motion.p>
          </div>
          <div className="course-country">
          <motion.p 
              className="country-flag" 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ once: true }}
            >
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
              <motion.p className="course-stats-text" initial={{ x: -100 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0 }}
                        viewport={{ once: true }}>live stats.</motion.p>
          </div>
          <motion.div className="course-stats-info" initial={{ x: -100 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.6,delay: 0 }}
                        viewport={{ once: true }}>
              <div className="course-details-info">
                <img src={img1} alt="" />
                <p className="numbers-course-info">$125,300</p>
                <p className="img-course-description">fresh undergraduate base salary</p>
            </div>
            <div className="course-details-info">
            <img src={img2} alt="" />
              <p className="numbers-course-info">2,315,000</p>
              <p className="img-course-description">job availability</p>
            </div>
            <div className="course-details-info">
              <img src={img3} alt=""/>
              <p className="numbers-course-info">78%</p>
              <p className="img-course-description">employment rate</p>
            </div>
          </motion.div>
          </div>
          <div className="right-course-main"></div>
        </div>
    </div>
    



    
    <section name="second-course-section">
      <div className="cs-course-page2">
        <div className="page2-main-content">
          <div className="left-page-2">
            <div className="ab1">
              <motion.img className="course-p2-img" src={h1} alt="" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.3,delay: 0.5 }}
                        viewport={{ once: true }}/>
            </div>
            <div className="ab2">
              <motion.p className="course-page-desc" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.4,delay: 0.4 }}
                        viewport={{ once: true }}>DESCRIPTION</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p className="course-bar" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0.3 }}
                        viewport={{ once: true }}>____________________</motion.p>
             </div>
            <div className="ab4">
              <motion.p className="main-text-course" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.6,delay: 0.2 }}
                        viewport={{ once: true }}>Computer Science is the study of computation, information processing, 
                and the design of computer systems.<br/><br/> It encompasses both theoretical and 
                practical aspects of computation and information technology.</motion.p>
            </div>
          </div>
          <div className="mid-page-2">
          <div className="ab1">
              <motion.img className="course-p2-img" src={h2} alt="" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.3,delay: 0.5 }}
                        viewport={{ once: true }}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.4,delay: 0.4 }}
                        viewport={{ once: true }}>CORE AREAS OF STUDY</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p className="course-bar" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0.3 }}
                        viewport={{ once: true }}>____________________</motion.p>
             </div>
            <div className="ab4">
            <motion.p className="main-text-course" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.6,delay: 0.2 }}
                        viewport={{ once: true }}>Programming and Software Engineering<br/><br/>Data Structures and Algorithms
              <br/><br/>Computer Architecture and Organization<br/><br/>Operating Systems<br/><br/>Database Management Systems<br/><br/>Computer Networks
              <br/><br/>Artificial Intelligence and Machine Learning<br/><br/>Cryptography<br/><br/>Theory of Computation<br/><br/>Computer Graphics and 
              Visualization</motion.p>
            </div>
          </div>
          <div className="right-page-2">
          <div className="ab1">
              <motion.img className="course-p2-img" src={h3} alt="" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.3,delay: 0.5 }}
                        viewport={{ once: true }}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.4,delay: 0.4 }}
                        viewport={{ once: true }}>PRE-REQUISITES</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p className="course-bar" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0.3 }}
                        viewport={{ once: true }}>____________________</motion.p>
             </div>
            <div className="ab4" > 
            <motion.p className="main-text-course" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.6,delay: 0.2 }}
                        viewport={{ once: true }}>Strong foundation in mathematics (algebra, calculus, discrete mathematics)<br/>
              <br/>Basic understanding of computer systems<br/><br/>Logical thinking and analytical skills<br/><br/>Good communication skills
              <br/><br/>Self-motivation and ability to learn independently</motion.p>
            </div>
          </div>



        </div>
      </div>

    </section>






    <section>
      <div className="cs-course-page3">

        <div className="salary-course-left">
        <div className="ab1">
              <motion.img className="course-p2-img" src={mm} alt="" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.3,delay: 0.5 }}
                        viewport={{ once: true }}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc1" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.4,delay: 0.4 }}
                        viewport={{ once: true }}>HIGHEST PAYING FIELDS IN THE SECTOR</motion.p>
            </div>

            <div className="ab3"> 
            <motion.p className="course-bar" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0.3 }}
                        viewport={{ once: true }}>____________________</motion.p>
             </div>

          <div className="ab4x">
          <motion.ul 
                className="main-text-coursex" 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                {topcourses.map((course)=>( 
                    <li>{course}</li>
                    ))}


            </motion.ul>
            <motion.ul 
                className="main-text-coursey" 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <li>$92,000 - $130,500</li>
                <li>$85,000 - $220,000</li>
                <li>$90,000 - $140,000</li>
                <li>$70,000 - $130,000</li>
                <li>$80,000 - $120,000</li>
                <li>$112,000 - $133,000</li>
                <li>$115,000 - $130,000</li>
                <li>$120,000 - $156,000</li>
                <li>$103,500 - $110,000</li>
                <li>$110,000 - $121,000</li>
              </motion.ul>

            </div>
        

      

        </div>
        <div className="salary-course-right">
          <div className="top-salary-course-right">
          <div className="ab1x">
              <motion.img className="course-p2-img" src={ds} alt="" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.3,delay: 0.5 }}
                        viewport={{ once: true }}/>
            </div>
            <div className="ab2">
            <motion.p className="course-page-desc1" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.4,delay: 0.4 }}
                        viewport={{ once: true }}>10-YEAR AVERAGE SALARY PROJECTION BY EXPERIENCE LEVEL</motion.p>
            </div>

            <div className="ab3"> 
            <motion.p className="course-bar" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0.3 }}
                        viewport={{ once: true }}>____________________</motion.p>
             </div>

          <div className="ab4x">
          <motion.ul 
                className="main-text-coursex" 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <li>0-1 YEARS EXPERIENCE</li>
                <li>1-3 YEARS EXPERIENCE</li>
                <li>4-6 YEARS EXPERIENCE</li>
                <li>7-9 YEARS EXPERIENCE</li>

            </motion.ul>
            <motion.ul 
                className="main-text-coursey" 
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <li>$80,000 - $120,000</li>
                <li>$100,000 - $144,000</li>
                <li>$120,000 - $150,000</li>
                <li>$125,000 - $159,000</li>

       
              </motion.ul>

            </div>
        
         
                  
          </div>
          <div className="bottom-salary-course-right">
          <div className="ab1x">
              <motion.img className="course-p2-img" src={tm} alt="" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.3,delay: 0.5 }}
                        viewport={{ once: true }}/>
            </div>
            <div className="ab2x">
            <motion.p className="course-page-desc2" initial={{ x: -30 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.4,delay: 0.4 }}
                        viewport={{ once: true }}>AVERAGE JOB GROWTH RATE</motion.p>
            </div>
            <div className="ab3"> 
            <motion.p className="course-bar" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.5,delay: 0.3 }}
                        viewport={{ once: true }}>____________________</motion.p>
             </div>

            <div className="ab3x"> 
            <motion.ul className="course-barx" initial={{ x: -50 ,opacity: 0 }}
                        whileInView={{ x: 0 ,opacity: 1 }}
                        transition={{ duration: 0.6,delay: 0.2 }}
                        viewport={{ once: true }}>
                          <li>__________</li>
                            <li>DATA SCIENCE</li>
                            <li>CYBER SECURITY</li>
                            <li>ARTIFICIAL INTELLIGENCE</li>
                            <li>QUANTUM COMPUTING</li>
                            <li>NEUROMETRIC COMPUTING</li>
                        </motion.ul>
             </div>

          <div className="ab4xx">
          <motion.ul 
                className="main-text-coursexy" 
                initial={{ x: -50 ,opacity: 0 }}
                whileInView={{ x: 0 ,opacity: 1 }}
                transition={{ duration: 0.6,delay: 0.2 }}
                viewport={{ once: true }}
            >
                <ul className="yrs-rate2">
                <li>2022</li>
                <li>2023</li>
                <li>2024</li>
                <li>2025</li>
                <li>2026</li>
              </ul>

            </motion.ul>
            <motion.ul 
                className="main-text-coursexy" 
                initial={{ x: -50 ,opacity: 0 }}
                whileInView={{ x: 0 ,opacity: 1 }}
                transition={{ duration: 0.6,delay: 0.2 }}
                viewport={{ once: true }}
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
                initial={{ x: -50 ,opacity: 0 }}
                whileInView={{ x: 0 ,opacity: 1 }}
                transition={{ duration: 0.6,delay: 0.2 }}
                viewport={{ once: true }}
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
                initial={{ x: -50 ,opacity: 0 }}
                whileInView={{ x: 0 ,opacity: 1 }}
                transition={{ duration: 0.6,delay: 0.2 }}
                viewport={{ once: true }}
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
                initial={{ x: -50 ,opacity: 0 }}
                whileInView={{ x: 0 ,opacity: 1 }}
                transition={{ duration: 0.6,delay: 0.2 }}
                viewport={{ once: true }}
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
                initial={{ x: -50 ,opacity: 0 }}
                whileInView={{ x: 0 ,opacity: 1 }}
                transition={{ duration: 0.6,delay: 0.2 }}
                viewport={{ once: true }}
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


    <section name="second-course-section">
      <div className="cs-course-page2">
        <div className="page2-main-content">
          <div className="left-page-2">
            <div className="ab1">
              <img className="course-p2-img" src={h4} alt="" />
            </div>
            <div className="ab2">
              <p className="course-page-desc">EMERGING TRENDS</p>
            </div>
            <div className="ab3"> 
            <p className="course-bar">____________________</p>
             </div>
            <div className="ab4">
              <ul className="main-text-course">
                {
                trend.map((trend)=>(
                  <li>{trend}<br/><br/></li>
                ))
                
                }
              </ul>
            </div>
          </div>
          <div className="mid-page-2">
          <div className="ab1">
              <img src={h5} className="course-p2-img" alt="" />
            </div>
            <div className="ab2">
              <p className="course-page-desc">TOP SPECIALIZATIONS</p>
            </div>
            <div className="ab3"> 
            <p className="course-bar">____________________</p>
             </div>
            <div className="ab4">
              <ul className="main-text-course">
                      {
                        topspecializations.map((course)=>(
                          <li>{course}<br/><br/></li>
                        ))
                      }
                      </ul>

                      
            </div>
          </div>
          <div className="right-page-2">
          <div className="ab1">
              <img src={h6} className="course-p2-img" alt="" />
            </div>
            <div className="ab2">
              <p className="course-page-desc">SKILLS TO BE ACQUIRED</p>
            </div>
            <div className="ab3"> 
            <p className="course-bar">____________________</p>
             </div>
            <div className="ab4">
              <ul className="main-text-course">
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

    </>
  );
};
export default ComputerScienceCourse;




