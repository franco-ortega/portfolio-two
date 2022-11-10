const Project = ({ title, techList, description, challenges, learnings }) => {
  return (
    <div data-testid='project'>
      <h2>{title}</h2>
      <ul>
        {techList.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <p>{description}</p>
      <ul>
        {challenges.map((challenge, i) => (
          <li key={i}>{challenge}</li>
        ))}
      </ul>
      <ul>
        {learnings.map((learning, i) => (
          <li key={i}>{learning}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
