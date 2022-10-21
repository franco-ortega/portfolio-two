import Button from '../buttons/Button';
import styles from './Landing.module.scss';

const Landing = ({ handler, fadeOut }) => {
  return (
    <div className={`${styles.Landing} ${fadeOut && styles.FadeOut}`}>
      <div>
        <h1>Franco Ortega</h1>
        <h2>Software Engineer</h2>
        <Button handler={handler} text={'Welcome'} />
      </div>
    </div>
  );
};

export default Landing;
