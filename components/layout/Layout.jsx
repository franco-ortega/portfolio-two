import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Landing from '../landing/Landing';
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  const [landing, setLanding] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [noPreference, setNoPreference] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setNoPreference(
      window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    );

    if (router.pathname !== '/') setLanding(false);
  }, [router]);

  const onWelcomeClick = () => {
    if (noPreference) setFadeOut(true);
    setTimeout(
      () => {
        setLanding(false);
      },
      noPreference ? 1000 : 0
    );
  };

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
