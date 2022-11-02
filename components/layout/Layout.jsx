import { useState } from 'react';
import Nav from '../navs/Nav';
import DarkButton from '../buttons/DarkButton';
import styles from './Layout.module.scss';

const Layout = ({ children, isMatch }) => {
  const [darkMode, setDarkMode] = useState(false);

  const onDarkModeClick = () => setDarkMode((prevState) => !prevState);
  return (
    <div
      className={`${styles.Layout} ${darkMode && styles.DarkMode}`}
      data-testid='layout'
    >
      <Nav />
      <DarkButton
        handler={onDarkModeClick}
        darkMode={darkMode}
        isMatch={isMatch}
      />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
