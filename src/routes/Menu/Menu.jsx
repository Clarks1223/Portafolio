import { useState } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NAV_LINKS } from '../../constants/navigation';
import { MobileMenu } from '../../components/MobileMenu/MobileMenu';
import './Menu.css';

const SCROLL_THRESHOLD = 10;

export function Menu() {
  const scrollY = useScrollPosition();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navClass = scrollY > SCROLL_THRESHOLD ? 'nav--scrolled' : '';
  const hamburgerClass = isMobileMenuOpen
    ? 'menu-hamburger menu-hamburger--open'
    : 'menu-hamburger';

  return (
    <>
      <nav className={navClass} aria-label="Primary">
        <a className="nav-logo" href="#home" aria-label="Go to top">
          <span className="nav-logo__mark">C</span>
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="link">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={hamburgerClass}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

export default Menu;
