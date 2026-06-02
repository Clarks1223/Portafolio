import PropTypes from 'prop-types';
import './ProjectCard.css';

const EXTERNAL_LINK_REL = 'noopener noreferrer';

export function ProjectCard({
  title,
  technologies,
  repoUrl = null,
  liveUrl,
  image,
  imageAlt,
}) {
  return (
    <article className="project-card">
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <div className="project-card__image">
          <img src={image} alt={imageAlt} loading="lazy" />
        </div>
        <div className="project-card__tech">
          <i className="ri-checkbox-circle-line" aria-hidden="true" />
          <ul>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        {repoUrl ? (
          <p className="project-card__repo">
            <i className="ri-github-fill" aria-hidden="true" />
            <a href={repoUrl} target="_blank" rel={EXTERNAL_LINK_REL}>
              GitHub
            </a>
          </p>
        ) : null}
      </div>
      <a
        className="project-card__link"
        href={liveUrl}
        target="_blank"
        rel={EXTERNAL_LINK_REL}
      >
        Take a Look
      </a>
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  repoUrl: PropTypes.string,
  liveUrl: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default ProjectCard;
