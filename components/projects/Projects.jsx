import ProjectsList from './ProjectsList';
import testContent from '../../data/testContent.json';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <div data-testid='projects' className={styles.Projects}>
      <h2>Projects</h2>
      <ProjectsList projects={testContent} />
    </div>
  );
};

export default Projects;
