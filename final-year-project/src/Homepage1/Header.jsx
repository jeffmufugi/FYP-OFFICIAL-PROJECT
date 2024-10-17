import { useNavigate } from 'react-router-dom';
import ai from "../site_icons/atom1.svg";
export default function Header(){

  const navigate = useNavigate();

  const AboutUsClick = () => {
    navigate('/aboutus');
  }

  const signUpClick = () => {
    navigate('/signup');
  }

  const signInClick = () => {
    navigate('/signin');
  }

  const contactUsClick = () => {
    navigate('/contactus');
  }

   const coursePageClick = () => {
    navigate('/courses');
  }


return (
  <>
      <header className="header-list">
        <div className="left-hdr">
        <img src={ai} className="header1-img"/>
        </div>
          <div className="middle-hdr">
            <ul className="mid-header">
              <li onClick={coursePageClick}>Courses</li>
              <li onClick={AboutUsClick}>About Us</li>
              <li onClick={contactUsClick}>Contact Us</li>
              <li onClick={signInClick}>Sign In</li>
            </ul>
          </div>
          <div className="right-hdr">
                <button className="join-btn" onClick={signUpClick}>Click to Join</button>
          </div>
          
      </header>
  </>

)

  }