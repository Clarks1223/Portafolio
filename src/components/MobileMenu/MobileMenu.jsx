import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NAV_LINKS } from '../../constants/navigation';
import './MobileMenu.css';

export function MobileMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="mobile-menu__close"
        onClick={onClose}
        aria-label="Close menu"
      >
        <i className="ri-close-line" aria-hidden="true" />
      </button>
      <ul className="mobile-menu__links">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a href={link.href} onClick={onClose}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
