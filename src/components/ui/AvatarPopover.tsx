import { Avatar } from '@geist-ui/core';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import { GeistLink } from './GeistLink';

export default function AvatarPopover() {
  const [logAction, setLogAction] = useState('Log Out');

  function onSignOut() {
    setLogAction('Logging Out...');
    signOut();
  }

  return (
    <div></div>
    // <Popover className='popover-position'>
    //   <Popover.Button className='reset'>
    //     <div className='popover-button'>
    //       <Avatar text='DM' />
    //     </div>
    //   </Popover.Button>

    //   <Transition
    //     enter='transition duration-100 ease-out'
    //     enterFrom='transform scale-95 opacity-0'
    //     enterTo='transform scale-100 opacity-100'
    //     leave='transition duration-75 ease-out'
    //     leaveFrom='transform scale-100 opacity-100'
    //     leaveTo='transform scale-95 opacity-0'>
    //     <Popover.Panel className='popover-panel'>
    //       <div className='popover-card popover-logout-card'>
    //         <GeistLink>Dashboard</GeistLink>
    //         <GeistLink>Settings</GeistLink>
    //         <GeistLink>Command Menu</GeistLink>
    //         <GeistLink>Theme</GeistLink>
    //         <GeistLink onClick={onSignOut}>{logAction}</GeistLink>
    //       </div>
    //     </Popover.Panel>
    //   </Transition>
    // </Popover>
  );
}
