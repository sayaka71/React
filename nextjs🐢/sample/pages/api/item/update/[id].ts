// [id].js: Next.jsが用意している特殊なファイル名. 
// 一つのファイルを異なるURLに対して割り当てることが可能 

import type { NextApiRequest, NextApiResponse } from 'next'
//
import auth from '../../../../utils/auth'
import connectDB from "../../../../utils/database"
import {Data} from "../../../../utils/types"
import {ItemModel} from "../../../../utils/schemaModels"



// アイテムを編集する
const updateItem = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    console.log(req.body);
    try {
        await connectDB();
        // const singleItem = await ItemModel.findById(req.query.id);
        await ItemModel.updateOne({_id: req.query.id}, req.body)
        return res.status(200).json({ message: "アイテム編集成功"})
    } catch (error) {
        return res.status(400).json({message: "アイテム編集失敗"})
    }
}

// auth.jsを通過させてから処理を行う
export default auth(updateItem);