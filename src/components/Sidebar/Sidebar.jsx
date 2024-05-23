import React from 'react';
import "./sidebar.css";
import Logo from '../../assets/arkaplansizlogo.png';

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href='#home' className='nav__logo'>
        <img src={Logo} alt='Logo' className='logo-img' />
      </a>
      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className='nav__link'><i className="icon-home"></i> Home</a>
            </li>
            <li className='nav__item'>
              <a href="#about" className='nav__link'><i className="icon-user-following"></i> About</a>
            </li>
            <li className='nav__item'>
              <a href="#services" className='nav__link'><i className="icon-briefcase"></i> Services</a>
            </li>
            <li className='nav__item'>
              <a href="#resume" className='nav__link'><i className="icon-graduation"></i> Resume</a>
            </li>
            <li className='nav__item'>
              <a href="#portfolio" className='nav__link'><i className="icon-layers"></i> Portfolio</a>
            </li>
            
            <li className='nav__item'>
              <a href="#contact" className='nav__link'><i className="icon-bubble"></i> Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="nav_footer">
        <span className="footerad">Büşra ONAY</span>
      </div>
    </aside>
  );
}

export default Sidebar;
