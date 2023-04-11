import { Button, Checkbox, Container, Input, Row, Spacer } from '@nextui-org/react';

export default function AddUserForm() {
  return (
    <div style={{ width: '1170px' }}>
      <Container display='flex' direction='column' alignItems='flex-start'>
        <Input label='user id' bordered animated={false} />
        <Spacer y={0.5} />
        <Input label='first name' bordered animated={false} />
        <Spacer y={0.5} />
        <Input label='last name' bordered animated={false} />
        <Spacer y={0.5} />
        <Input label='title' bordered animated={false} />
        <Spacer y={0.5} />
        <Input label='phone number' bordered animated={false} />
        <Spacer y={0.5} />
        <Input label='inactive' bordered animated={false} />
        <Spacer y={0.5} />
        <Checkbox color='primary'>Admin</Checkbox>
        <Spacer y={0.5} />
        <Row>
          <Button>Cancel</Button>
          <Spacer x={0.5} />
          <Button>Save</Button>
        </Row>
      </Container>
    </div>
  );
}
