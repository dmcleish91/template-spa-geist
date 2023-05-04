import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '@/lib/db';

type Data = {
  status: string;
  user: any;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { uid } = req.query;

  const user = await db.users.findUnique({
    where: {
      email: uid as string,
    },
  });

  if (!user) {
    res.status(200).json({ status: 'error', user: null });
  } else {
    res.status(200).json({ status: 'success', user: user });
  }
}
