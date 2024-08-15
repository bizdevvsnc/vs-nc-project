import './Navbar.css';
import logo from '../photos/VS&NC INC. Company Logo.jpg';
import { Link } from 'react-scroll';
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState, useEffect, useRef } from "react";
import Sidebar  from './Sidebar';


export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div className="navbarContainer">
      <div className='logoAndTitles'>
        <img className='logo' src={logo} alt='logo' />
        <nav className="navbar">
          <Link to="about-us" spy={true} smooth={true} offset={50} duration={500}>
            <h1 className="navTitle">ABOUT US</h1>
          </Link>
          <Link to="our-services" spy={true} smooth={true} offset={50} duration={1500}>
            <h1 className="navTitle">OUR SERVICES</h1>
          </Link>
          <Link to="contacts" spy={true} smooth={true} offset={50} duration={1500}>
            <h1 className="navTitle">CONTACTS</h1>
          </Link>
        </nav>
      </div>
      <a className='blockbtn emaillink' href="mailto:bizdev@vs-nc.com"><button className="btn"> contact us</button></a>
      <div className="hiddenSidebar">
        <RxHamburgerMenu className="hamIcon mainLinks" onClick={() => setSidebarOpen(true)} />
        <div>
          <Sidebar trigger={sidebarOpen} setTrigger={setSidebarOpen} sidebarRef={sidebarRef}>
            <a className='emaillink' href="mailto:bizdev@vs-nc.com"><button className="btn"> contact us</button></a>
          </Sidebar>
        </div>
      </div>
    </div>
  );
};