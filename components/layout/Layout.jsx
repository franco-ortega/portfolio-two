import Nav from '../navs/Nav';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout} data-testid='layout'>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
