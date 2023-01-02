import type { NextApiRequest, NextApiResponse } from 'next'
//
import connectDB from "../../../utils/database"
import {ItemModel} from "../../../utils/schemaModels"

interface Data {
  message: string;
  allItems?: {}; // 変数名?：あってもなくても構わない変数
}

// アイテムを全て読み取る
const getAllItems = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    try {
        await connectDB();
        const allItems = await ItemModel.find();
        return res.status(200).json({ message: "アイテム読み取り成功 (All)", allItems: allItems})
    } catch (error) {
        return res.status(400).json({message: "アイテム読み取り失敗 (All)"})
    }

}
export default getAllItems;