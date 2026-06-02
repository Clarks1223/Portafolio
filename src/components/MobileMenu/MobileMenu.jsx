import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { NAV_LINKS } from '../../constants/navigation';
import { useStableCallback } from '../../hooks/useStableCallback';
import './MobileMenu.css';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function MobileMenu({ id = 'mobile-menu', isOpen, onClose }) {
  const containerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const stableClose = useStableCallback(onClose);

  useEffect(() => {
    const node = containerRef.current;
    if (node) {
      if (isOpen) node.removeAttribute('inert');
      else node.setAttribute('inert', '');
    }

    if (!isOpen) return undefined;

    previousFocusRef.current = document.activeElement;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        stableClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const container = containerRef.current;
      if (!container) return;

      const focusable = container.querySelectorAll(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    const focusTimeout = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(focusTimeout);
      const previous = previousFocusRef.current;
      if (previous && typeof previous.focus === 'function') {
        previous.focus();
      }
    };
  }, [isOpen, stableClose]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
    >
      <button
        ref={closeButtonRef}
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
            <a href={link.href} onClick={onClose} tabIndex={isOpen ? 0 : -1}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

MobileMenu.propTypes = {
  id: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
