import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import styles from './DarkButton.module.scss';

const DarkButton = ({ handler, darkMode, isMatch }) => {
  console.log({ isMatch });
  // const customStyles = {
  //   backgroundColor: darkMode ? 'white' : 'black',
  //   borderWidth: '2rem',
  //   border: 'none',
  //   borderRadius: '100vmax',
  //   padding: '0.5rem .65rem',
  //   position: 'absolute',
  //   top: isMatch ? '0.5rem' : '3.25rem',
  //   right: '.5rem'
  // };

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
