import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage1 from "./homepage1.jsx";
import Homepage2 from "./Homepage2.jsx";
import Homepage3 from "./Homepage3.jsx";
import SignUpPage from './SignupPage.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <>
              <Homepage1 />
              <Homepage2 />
              <Homepage3 />
              
            </>
          } />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;