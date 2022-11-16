import { useRouter } from 'next/router';
import styles from './Project.module.scss';

const Project = ({ title, techList, description }) => {
  const router = useRouter();

  const onDetailsClick = () => {
    router.push(`/projects/${title.toLowerCase()}`);
  };

  const openCurly = '{';
  const closeCurly = '}';

  return (
    <li data-testid='project' className={styles.Project}>
      <h3>{title}</h3>
      <ul>
        {techList.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <p>{description}</p>
      <button onClick={onDetailsClick}>Click for more details.</button>
    </li>
  );
};

export default Project;
