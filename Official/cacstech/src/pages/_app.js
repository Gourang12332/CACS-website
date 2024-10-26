// pages/_app.js
import Head from 'next/head';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
