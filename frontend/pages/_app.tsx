import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  colors: {
                    amber: { 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309' },
                    orange: { 400: '#fb923c', 500: '#f97316', 600: '#ea580c' },
                    red: { 400: '#f87171', 500: '#ef4444', 600: '#dc2626' }
                  }
                }
              }
            }
          `
        }} />
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add('dark');` }} />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
