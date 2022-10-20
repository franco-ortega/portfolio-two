import Head from 'next/head';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Head>
        <title>Portfolio: Franco Ortega - Software Engineer</title>
        <meta
          name='description'
          content='Portfolio site for Franco Ortega - Software Engineer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <h1>Franco Ortega - Software Engineer</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
