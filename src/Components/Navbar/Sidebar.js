import { Link } from 'react-scroll';
import './Navbar.css';

function Sidebar(props) {
    const { trigger, setTrigger, sidebarRef } = props;
  
    return (trigger) ? (
      <div className='sidebar' ref={sidebarRef}>
        <div className='closeSidebarContainer'>
          <button className='closeSidebar' onClick={() => setTrigger(false)}>X</button>
        </div>
        <Link to="about-us" spy={true} smooth={true} offset={50} duration={500} onClick={() => setTrigger(false)}>
          <h1 className="navTitle">ABOUT US</h1>
        </Link>
        <Link to="our-services" spy={true} smooth={true} offset={50} duration={1500} onClick={() => setTrigger(false)}>
          <h1 className="navTitle">OUR SERVICES</h1>
        </Link>
        <Link to="contacts" spy={true} smooth={true} offset={50} duration={1500} onClick={() => setTrigger(false)}>
          <h1 className="navTitle">CONTACTS</h1>
        </Link>
      </div>
    ) : null;
  }
  
  export default Sidebar;