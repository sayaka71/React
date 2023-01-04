// ログイン状態を判定するミドルウェア
// auth.jsを通過させてから「作成」「修正」「削除」の処理を行う

import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from 'jsonwebtoken';
//
import { Data, DecodedTokenType } from "./types";
import { SystemConst } from "./const";

const auth = (handler: Function) => {
    return async(req: NextApiRequest,res: NextApiResponse<Data>) => {
        // GETメソッドのときはauthの処理をしない
        if (req.method === "GET") {
            return handler(req, res);
        }
        // フロントエンドがリクエストを送る際，Local Storageからトークンを取り出して，
        // HTTP headersにトークンが格納される。
        // const token: string |undefined = await req.headers.authorization?.split(" ")[1];
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYXJsaWVfcHV0aEBnbWFpbC5jb20iLCJuYW1lIjoi44OB44Oj44O844Oq44O844O744OX44O844K5IiwiaWF0IjoxNjcyODExMzg1LCJleHAiOjE2NzI4OTc3ODV9._ugZJkUGaJgyjedSIZ5JvznpHH-kc1UYCNVSadPfD9o";
        if (!token) {
            // トークンが存在しないとき
            return res.status(401).json({message: "トークンがありません"})
        }
        // トークンが存在するとき
        try {
            // トークンが正しいか判定
            const decodedToken = jwt.verify(token, SystemConst.Login.secretKey);
            // ログインしているユーザーのemailとnameを格納する
            req.body.email = (decodedToken as DecodedTokenType).email;
            req.body.name = (decodedToken as DecodedTokenType).name;
            return handler(req, res);
        } catch (error) {
            return res.status(401).json({message: "トークンが正しくないのでログインしてください"})
        }
    }
}

export default auth;