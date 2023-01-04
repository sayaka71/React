// jsonwebtokenでトークンを発行し，有効性を検証する
// jwt.sign(ペイロード，シークレットキー，有効期限)
// ペイロードとはトークンに含ませたいデータ（一般的にはユーザー名やメアド）
import jwt from 'jsonwebtoken'  // npm install jsonwebtoken @types/jsonwebtoken
import type { NextApiRequest, NextApiResponse } from 'next'
import { SystemConst } from '../../../utils/const'
//
import connectDB from "../../../utils/database"
import {UserModel} from "../../../utils/schemaModels"
import { Data } from '../../../utils/types'

const loginUser = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    try {
        await connectDB();
        const savedUserData = await UserModel.findOne({email: req.body.email});  //findOne()でemailを元にユーザー情報を見つける
        if (savedUserData) {
            // ユーザーデータが存在するとき
            if (req.body.password === savedUserData.password) {
                // パスワードが正しいとき
                // ペイロード
                const payload = {email: req.body.email, name: savedUserData.name};
                // トークンを発行する（有効期限24h）
                const token = jwt.sign(payload, SystemConst.Login.secretKey, {expiresIn: "24h"})
                return res.status(200).json({ message: "ログイン成功", item: [savedUserData, token]})
            }else{
                // パスワードが間違っているとき
                return res.status(400).json({message: "ログイン失敗: パスワードが間違っています"})
            }
        }else{
            // ユーザーデータが存在しないとき
            return res.status(400).json({message: "ログイン失敗: ユーザー登録をしてください"})
        }
    } catch (error) {
        return res.status(400).json({message: "ログイン失敗"})
    }

}

export default loginUser;