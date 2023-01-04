// [id].js: Next.jsが用意している特殊なファイル名. 
// 一つのファイルを異なるURLに対して割り当てることが可能 

import type { NextApiRequest, NextApiResponse } from 'next'
//
import auth from '../../../../utils/auth'
import connectDB from "../../../../utils/database"
import {Data} from "../../../../utils/types"
import {ItemModel} from "../../../../utils/schemaModels"



// アイテムを削除する
const deleteItem = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    try {
        await connectDB();
        // console.log(req.query.id)
        // const singleItem = await ItemModel.findById(req.query.id);
        await ItemModel.deleteOne({_id: req.query.id})
        return res.status(200).json({ message: "アイテム削除成功"})
    } catch (error) {
        return res.status(400).json({message: "アイテム削除失敗"})
    }

}

// auth.jsを通過させてから処理を行う
export default auth(deleteItem);