import Movies from '../assets/Movies.png';
import NovaPet from '../assets/NovaPet.png';
import Shakinah from '../assets/Shakinah.png';
import Portfolios from '../assets/Portfolios.png';
import Weather from '../assets/Weather.png';
import Calculator from '../assets/Calculator.png';

export const PROJECTS = [
  {
    id: 'clarks-movies',
    title: 'Clarks Movies',
    image: Movies,
    imageAlt: 'Screenshot of Clarks Movies application',
    technologies: ['React', 'OMDb API'],
    repoUrl: 'https://github.com/Clarks1223/Movies-APP.git',
    liveUrl: 'https://clarksmovies.netlify.app/',
  },
  {
    id: 'novapet',
    title: 'NovaPet',
    image: NovaPet,
    imageAlt: 'Screenshot of NovaPet landing page',
    technologies: [
      'React',
      'Express',
      'Nodemailer',
      'Cloudinary',
      'Node.js',
      'Bootstrap',
    ],
    repoUrl: null,
    liveUrl: 'https://noba-pet.netlify.app/',
  },
  {
    id: 'shakinah',
    title: 'Shakinah',
    image: Shakinah,
    imageAlt: 'Screenshot of Shakinah website',
    technologies: ['React', 'Node.js', 'Firebase', 'Bootstrap'],
    repoUrl: null,
    liveUrl: 'https://paginawebymovil.web.app/',
  },
  {
    id: 'portafolios',
    title: 'Portafolios',
    image: Portfolios,
    imageAlt: 'Screenshot of Portafolios web project',
    technologies: [
      'Express',
      'Nodemailer',
      'Cloudinary',
      'HandleBars',
      'Node.js',
      'Bootstrap',
    ],
    repoUrl: 'https://github.com/Clarks1223/PortafoliosWeb',
    liveUrl: 'https://portafoliosweb.onrender.com/',
  },
  {
    id: 'weather',
    title: 'Weather',
    image: Weather,
    imageAlt: 'Screenshot of Weather application',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/Clarks1223/Clima?tab=readme-ov-file',
    liveUrl: 'https://clakrsweather.netlify.app/',
  },
  {
    id: 'web-calculator',
    title: 'Web Calculator',
    image: Calculator,
    imageAlt: 'Screenshot of Web Calculator application',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/Clarks1223/CalculadoraWeb',
    liveUrl: 'https://starlit-palmier-f57e7b.netlify.app/',
  },
];
