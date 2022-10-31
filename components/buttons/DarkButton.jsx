import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkButton = ({ handler }) => {
  return (
    <button onClick={handler}>
      <FontAwesomeIcon icon={faMoon} />
    </button>
  );
};

export default DarkButton;
