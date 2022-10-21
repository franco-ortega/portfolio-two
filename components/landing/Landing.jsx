import Button from '../buttons/Button';
import styles from './Landing.module.scss';

const Landing = ({ handler }) => {
  return (
    <div className={styles.Landing}>
      <div>
        <h1>Franco Ortega</h1>
        <h2>Software Engineer</h2>
        <Button handler={handler} text={'Welcome'} />
      </div>
    </div>
  );
};

export default Landing;
