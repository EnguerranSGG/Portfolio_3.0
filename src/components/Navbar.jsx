import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

import { SectionWrapper } from '../hoc';

const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <div className='navbar_logo_text'>
        <Link to='/' className='navbar_logo_link' onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
          }}>
        <img src={logo} alt="logo" className='navbar_logo'/>
        <p className='logo_text'>Enguerran Smagghe<br/><span className='no_title'>| Concepteur développeur d'applications</span></p>
        </Link>
        <ul className='navbar_links'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='navbar_menu'>
          <img src={toggle ? close : menu} alt="menu" className='menu_img'
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'no_menu' : 'show_menu'}`}>
            <ul className='menu_links'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>  
        </div>
      </div>
    </nav>
  )
}

export default SectionWrapper(Navbar, "") 