import { useState } from 'react';
import DarkButton from '../buttons/DarkButton';

import Nav from '../navs/Nav';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const onDarkModeClick = () => {
    console.log('dark!!');
    setDarkMode((prevState) => !prevState);
  };

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
