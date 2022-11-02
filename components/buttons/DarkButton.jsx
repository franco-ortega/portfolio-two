import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import styles from './DarkButton.module.scss';

const DarkButton = ({ handler, darkMode }) => {
  return (
    <Button
      customStyles={`${styles.DarkButton} ${darkMode && styles.DarkMode}`}
      handler={handler}
      text={
        <FontAwesomeIcon
          icon={faMoon}
          style={{ fontSize: 20, color: `${darkMode ? 'black' : 'white'}` }}
        />
      }
    ></Button>
  );
};

export default DarkButton;
