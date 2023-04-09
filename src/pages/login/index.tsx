import { PasswordVerify } from '@/components/login/PasswordVerify';
import Head from 'next/head';

export default function PasswordLogin() {
  return (
    <>
      <Head>
        <title>SPA-GeistUI-Login</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PasswordVerify />
    </>
  );
}
