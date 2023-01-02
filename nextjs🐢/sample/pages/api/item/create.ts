import { Herr_Von_Muellerhoff } from '@next/font/google'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const createItem = (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    console.log(req.body.title);
    console.log('hello')
    res.status(200).json({ message: "アイテム作成"})
}

export default createItem;