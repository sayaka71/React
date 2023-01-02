// pages/api/Herr_Von_Muellerhoff.ts
import { Herr_Von_Muellerhoff } from '@next/font/google'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  date: number | string
}

const hello = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  res.status(200).json({ message: "Hello", date: "It's Friday."});
}

export default hello;