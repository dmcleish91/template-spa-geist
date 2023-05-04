import { verifyPassword } from '@/lib/auth-utils';
import { NextAuthOptions } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import { db } from '@/lib/db';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialProvider({
      type: 'credentials',
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as { email: string; password: string };

        const user = await db.users.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) {
          throw new Error('No user with that email exists');
        }

        const passwordMatch = verifyPassword(password, user.password);

        if (!passwordMatch) {
          throw new Error('Password is incorrect');
        }

        return { id: user.id.toString(), email: email, name: user.first + ' ' + user.last };
      },
    }),
  ],
};
