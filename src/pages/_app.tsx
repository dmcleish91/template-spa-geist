import 'inter-ui/inter.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import Layout from '@/components/layout/Layout';
import { SessionProvider } from 'next-auth/react';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <ToastContainer position='bottom-right' />
          <Component {...pageProps} />;
        </Layout>
      </SessionProvider>
    </NextUIProvider>
  );
}
