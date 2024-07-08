import imgPerfil from '../../assets/PabloUchuari.jpeg';
import './Home.css';
const Home = () => {
  return (
    <header id="Home" className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h4>WELCOME TO MY PROFESSIONAL SITE</h4>
        <h1>
          Hi, I'm <span>Clarks</span>, Web Developer
        </h1>
        <p>
          Recently, I completed my studies in Software Development at the
          prestigious Escuela Politécnica Nacional of Ecuador. Currently, I'm
          seeking challenging career opportunities to apply my skills in a
          dynamic environment.
        </p>
        <p>
          In this portfolio you will find a collection of projects that reflect
          my skills in software development. Each project here not only
          represents lines of code, but also creative and efficient solutions to
          various problems. Reach out to me at:
          <strong> gustavouchuarii@gmail.com</strong>
        </p>
        <a
          href="https://drive.google.com/file/d/1uEr03aa9CIF5Ku2KGXLgjMdJyPBwrSpM/view?usp=sharing"
          target="_blank"
        >
          <button className="btn">Find my resume</button>
        </a>
      </div>
      <div className="image">
        <img src={imgPerfil} />
      </div>
    </header>
  );
};
export default Home;
