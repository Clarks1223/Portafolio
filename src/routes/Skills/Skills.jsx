import { SKILL_GROUPS } from '../../constants/skills';
import { SkillCard } from '../../components/SkillCard/SkillCard';
import './Skills.css';

export function Skills() {
  return (
    <section className="container" id="skills">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <SkillCard
            key={group.id}
            icon={group.icon}
            title={group.title}
            technologies={group.technologies}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
