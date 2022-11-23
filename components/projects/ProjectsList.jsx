import Project from './Project';
import styles from './ProjectsList.module.scss';

const ProjectsList = ({ projects }) => {
  return (
    <div data-testid='projects-list' className={styles.ProjectsList}>
      <ul>
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
