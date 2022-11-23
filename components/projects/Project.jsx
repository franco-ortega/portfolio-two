import { useRouter } from 'next/router';
import GitHubLink from '../links/GitHubLink';
import WebsiteLink from '../links/WebsiteLink';
import styles from './Project.module.scss';

const Project = ({ title, techList, github, website, description }) => {
  const router = useRouter();

  const onDetailsClick = () => router.push(`/projects/${title.toLowerCase()}`);

  return (
    <li data-testid='project' className={styles.Project}>
      <div>
        <h3>{title}</h3>
        <ul>
          {techList.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <p>
          <GitHubLink url={github} /> - <WebsiteLink url={website} />
        </p>
        <p>{description}</p>
      </div>
      <button onClick={onDetailsClick}>Project Details</button>
    </li>
  );
};

export default Project;
