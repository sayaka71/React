import type { NextApiRequest, NextApiResponse } from 'next'
//
import connectDB from "../../../utils/database"
import {UserModel} from "../../../utils/schemaModels"
import { Data } from '../../../utils/types'

// ユーザー登録
const registerUser = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    try {
        await connectDB();
        const reqBody = req.body;
        await UserModel.create(req.body)  //UserModelに格納されているcreate()がDBへの書き込みを行う
        return res.status(200).json({ message: "ユーザー登録成功", item: reqBody})
    } catch (error) {
        return res.status(400).json({message: "ユーザー登録失敗"})
    }

}

export default registerUser;