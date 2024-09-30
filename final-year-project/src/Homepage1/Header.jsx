import { useNavigate } from 'react-router-dom';

export default function Header(){

  const navigate = useNavigate();

  const signUpClick = () => {
    navigate('/signup');
  }

  const signInClick = () => {
    navigate('/signin');
  }


return (
  <>
      <header className="header-list">
        <div className="left-hdr">

        </div>
          <div className="middle-hdr">
            <ul className="mid-header">
              <li>Courses</li>
              <li>About Us</li>
              <li>Contact Us</li>
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