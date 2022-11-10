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
      <button>Click for more project details.</button>
    </div>
  );
};

export default Project;
