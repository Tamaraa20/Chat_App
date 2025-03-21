import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css'
import Logo from '../../assets/logo2.png'

const Navbar = () => {
  return (
    <>
      <nav >
        <ul className='navigation'>
          <div className='logo'>
            <li>
              <img src={Logo} alt="" />
            </li>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" >About</Link>
            </li>
          </div>
          <div className='signIn'>
            <li>
              <p className="nav-link">Start your group today: </p>
            </li>
            <div className='btn'>
              <li>
                <Link to="/auth" className="nav-link">Sign In</Link>
              </li>
            </div>
          </div>
        </ul>


      </nav >
    </>
  );
}

export default Navbar;