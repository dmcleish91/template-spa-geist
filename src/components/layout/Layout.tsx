import { ReactNode } from 'react';
import MainNavBar from './Navigation';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainNavBar />
      <>{children}</>
    </>
  );
}
