import PropTypes from 'prop-types';
import './SkillCard.css';

export function SkillCard({ icon, title, technologies }) {
  return (
    <article className="skill-card">
      <span className="skill-card__icon" aria-hidden="true">
        <i className={`ri-${icon}`} />
      </span>
      <h3 className="skill-card__title">{title}</h3>
      <ul className="skill-card__tech-list">
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}

SkillCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SkillCard;
