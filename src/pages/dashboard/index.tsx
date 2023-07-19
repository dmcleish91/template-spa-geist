import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default function dashboard() {
  return <div>Todo Make Dashboard</div>;
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
