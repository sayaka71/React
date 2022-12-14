import type { NextApiRequest, NextApiResponse } from 'next'
//
import auth from '../../../utils/auth'
import connectDB from "../../../utils/database"
import {ItemModel} from "../../../utils/schemaModels"
import { Data } from '../../../utils/types'

const createItem = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    try {
        await connectDB();
        const reqBody = req.body;
        await ItemModel.create(req.body)  //ItemModelに格納されているcreate()がDBへの書き込みを行う
        return res.status(200).json({ message: "アイテム作成成功", item: reqBody})
    } catch (error) {
        return res.status(400).json({message: "アイテム作成失敗"})
    }

}

// auth.jsを通過させてから処理を行う↓
export default auth(createItem);