import Feature from '../../components/Feature/Feature';
import './Features.css';
const Features = () => {
  const frontEnd = ['React','Bootstrap'];
  const backend = ['Express','Spring'];
  const dataBase = ['MongoDB', 'SQL-Server', 'MySQL'];
  const programming = [
    'C',
    'C++',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'Java Script',
  ];
  const others = ['Git', 'Github', 'Node JS', 'Firebase', 'Scrum'];
  const learning = [
    'Docker',
    'Amazon Web Services',
  ];
  const QA = ['Maven','KarateLabs','Cucumber','Selenium']
  return (
    <section className="container" id="Features">
      <h2 className="header">FEATURES</h2>
      <div className="features">
        <Feature
          icon="computer-line"
          titulo="FrontEnd"
          tecnologias={frontEnd}
        />
        <Feature icon="terminal-fill" titulo="Backend" tecnologias={backend} />
        <Feature
          icon="code-line"
          titulo="Programming"
          tecnologias={programming}
        />
        <Feature
          icon="database-2-line"
          titulo="Data Bases"
          tecnologias={dataBase}
        />
        
        <Feature
          icon="book-open-fill"
          titulo="QA-Technologies"
          tecnologias={QA}
        />
        <Feature icon="add-line" titulo="Others" tecnologias={others} />
        <Feature
          icon="book-open-fill"
          titulo="Learning"
          tecnologias={learning}
        />
        
      </div>
    </section>
  );
};
export default Features;
