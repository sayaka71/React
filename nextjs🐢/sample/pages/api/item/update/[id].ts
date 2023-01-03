// [id].js: Next.jsが用意している特殊なファイル名. 
// 一つのファイルを異なるURLに対して割り当てることが可能 

import type { NextApiRequest, NextApiResponse } from 'next'
//
import connectDB from "../../../../utils/database"
import {Data} from "../../../../utils/types"
import {ItemModel} from "../../../../utils/schemaModels"



// アイテムを全て読み取る
const updateItem = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    try {
        await connectDB();
        // console.log(req.query.id)
        const singleItem = await ItemModel.findById(req.query.id);
        return res.status(200).json({ message: "アイテム編集成功", item: singleItem})
    } catch (error) {
        return res.status(400).json({message: "アイテム編集失敗"})
    }

}
export default updateItem;