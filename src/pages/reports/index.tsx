import CardLink from '@/components/ui/CardLink';
import { Card, Text } from '@nextui-org/react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default function reports() {
  return (
    <div style={{ padding: '24px' }}>
      <div style={{ padding: '12px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
        <Card css={{ mw: '400px' }} variant='bordered'>
          <Card.Body style={{ display: 'flex', gap: '12px' }}>
            <CardLink />
            <CardLink />
            <CardLink />
            <CardLink />
            <CardLink />
            <CardLink />
          </Card.Body>
        </Card>
        <Card css={{ mw: '400px' }} variant='bordered'>
          <Card.Body style={{ display: 'flex', gap: '12px' }}>
            <CardLink />
            <CardLink />
            <CardLink />
            <CardLink />
            <CardLink />
            <CardLink />
          </Card.Body>
        </Card>
        <Card css={{ mw: '400px' }} variant='bordered'>
          <Card.Body style={{ display: 'flex', gap: '12px' }}>
            <CardLink />
            <CardLink />
            <CardLink />
            <CardLink />
            <CardLink />
            <CardLink />
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
