import ProjectsList from './ProjectsList';

const Projects = ({ data }) => {
  console.log('PROJECTS DATA: ', data);
  return (
    <div data-testid='projects'>
      <h2>Projects Page</h2>
      <ProjectsList projects={data} />
    </div>
  );
};

export default Projects;
