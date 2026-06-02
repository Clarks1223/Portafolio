import { PROJECTS } from '../../constants/projects';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

export function Projects() {
  return (
    <section className="container" id="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Explore a selection of my latest projects, each meticulously crafted
        to meet unique client needs and showcase my expertise in web
        development.
      </p>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            technologies={project.technologies}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
            image={project.image}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
