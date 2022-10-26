import Head from 'next/head';
import { useLanding } from '../../hooks/useLanding';
import Landing from '../landing/Landing';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const { landing, fadeOut, onWelcomeClick } = useLanding();

  if (landing) return <Landing handler={onWelcomeClick} fadeOut={fadeOut} />;

  return (
    <div className={styles.Layout} data-testid='layout'>
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
