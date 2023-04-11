import { useState } from 'react';
import { Gitlab } from 'react-feather';
import { GeistLink } from '../ui/GeistLink';
import { signOut, useSession } from 'next-auth/react';
import { Button, Text, Navbar, Popover, User } from '@nextui-org/react';

export default function MainNavBar() {
  const [logAction, setLogAction] = useState('Log Out');
  const { data: session, status } = useSession();

  function onSignOut() {
    setLogAction('Logging Out...');
    signOut();
  }

  return (
    <Navbar isCompact disableShadow>
      <Navbar.Brand>
        <Gitlab />
        <Text b color='inherit' hideIn='xs' style={{ marginLeft: '8px' }}>
          Template Project
        </Text>
      </Navbar.Brand>
      {session && (
        <Navbar.Content hideIn='xs'>
          <Navbar.Link href='/dashboard'>Dashboard</Navbar.Link>
          <Navbar.Link href='#'>Reports</Navbar.Link>
          <Navbar.Link href='/management'>Management</Navbar.Link>
          <Navbar.Link href='/settings'>Settings</Navbar.Link>
        </Navbar.Content>
      )}
      <Navbar.Content>
        {!session && status !== 'loading' && (
          <Navbar.Item>
            <Button auto flat href='#'>
              Log in
            </Button>
          </Navbar.Item>
        )}
        {session && (
          <Navbar.Item>
            <Popover>
              <Popover.Trigger>
                <User src='https://i.pravatar.cc/150?u=a042581f4e29026704d' name='Ariana Wattson' bordered pointer />
              </Popover.Trigger>
              <Popover.Content>
                <GeistLink>Dashboard</GeistLink>
                <GeistLink>Settings</GeistLink>
                <GeistLink>Command Menu</GeistLink>
                <GeistLink>Theme</GeistLink>
                <GeistLink onClick={onSignOut}>{logAction}</GeistLink>
              </Popover.Content>
            </Popover>
          </Navbar.Item>
        )}
      </Navbar.Content>
    </Navbar>
  );
}
