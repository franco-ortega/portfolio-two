import styles from './Button.module.scss';

const Button = ({ handler, customStyles, text }) => {
  return (
    <button className={styles.Button} style={customStyles} onClick={handler}>
      {text}
    </button>
  );
};

export default Button;
