import { ReactNode } from 'react';
import MainNavBar from './navigation';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainNavBar />
      <>{children}</>
    </>
  );
}
