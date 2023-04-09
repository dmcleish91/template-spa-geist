import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Gitlab } from 'react-feather';
import AvatarPopover from '../ui/AvatarPopover';
import InboxPopover from '../ui/InboxPopover';
import { Button, Link } from '@nextui-org/react';

export const Header: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  function logoutHandler() {
    signOut();
  }

  return (
    <div className='main-header'>
      <div className='center-content'>
        <div className='logo-container'>
          <Gitlab size={24} /> <div className='logo-text'>Template Project</div>
        </div>
        <div className='login-menu'>
          {!session && status !== 'loading' && (
            <>
              <Link href='#' style={{ fontSize: '14px', fontWeight: '500' }}>
                Contact
              </Link>
              <Button auto size='lg' style={{ fontSize: '14px', fontWeight: '500' }} onClick={() => router.push('/')}>
                Sign in
              </Button>
            </>
          )}

          {status === 'authenticated' && (
            <>
              <InboxPopover />
              <AvatarPopover />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
