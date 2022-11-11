import Project from './Project';

const ProjectsList = ({ projects }) => {
  return (
    <ul data-testid='projects-list'>
      {projects.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
