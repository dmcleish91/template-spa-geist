import { db } from '@/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ status: string; userExists: boolean }>) {
  if (req.method !== 'POST') {
    return res.status(400).json({ status: 'Method Not Allowed - Error', userExists: false });
  }

  const { email } = req.body;
  const user = await db.users.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    res.status(200).json({ status: 'error', userExists: false });
  } else {
    res.status(200).json({ status: 'success', userExists: true });
  }
}
