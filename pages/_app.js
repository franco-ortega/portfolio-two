import App from '../components/app/App';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;
