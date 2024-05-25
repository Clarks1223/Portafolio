import imgPerfil from '../../assets/PabloUchuari.jpeg';
import './Home.css';
const Home = () => {
  return (
    <header id="Home" className="container">
      <div className="content">
        <span className="blur"></span>
        <span className="blur"></span>
        <h4>CREATE YOUR SITE LIKE A PRO</h4>
        <h1>
          Hi, I'm <span>Clarks</span>, Web Developer
        </h1>
        <p>
          I recently completed my studies in Software Development at the
          prestigious Escuela Politécnica Nacional of Ecuador. Currently seeking
          challenging career opportunities to apply my skills in a dynamic
          environment. Reach out at : <strong>gustavouchuarii@gmail.com</strong>
        </p>
        <a
          href="https://drive.google.com/file/d/15w2VDymg8mihvKhIA0FV8ctcgNjwwUWE/view?usp=drive_link"
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
