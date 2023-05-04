import { Card, Text } from '@nextui-org/react';

export default function ButtonCard() {
  return (
    <Card isPressable isHoverable css={{ mw: '375px' }} variant='bordered'>
      <Card.Body>
        <Text>A basic card</Text>
      </Card.Body>
    </Card>
  );
}
