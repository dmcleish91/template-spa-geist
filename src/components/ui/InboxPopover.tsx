import { Tabs } from '@geist-ui/core';
import { Bell } from 'react-feather';

export default function InboxPopover() {
  return (
    <div></div>
    // <Popover className='popover-position'>
    //   <Popover.Button className='reset'>
    //     <div className='popover-button popover-inbox-button'>
    //       <Bell size={16} />
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
    //       <div className='popover-card'>
    //         <Tabs initialValue='1' style={{ marginTop: '11px' }}>
    //           <Tabs.Item label='Inbox' value='1'></Tabs.Item>
    //           <Tabs.Item label='Archive' value='2'></Tabs.Item>
    //         </Tabs>
    //       </div>
    //     </Popover.Panel>
    //   </Transition>
    // </Popover>
  );
}
