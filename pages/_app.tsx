import type { AppProps } from 'next/app';
import RootLayout from '@/components/layout'; // Adjust the import path as necessary
import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;
