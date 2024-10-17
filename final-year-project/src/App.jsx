import React from 'react';
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
      <ScrollToTop />
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;