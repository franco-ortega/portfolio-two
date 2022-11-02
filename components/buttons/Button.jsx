import styles from './Button.module.scss';

const Button = ({ customStyles, handler, text }) => {
  return (
    <button className={`${styles.Button} ${customStyles}`} onClick={handler}>
      {text}
    </button>
  );
};

export default Button;
