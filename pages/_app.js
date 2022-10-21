import { useState } from 'react';
import Landing from '../components/landing/Landing';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [landing, setLanding] = useState(true);

  if (landing) return <Landing />;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
