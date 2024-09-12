import './Proyects.css';
import Proyect from '../../components/Proyect/Proyect';
// imagenes
import Portfolios from '../../assets/Portfolios.png';
import Shakinah from '../../assets/Shakinah.png';
import Weather from '../../assets/Weather.png';
import Calculator from '../../assets/Calculator.png';
import NobaPet from '../../assets/NovaPet.png';
import Movies from '../../assets/Movies.png';
const Proyects = () => {
  const MOVIES = ['REACT', 'OMDb API'];
  const SHAKINAH = ['REACT', 'Node JS', 'Firebase', 'Bootstrap'];
  const NOVAPET = [
    'REACT',
    'EXPRESS',
    'Nodemailer',
    'Cloudinary',
    'Node JS',
    'Bootstrap',
  ];
  const PORT = [
    'Express',
    'Nodemailer',
    'Cloudinary',
    'HandleBars',
    'Node JS',
    'Bootstrap',
  ];
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
          titulo="Clarks Movies"
          tecnologias={MOVIES}
          gitURL="https://github.com/Clarks1223/Movies-APP.git"
          despliegueURL="https://clarksmovies.netlify.app/"
          imagen={Movies}
        />
        <Proyect
          titulo="NovaPet"
          tecnologias={NOVAPET}
          despliegueURL="https://noba-pet.netlify.app/"
          imagen={NobaPet}
        />
        <Proyect
          titulo="Shakinah"
          tecnologias={SHAKINAH}
          despliegueURL="https://paginawebymovil.web.app/"
          imagen={Shakinah}
        />
        <Proyect
          titulo="Portafolios"
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
