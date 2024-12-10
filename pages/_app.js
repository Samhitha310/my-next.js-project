import '../styles/globals.css';
import dynamic from 'next/dynamic';

// Dynamically import a heavy component
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), { ssr: false });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>My Header</header>
      <HeavyComponent /> {/* Dynamically Loaded */}
      <Component {...pageProps} />
      <footer>My Footer</footer>
    </>
  );
}

export default MyApp;
