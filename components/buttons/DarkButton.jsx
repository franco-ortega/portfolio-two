import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const DarkButton = ({ handler, darkMode, isMatch }) => {
  const customStyles = {
    backgroundColor: darkMode ? 'white' : 'black',
    borderWidth: '2rem',
    border: 'none',
    borderRadius: '100vmax',
    padding: '0.5rem .65rem',
    position: 'absolute',
    top: isMatch ? '0.5rem' : '3.25rem',
    right: '.5rem'
  };

  return (
    <Button
      handler={handler}
      customStyles={customStyles}
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
