import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Layout from '@/components/layout/Layout';
import { SessionProvider } from 'next-auth/react';
import { NextUIProvider, createTheme } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <SessionProvider session={pageProps.session}>
        <Layout>
          <ToastContainer position='bottom-right' />
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </Layout>
      </SessionProvider>
    </NextUIProvider>
  );
}
