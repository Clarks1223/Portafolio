import { SOCIAL_LINKS, CONTACT_INFO } from '../../constants/socials';
import './Footer.css';

const EXTERNAL_LINK_REL = 'noopener noreferrer';

export function Footer() {
  return (
    <footer className="container" id="contact">
      <span className="blur" aria-hidden="true" />
      <span className="blur" aria-hidden="true" />
      <div className="footer-column">
        <h4>LOCATION</h4>
        <p>{CONTACT_INFO.location}</p>
      </div>
      <div className="footer-column">
        <h4>AROUND THE WEB</h4>
        <div className="footer-socials">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel={EXTERNAL_LINK_REL}
              aria-label={link.label}
            >
              <i className={link.icon} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <div className="footer-column">
        <h4>Contact</h4>
        <p>Email: {CONTACT_INFO.email}</p>
        <p>Whatsapp: {CONTACT_INFO.whatsapp}</p>
      </div>
    </footer>
  );
}

export default Footer;
