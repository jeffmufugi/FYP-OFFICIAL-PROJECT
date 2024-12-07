import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import DataScienceCourse from './CoursesPage/DataScience.jsx';
import RoboticsCourse from './CoursesPage/Robotics.jsx';
import CybersecurityCourse from './CoursesPage/Cybersecurity.jsx';
import ComputerEngineeringCourse from './CoursesPage/ComputerEngineering.jsx';
import { useEffect,useState } from 'react';
import { Chatbott } from "./Chatbot";


export const Context = React.createContext();
function App() {

        const [chatbot,setChatState] = useState(0);

    function setChatBot(){
        if (chatbot===0){
        
          setChatState(1)
        }
        else {setChatState(0)}
      }
 // This effect listens for the "Shift + A" key combination
 useEffect(() => {
          const handleKeyDown = (event) => {
            if (event.shiftKey && event.key === 'a') {
              setChatBot();  // Toggle the chatbot state
            }
          };
          window.addEventListener('keydown', handleKeyDown);
          return () => {
            window.removeEventListener('keydown', handleKeyDown);
          };
      }, [chatbot]); // Re-run the effect when chatbot state changes



        const [signedIn,setSignedIn] = useState(false);

    


  return (
    
    
    <Router>
      <Context.Provider value = {[signedIn,setSignedIn]}>
       
      <ScrollToTop />
      <Chatbott setChatBot={setChatBot} chatbot={chatbot}/>
      
      <div className="app-container">

      <Analytics />

        <Routes>
          <Route path="/" element={
            <>
              <Homepage1 />
              {/* <Homepage2 /> */}
              <Homepage3 />
            </>
          } />
          
          <Route path="/signup" element={<SignUpPage/>} />
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
          <Route path="/datcoursepage" element={<DataScienceCourse/>} />
          <Route path="/cecoursepage" element={<ComputerEngineeringCourse/>} />
          <Route path="/robcoursepage" element={<RoboticsCourse/>} />
          <Route path="/cybcoursepage" element={<CybersecurityCourse/>} />
          <Route path="/chemcoursepage" element={<ChemicalEngineeringCourse />}
          
          />
        </Routes>

      </div>
      </Context.Provider>
    </Router>
    
  );
}

export default App;


  // const [backendData,setbackendData] = useState([{}]);
  // useEffect(()=>{
  //    fetch("/users").then(
  //     response => response.json()
  //    ).then(
  //     data => setbackendData(data)
  //    )
  // },[])
