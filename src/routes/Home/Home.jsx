import profileImage from '../../assets/PabloUchuari.jpeg';
import './Home.css';

const RESUME_URL =
  'https://drive.google.com/file/d/1uEr03aa9CIF5Ku2KGXLgjMdJyPBwrSpM/view?usp=sharing';

export function Home() {
  return (
    <header id="home" className="hero container">
      <span className="blur" aria-hidden="true" />
      <span className="blur" aria-hidden="true" />
      <div className="hero__content">
        <h4>WELCOME TO MY PROFESSIONAL SITE</h4>
        <h1>
          Hi, I&apos;m <span>Clarks</span>, Web Developer
        </h1>
        <p>
          Recently, I completed my studies in Software Development at the
          prestigious Escuela Politécnica Nacional of Ecuador. Currently,
          I&apos;m seeking challenging career opportunities to apply my skills
          in a dynamic environment.
        </p>
        <p>
          In this portfolio you will find a collection of projects that reflect
          my skills in software development. Each project here not only
          represents lines of code, but also creative and efficient solutions
          to various problems. Reach out to me at:{' '}
          <strong>gustavouchuarii@gmail.com</strong>
        </p>
        <a
          className="hero__resume-link"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="btn">
            Find my resume
          </button>
        </a>
      </div>
      <div className="hero__image">
        <img src={profileImage} alt="Portrait of Pablo Clarks" loading="lazy" />
      </div>
    </header>
  );
}

export default Home;
