// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { UserContext } from '@/context/UserContext';
import { verifyPassword } from '@/libs/auth-utils';
import { PrismaClient } from '@prisma/client';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialProvider from 'next-auth/providers/credentials';
import { useContext } from 'react';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialProvider({
      type: 'credentials',
      credentials: {},
      authorize: async (credentials) => {
        const { email, password } = credentials as { email: string; password: string };

        const prisma = new PrismaClient();
        const user = await prisma.users.findUnique({
          where: {
            email: email,
          },
        });

        if (!user) {
          prisma.$disconnect();
          throw new Error('No user with that email exists');
        }

        const passwordMatch = verifyPassword(password, user.password);

        if (!passwordMatch) {
          prisma.$disconnect();
          throw new Error('Password is incorrect');
        }

        prisma.$disconnect();
        return { id: user.id.toString(), email: email, name: user.first + ' ' + user.last };
      },
    }),
  ],
};

export default NextAuth(authOptions);
