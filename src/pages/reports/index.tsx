import { Card, Text } from '@nextui-org/react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default function dashboard() {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ padding: '12px', display: 'flex', justifyContent: 'center', gap: '16px', height: '800px' }}>
        <Card css={{ mw: '400px' }} variant='bordered'>
          <Card.Body>
            <Text>A basic card</Text>
          </Card.Body>
        </Card>
        <Card css={{ mw: '400px' }} variant='bordered'>
          <Card.Body>
            <Text>A basic card</Text>
          </Card.Body>
        </Card>
        <Card css={{ mw: '400px' }} variant='bordered'>
          <Card.Body>
            <Text>A basic card</Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
