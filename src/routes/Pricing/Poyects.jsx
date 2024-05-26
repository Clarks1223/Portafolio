import './Proyects.css';
import Proyect from '../../components/Proyect/Proyect';
// imagenes
import Portfolios from '../../assets/Portfolios.png';
import Shakinah from '../../assets/Shakinah.png';
import Weather from '../../assets/Weather.png';
import Calculator from '../../assets/Calculator.png';
const Proyects = () => {
  const SHAKINAH = ['REACT', 'Firebase'];
  const PORT = ['Express', 'Nodemailer', 'Cloudinary', 'HandleBars', 'Node JS'];
  const WEATHER = ['HTML', 'CSS', 'Java Script'];
  return (
    <section className="container" id="Proyects">
      <h2 className="header">Proyects</h2>
      <p className="sub-header">
        Explore a selection of my latest projects, each meticulously crafted to
        meet unique client needs and showcase my expertise in web development.
      </p>
      <div className="pricing">
        <Proyect
          titulo="Shakinah"
          tecnologias={SHAKINAH}
          despliegueURL="https://paginawebymovil.web.app/"
          imagen={Shakinah}
        />
        <Proyect
          titulo="Portafolios BOOTSTRAP"
          tecnologias={PORT}
          gitURL="https://github.com/Clarks1223/PortafoliosWeb"
          despliegueURL="https://portafoliosweb.onrender.com/"
          imagen={Portfolios}
        />
        <Proyect
          titulo="Weather"
          tecnologias={WEATHER}
          gitURL="https://github.com/Clarks1223/Clima?tab=readme-ov-file"
          despliegueURL="https://clakrsweather.netlify.app/"
          imagen={Weather}
        />
        <Proyect
          titulo="Web Calculator"
          tecnologias={WEATHER}
          gitURL="https://github.com/Clarks1223/CalculadoraWeb"
          despliegueURL="https://starlit-palmier-f57e7b.netlify.app/"
          imagen={Calculator}
        />
      </div>
    </section>
  );
};
export default Proyects;
