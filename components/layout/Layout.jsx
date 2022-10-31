import { useState } from 'react';
import Nav from '../navs/Nav';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const onDarkModeClick = () => setDarkMode((prevState) => !prevState);

  return (
    <div
      className={`${styles.Layout} ${darkMode && styles.DarkMode}`}
      data-testid='layout'
    >
      <Nav />
      <button onClick={onDarkModeClick}>DARK</button>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
