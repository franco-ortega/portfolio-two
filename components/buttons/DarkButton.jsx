import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import styles from './DarkButton.module.scss';

const DarkButton = ({ handler }) => {
  return (
    <Button
      customStyles={styles.DarkButton}
      handler={handler}
      text={<FontAwesomeIcon icon={faMoon} style={{ fontSize: 20 }} />}
    ></Button>
  );
};

export default DarkButton;
