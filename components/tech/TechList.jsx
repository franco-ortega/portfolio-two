const TechList = ({ tech }) => {
  return (
    <ul data-testid='tech-list'>
      {tech.map((tech, i) => (
        <li key={i}>{tech}</li>
      ))}
    </ul>
  );
};

export default TechList;
