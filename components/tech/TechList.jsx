import styles from './TechList.module.scss';

const TechList = ({ tech }) => {
  return (
    <ul className={styles.TechList} data-testid='tech-list'>
      {tech.map((tech, i) => (
        <li key={i}>{tech}</li>
      ))}
    </ul>
  );
};

export default TechList;
