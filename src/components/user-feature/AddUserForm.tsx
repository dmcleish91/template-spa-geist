import { Button, Input, Select, Text } from '@geist-ui/core';

export default function AddUserForm() {
  return (
    <div style={{ width: '1170px' }}>
      <div className='user-form'>
        <Input>User ID</Input>
        <div>
          <Text small>Admin</Text>
          <Select style={{ width: '201px', marginTop: '4px' }}>
            <Select.Option value='true'>True</Select.Option>
            <Select.Option value='false'>False</Select.Option>
          </Select>
        </div>

        <Input>First Name</Input>
        <Input>Last Name</Input>
        <Input>Title</Input>
        <Input>Phone Number</Input>
        <Input>Inactive</Input>
      </div>
      <div className='button-container'>
        <Button type='secondary-light'>Cancel</Button>
        <Button type='success-light'>Save</Button>
      </div>
    </div>
  );
}
