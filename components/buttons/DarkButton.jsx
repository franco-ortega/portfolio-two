import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const DarkButton = ({ handler }) => {
  return (
    <Button
      handler={handler}
      text={
        <FontAwesomeIcon
          icon={faMoon}
          style={{ fontSize: 25, color: 'white' }}
        />
      }
    ></Button>
  );
};

export default DarkButton;
