import { useProject } from '../../hooks/useProject';
import TechList from '../tech/TechList';
import styles from './ProjectDetails.module.scss';

const ProjectDetails = () => {
  const { data } = useProject();

  return (
    <div className={styles.ProjectDetails} data-testid='project-details'>
      {data && (
        <>
          <h2>{data.title}</h2>
          <TechList tech={data.tech} />
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
