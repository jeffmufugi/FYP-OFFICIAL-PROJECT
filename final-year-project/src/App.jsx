import React from 'react';
import { BrowserRouter as Router, Route, Routes, ScrollRestoration } from 'react-router-dom';
import Homepage1 from "./Homepage1.jsx";
import Homepage2 from "./Homepage2.jsx";
import Homepage3 from "./Homepage3.jsx";
import SignUpPage from './SignUpPage.jsx';
import SignInPage from './SignInPage.jsx';
import ContactUs from './ContactUs.jsx';
import AboutUs from './AboutUs.jsx';
import CoursePage from './CoursePage.jsx';
import ScrollToTop from './scroll.jsx';
import ComputerScienceCourse from './CoursesPage/ComputerScience.jsx'
import ChemicalEngineeringCourse from './CoursesPage/ChemicalEngineering.jsx';
import MechanicalEngineeringCourse from './CoursesPage/MechanicalEngineering.jsx';
import PhysicsEngineeringCourse from './CoursesPage/Physics.jsx';
import MathematicsCourse from './CoursesPage/mathematics.jsx'
import AerospaceEngineeringCourse from './CoursesPage/AerospaceEngineering.jsx';
import BiomedicalEngineeringCourse from './CoursesPage/BiomedicalEngineering.jsx';
import CivilEngineeringCourse from './CoursesPage/CivilEngineering.jsx';
import NuclearEngineeringCourse from './CoursesPage/NuclearEngineering.jsx';
import MarineBiologyCourse from './CoursesPage/MarineBiology.jsx';
import { useEffect,useState } from 'react';

function App() {

  // const [backendData,setbackendData] = useState([{}]);
  // useEffect(()=>{
  //    fetch("/users").then(
  //     response => response.json()
  //    ).then(
  //     data => setbackendData(data)
  //    )
  // },[])


  return (
    <Router>
      
      <div className="app-container">

        <Routes>
          <Route path="/" element={
            <>
              <Homepage1 />
              {/* <Homepage2 /> */}
              <Homepage3 />
            </>
          } />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/cscoursepage" element={<ComputerScienceCourse />} />
          <Route path="/mechcoursepage" element={<MechanicalEngineeringCourse />} />
          <Route path="/biocoursepage" element={<BiomedicalEngineeringCourse />} />
          <Route path="/civcoursepage" element={<CivilEngineeringCourse  />} />
          <Route path="/aerocoursepage" element={<AerospaceEngineeringCourse />} />
          <Route path="/phycoursepage" element={<PhysicsEngineeringCourse/>} />
          <Route path="/nuccoursepage" element={<NuclearEngineeringCourse/>} />
          <Route path="/marcoursepage" element={<MarineBiologyCourse/>} />
          <Route path="/mathcoursepage" element={<MathematicsCourse/>} />
          <Route path="/chemcoursepage" element={<ChemicalEngineeringCourse />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;