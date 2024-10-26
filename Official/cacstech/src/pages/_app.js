// pages/_app.js
import Head from 'next/head';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Iceland&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
