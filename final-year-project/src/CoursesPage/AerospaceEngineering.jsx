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
import mm from "../site_icons/mm.svg";
import ds from "../site_icons/dsj.svg";
import tm from "../site_icons/tmj.svg";
import dsp from "../site_icons/dsp.svg";
import dst from "../site_icons/dst.svg";
import { useState,useRef, useEffect } from "react";
import {countries,topspecializations,
  trend,skills,challengesArray,issuesArray,coreAreasOfStudy,jobGrowthFields,experienceSalary,experienceSalary1,
  homepageInfo,prerequisites,getTopCourses,homepageInfo2,homepageInfo1} from './aeroextdata.jsx';
import { Page1,Page2,Page3,Page4,Page5, fadeInFromLeft} from "./a0Skeleton.jsx";


const AerospaceEngineeringCourse = () => {
 
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("🇺🇸");
  const [courseData, setCourseData] = useState([]);
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("$");
  const [animat,setAnimat]=useState(null)
  useEffect(() => {
    const defaultCountry = countries.find(country => country.flag === "🇺🇸");
    if (defaultCountry) {
      const courses = getTopCourses(defaultCountry.file);
      setCourseData(courses);
    }
  }, []);

const dropdownRef = useRef(null)
  const inputRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle country change
  const handleSelect = (country) => {
    setSelectedCountry(country.flag);
    const currency = setSelectedCurrency(country.currency);
    const courses = getTopCourses(country.file);
    setCourseData(courses);
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setAnimat(null)
  };
  function setanimate(country){
    setAnimat(fadeInFromLeft.left6)
    if(selectedCountry === country.flag)
    {setAnimat(null)
    }
  }
  const handleMouseLeave = () => {
    console.log('Mouse left');
    setHoveredCourse(null);
    setHoveredText(null);
  };


  const [hoveredText, setHoveredText] = useState(null);
  const handleMouseEnt = (index,type) => {
    if (type === 'challenges') {
      setHoveredCourse(index);
    } else if (type === 'issues') {
      setHoveredText(index);
    }
  };

  const handleMouseLeav = () => {
    console.log('Mouse left');
    setHoveredText(null);
    setHoveredCourse(null)
  };

  const handleMouseEnter = (index) => {
    console.log('Mouse entered:', index);
    setHoveredCourse(index);
  };

  
  return (
    <>
    <div className="cs-course-page">
      <img src={fadebg} className="course-fadebg"/>
      <Header1 />
      <Page1 
            coursename={homepageInfo[0].courseName}
            coursedesc={homepageInfo[0].courseDefinition}
            inputRef={inputRef}
            selectedCountry={selectedCountry}
            toggleDropdown={toggleDropdown}
            isOpen={isOpen}
            countries={countries}
            handleSelect={handleSelect}
            salaryUS={homepageInfo1[0].undergradsal}                
            salaryMY={homepageInfo2[0].undergradsal}                
            jobsUS={homepageInfo1[0].jobavail}
            jobsMY={homepageInfo2[0].jobavail}
            emplUS={homepageInfo1[0].emprate}
            emplMY={homepageInfo2[0].emprate}
            img1={img1}            
            img2={img2}
            img3={img3}
            selectedCurrency={selectedCurrency} 
            homepageInfo={homepageInfo}
            animat={animat}
            setanimate={setanimate}
            dropdownRef={dropdownRef}
      />
    
    </div>
    
    <section name="second-course-section">
      <div className="cs-course-page2">
      <Page2 
        icon1={h1} 
        icon2={h2} 
        icon3={h3} 
        homepageInfo={homepageInfo} 
        coreAreasOfStudy={coreAreasOfStudy} 
        prerequisites={prerequisites} 
/>
      </div>

    </section>


    <section>
      <div className="cs-course-page3">

      <Page3 
        selectedCountry={selectedCountry}
        countries={countries}
        experienceSalary={experienceSalary}
        experienceSalary1={experienceSalary1}
        homepageInfo={homepageInfo}
        jobGrowthFields={jobGrowthFields}
        courseData={courseData}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        hoveredCourse={hoveredCourse}
        mm={mm}
        ds={ds}
        tm={tm}
/>
     </div>
    </section>


    <section name="second-course-section">
      <div className="cs-course-page2">
      <Page4 
          homepageInfo={homepageInfo}
          h4={h4}
          trend={trend}
          h5={h5}
          topspecializations={topspecializations}
          skills={skills}
          h6={h6}
/>
      </div>

    </section>

<section>
      <div className="cs-course-page3">
      <Page5 
          homepageInfo={homepageInfo}
            challengesArray={challengesArray}
            dsp={dsp}
            handleMouseEnter={handleMouseEnt}
            handleMouseLeave={handleMouseLeav}
            dst={dst}
            issuesArray={issuesArray}
            hoveredText={hoveredText}
            hoveredCourse={hoveredCourse}
/>


 </div>
    </section>
    </>
  );
};
export default AerospaceEngineeringCourse;




