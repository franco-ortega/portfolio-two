import ProjectButton from '../buttons/ProjectButton';
import GitHubLink from '../links/GitHubLink';
import WebsiteLink from '../links/WebsiteLink';
import TechList from '../tech/TechList';
import styles from './Project.module.scss';

const Project = ({ title, tech, github, website, description }) => {
  return (
    <li data-testid='project' className={styles.Project}>
      <div>
        <h3>{title}</h3>

        <TechList tech={tech} />
        <p>
          <GitHubLink url={github} /> - <WebsiteLink url={website} />
        </p>
        <p>{description}</p>
      </div>
      <ProjectButton title={title} />
    </li>
  );
};

export default Project;
