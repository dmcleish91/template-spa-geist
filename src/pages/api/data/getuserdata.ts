import { User } from '@/context/UserContext';
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ status: string; user: User | null }>) {
  if (req.method !== 'POST') {
    return res.status(400).json({ status: 'Method Not Allowed - Error', user: null });
  }

  const { email } = req.body;
  const prisma = new PrismaClient();
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });

  prisma.$disconnect();

  if (!user) {
    res.status(200).json({ status: 'error', user: null });
  } else {
    const loggedInUser = {
      id: user?.id,
      name: user?.first + ' ' + user?.last,
      email: user?.email,
    };
    res.status(200).json({ status: 'success', user: loggedInUser });
  }
}
