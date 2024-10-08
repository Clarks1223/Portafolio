import Feature from '../../components/Feature/Feature';
import './Features.css';
const Features = () => {
  const frontEnd = ['React', 'React-Ntive', 'HTML', 'CSS', 'Bootstrap'];
  const backend = ['Express', 'Spring Boot', 'Node.JS', 'PHP'];
  const dataBase = ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'];
  const programming = [
    'C',
    'C++',
    'Java',
    'Python',
    'Typescript',
    'JavaScript',
  ];
  const others = ['Git', 'Github', 'Scrum', 'Figma', 'Jira'];
  const learning = ['Docker', 'Amazon Web Services'];
  const QA = ['Postman', 'KarateLabs', 'Cucumber', 'Selenium'];
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
