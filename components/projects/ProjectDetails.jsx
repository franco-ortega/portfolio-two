import { useProject } from '../../hooks/useProject';

const ProjectDetails = () => {
  const { data } = useProject();

  return (
    <div data-testid='project-details'>
      {data && (
        <>
          <h2>{data.title}</h2>
          <ul>
            {data.tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
          <p>{data.description}</p>
          <ul>
            {data.challenges.map((challenge, i) => (
              <li key={i}>{challenge}</li>
            ))}
          </ul>
          <ul>
            {data.learnings.map((learning, i) => (
              <li key={i}>{learning}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;
