import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ status: string; userExists: boolean }>) {
  if (req.method !== 'POST') {
    return res.status(400).json({ status: 'Method Not Allowed - Error', userExists: false });
  }

  const { email } = req.body;
  const prisma = new PrismaClient();
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    prisma.$disconnect();
    res.status(200).json({ status: 'error', userExists: false });
  } else {
    prisma.$disconnect();
    res.status(200).json({ status: 'success', userExists: true });
  }
}
