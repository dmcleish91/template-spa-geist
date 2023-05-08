import { Card, Text } from "@nextui-org/react";

export default function ButtonCard({ text }: { text?: React.ReactNode }) {
  return (
    <Card isPressable isHoverable css={{ mw: "375px" }} variant='bordered'>
      <Card.Body>
        <Text>{text || "A basic card"}</Text>
      </Card.Body>
    </Card>
  );
}
