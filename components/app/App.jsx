import Head from 'next/head';
import { useLanding } from '../../hooks/useLanding';
import Landing from '../landing/Landing';
import Layout from '../layout/Layout';

const App = ({ children }) => {
  const { landing, fadeOut, onWelcomeClick } = useLanding();
  return (
    <div>
      <Head>
        <title>Portfolio: Franco Ortega - Software Engineer</title>
        <meta
          name='description'
          content='Portfolio site for Franco Ortega - Software Engineer'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {landing ? (
        <Landing handler={onWelcomeClick} fadeOut={fadeOut} />
      ) : (
        <Layout>{children}</Layout>
      )}
    </div>
  );
};

export default App;
