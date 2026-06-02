import { useState } from 'react';
import {
  useNavScrollEffect,
  useActiveSection,
} from '../../hooks/useScrollPosition';
import {
  NAV_LINKS,
  NAV_SECTION_IDS,
} from '../../constants/navigation';
import { MobileMenu } from '../../components/MobileMenu/MobileMenu';
import './Menu.css';

export function Menu() {
  useNavScrollEffect('nav');
  const activeId = useActiveSection(NAV_SECTION_IDS);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const hamburgerClass = isMobileMenuOpen
    ? 'menu-hamburger menu-hamburger--open'
    : 'menu-hamburger';

  return (
    <>
      <nav aria-label="Primary">
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="link">
              <a
                href={link.href}
                aria-current={activeId === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={hamburgerClass}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>
      <MobileMenu
        id="mobile-menu"
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

export default Menu;
