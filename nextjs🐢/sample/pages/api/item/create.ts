import { Herr_Von_Muellerhoff } from '@next/font/google'
import type { NextApiRequest, NextApiResponse } from 'next'
//
import connectDB from "../../../utils/database"
import {ItemModel} from "../../../utils/schemaModels"

interface Data {
  message: string;
  reqBody?: {};
}

const createItem = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    try {
        await connectDB();
        const reqBody = req.body;
        await ItemModel.create(req.body)  //ItemModelに格納されているcreate()がDBへの書き込みを行う
        return res.status(200).json({ message: "アイテム作成成功", reqBody: reqBody})
    } catch (error) {
        return res.status(400).json({message: "アイテム作成失敗"})
    }

}

export default createItem;