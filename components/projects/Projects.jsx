import ProjectsList from './ProjectsList';
import testContent from '../../data/testContent.json';

const Projects = () => {
  return (
    <div data-testid='projects'>
      <h2>Projects Page</h2>
      <ProjectsList projects={testContent} />
    </div>
  );
};

export default Projects;
