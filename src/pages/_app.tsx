import 'inter-ui/inter.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import Layout from '@/components/layout/Layout';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ToastContainer position='bottom-right' />
      <SessionProvider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </SessionProvider>
    </NextUIProvider>
  );
}
