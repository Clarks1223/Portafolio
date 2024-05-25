import './Menu.css';
import { useState, useEffect } from 'react';
const Menu = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={{ backgroundColor: scroll > 10 ? '#000000 ' : 'transparent' }}>
      <div className="nav-logo">
        <a href="#">
          <img src="" />
        </a>
      </div>
      <ul className="nav-links">
        <li className="link">
          <a href="#Home">Home</a>
        </li>
        <li id="link1" className="link">
          <a href="#Proyects">Proyects</a>
        </li>
        <li id="link2" className="link">
          <a href="#Features">Features</a>
        </li>
      </ul>
      
    </nav>
  );
};
export default Menu;
