import { useRouter } from 'next/router';

const Project = ({ title, techList, description, challenges, learnings }) => {
  const router = useRouter();

  const onDetailsClick = () => {
    router.push(`/projects/${title.toLowerCase()}`);
  };

  return (
    <div data-testid='project'>
      <h2>{title}</h2>
      <ul>
        {techList.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <p>{description}</p>
      <button onClick={onDetailsClick}>Click for more project details.</button>
    </div>
  );
};

export default Project;
