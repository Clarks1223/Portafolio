import './Footer.css';
const Footer = () => {
  return (
    <footer className="container" id="Footer">
      <span className="blur"></span>
      <span className="blur"></span>
      <div className="column">
        <h4>LOCATION</h4>
        <p>QUITO - ECUADOR</p>
      </div>
      <div className="column">
        <h4>AROUND THE WEB</h4>
        <div className="socials">
          <a href="https://github.com/Clarks1223" target="_blank">
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pablo-uchuari-b25242197/"
            target="_blank"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            href="https://www.instagram.com/pablo_gustavo1223/"
            target="_blank"
          >
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
      <div className="column">
        <h4>Contact</h4>
        <p>Email: Gustavouchuarii@gmail.com</p>
        <p>Whatsapp: +593 995526244</p>
      </div>
    </footer>
  );
};
export default Footer;
