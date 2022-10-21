import { useEffect, useState } from 'react';
import Landing from '../components/landing/Landing';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [landing, setLanding] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [noPreference, setNoPreference] = useState(false);

  useEffect(() => {
    setNoPreference(
      window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    );
  }, []);

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
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
