import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default function dashboard() {
  return <div style={{ height: '80vh' }}>Hello from the other side</div>;
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
