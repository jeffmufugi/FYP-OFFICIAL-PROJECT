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
import { useMediaQuery } from 'react-responsive';
import ClimbingBoxLoader from "react-spinners/HashLoader";




export const Context = React.createContext();
function App() {
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });
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


      const [signedIn, setSignedIn] = useState(() => {
        try {
          const savedStatus = localStorage.getItem('SIGNED_IN_STATUS');
          return savedStatus === 'true';
        } catch (error) {
          console.error('Error reading localStorage:', error);
          return false;
        }
      });
      
      useEffect(() => {
        try {
          const savedStatus = localStorage.getItem('SIGNED_IN_STATUS');
          setSignedIn(savedStatus === 'true');
        } catch (error) {
          console.error('Error reading localStorage:', error);
          setSignedIn(false);
        }
      }, []);
      
      useEffect(() => {
        try {
          localStorage.setItem('SIGNED_IN_STATUS', String(signedIn));
        } catch (error) {
          console.error('Error writing to localStorage:', error);
        }
      }, [signedIn]);

      const [loading, setLoading] = useState(false);
      useEffect(()=>{
          setLoading(true);
          setTimeout(()=>{
            setLoading(false)
          },2000)
      },[])

      

  return (
    
    
    <Router>
      <Context.Provider value = {[signedIn,setSignedIn]}>
       
      <ScrollToTop />
      <Chatbott setChatBot={setChatBot} chatbot={chatbot}/>
      
      <div className="app-container">

      <Analytics />
              {loading ? (
                <>
                <div style={{backgroundColor:"#1F212D",height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <ClimbingBoxLoader
                  color="#ffffff"
                  loading
                  speedMultiplier={2}
                />
                </div>
            
              </>
              ):(
              <Routes>
              <Route path="/" element={
                <>
                  <Homepage1 />
                {isLargeScreen && <Homepage2 />}
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
            )}
      

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
