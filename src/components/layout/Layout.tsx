import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { Button, Navbar, Text } from '@nextui-org/react';
import { Gitlab } from 'react-feather';

export default function Layout({ children }: { children: ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  function logoutHandler() {
    signOut();
  }

  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <Gitlab />
          <Text b color='inherit' hideIn='xs' style={{ marginLeft: '8px' }}>
            Template Project
          </Text>
        </Navbar.Brand>
        {status === 'authenticated' && (
          <Navbar.Content hideIn='xs'>
            <Navbar.Link href='#'>Dashboard</Navbar.Link>
            <Navbar.Link href='#'>Reports</Navbar.Link>
            <Navbar.Link href='#'>Management</Navbar.Link>
            <Navbar.Link href='#'>Settings</Navbar.Link>
          </Navbar.Content>
        )}
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat href='#'>
              Log in
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <>{children}</>
    </>
  );
}
