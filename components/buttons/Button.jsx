import styles from './Button.module.scss';

const Button = ({ handler, text }) => {
  return (
    <button className={styles.Button} onClick={handler}>
      {text}
    </button>
  );
};

export default Button;
