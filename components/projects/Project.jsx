const Project = ({ title, techList, description, challenges, learnings }) => {
  return (
    <div data-testid='project'>
      <h2>{title}</h2>
      <ul>
        {techList.map((tech) => (
          <li key={tech.id}>{tech}</li>
        ))}
      </ul>
      <p>{description}</p>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id}>{challenge}</li>
        ))}
      </ul>
      <ul>
        {learnings.map((learning) => (
          <li key={learning.id}>{learning}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
