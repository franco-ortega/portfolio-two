import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import styles from './DarkButton.module.scss';

const DarkButton = ({ handler }) => {
  const customStyles = {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderRadius: '100vmax'
  };

  return (
    <Button
      handler={handler}
      customStyles={customStyles}
      text={
        <FontAwesomeIcon
          icon={faMoon}
          style={{ fontSize: 25, color: 'black' }}
        />
      }
    ></Button>
  );
};

export default DarkButton;
