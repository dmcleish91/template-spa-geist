import { Button, Input, Text } from '@nextui-org/react';

export default function AddUserForm() {
  return (
    <div style={{ width: '1170px' }}>
      <div className='user-form'>
        <Input>User ID</Input>
        <div>
          <Text small>Admin</Text>
        </div>

        <Input>First Name</Input>
        <Input>Last Name</Input>
        <Input>Title</Input>
        <Input>Phone Number</Input>
        <Input>Inactive</Input>
      </div>
      <div className='button-container'>
        <Button auto>Cancel</Button>
        <Button auto>Save</Button>
      </div>
    </div>
  );
}
