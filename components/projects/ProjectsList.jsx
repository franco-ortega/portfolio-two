import Project from './Project';
import styles from './ProjectsList.module.scss';

const ProjectsList = ({ projects }) => {
  return (
    <ul data-testid='projects-list' className={styles.ProjectsList}>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
