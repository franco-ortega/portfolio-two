import { useRouter } from 'next/router';
import ExternalLink from '../links/ExternalLink';
import styles from './Project.module.scss';

const Project = ({ title, techList, github, website, description }) => {
  const router = useRouter();

  const onDetailsClick = () => router.push(`/projects/${title.toLowerCase()}`);

  return (
    <li data-testid='project' className={styles.Project}>
      <h3>{title}</h3>
      <ul>
        {techList.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <p>
        <ExternalLink title={'GitHub'} url={github} /> -{' '}
        <ExternalLink title={'Website'} url={website} />
      </p>
      <p>{description}</p>
      <button onClick={onDetailsClick}>Project Details</button>
    </li>
  );
};

export default Project;
