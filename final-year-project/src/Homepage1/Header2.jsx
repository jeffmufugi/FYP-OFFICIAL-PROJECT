import { useNavigate } from 'react-router-dom';
import ai from "../site_icons/atom4.svg";

export default function Header1(){

const navigate = useNavigate();

const homepageClick = () => 
{
    navigate('/');
}

const AboutUsClick = () => 
{
    navigate('/aboutus');
}

const homeClick = () => 
{
    navigate('/');
}

const contactUsClick = () => 
{
    navigate('/contactus');
}

const coursePageClick = () => 
{
    navigate('/courses');
}


return (
  <>
      <header className="header-list">
        <div className="left-hdr">
        <img src={ai} className="header1-img" onClick={homepageClick}/>
        </div>
          <div className="middle-hdr">
            <ul className="mid-header3">
              <li onClick={homeClick}>Home</li>
              <li onClick={coursePageClick}>Courses</li>
              <li onClick={contactUsClick}>Contact Us</li>
              <li onClick={AboutUsClick}>About Us</li>
            </ul>
          </div>
          <div className="right-hdr">
          </div>
          
      </header>
  </>

)}