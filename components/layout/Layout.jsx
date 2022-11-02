import { useDarkMode } from '../../hooks/useDarkMode';
import Nav from '../navs/Nav';
import DarkButton from '../buttons/DarkButton';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const { darkMode, onDarkModeClick } = useDarkMode();

  return (
    <div
      className={`${styles.Layout} ${darkMode && styles.DarkMode}`}
      data-testid='layout'
    >
      <Nav />
      <DarkButton handler={onDarkModeClick} darkMode={darkMode} />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
