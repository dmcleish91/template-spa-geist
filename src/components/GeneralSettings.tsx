import { Button, Card, Input, Row, Text } from '@nextui-org/react';

export const GeneralSettings = () => {
  return (
    <>
      <Card variant='bordered'>
        <Card.Header>
          <Text b>Your Username</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: '$10' }}>
          <Text>This is your URL namespace within the company.</Text>
          <div style={{ marginTop: '16px' }}>
            <Input bordered aria-label='username input' labelLeft='USERNAME' />
          </div>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify='flex-end'>
            <Button aria-label='username save button' size='sm'>
              Save
            </Button>
          </Row>
        </Card.Footer>
      </Card>
      <Card variant='bordered'>
        <Card.Header>
          <Text b>Your Name</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: '$10' }}>
          <Text>Please enter your full name, or a display name you are comfortable with.</Text>
          <div style={{ marginTop: '16px' }}>
            <Input bordered aria-label='username input' labelLeft='NAME' />
          </div>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify='flex-end'>
            <Button aria-label='legal name save button' size='sm'>
              Save
            </Button>
          </Row>
        </Card.Footer>
      </Card>
      <Card variant='bordered'>
        <Card.Header>
          <Text b>Your Username</Text>
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: '$10' }}>
          <Text>This is your URL namespace within the company.</Text>
          <div style={{ marginTop: '16px' }}>
            <Input bordered aria-label='username input' labelLeft='NAME' />
          </div>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify='flex-end'>
            <Button aria-label='legal name save button' size='sm'>
              Save
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};
