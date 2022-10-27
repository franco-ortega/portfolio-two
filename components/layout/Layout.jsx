import Nav from '../navs/Nav';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout} data-testid='layout'>
      <header>
        <h1>Franco Ortega - Software Engineer</h1>
      </header>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
