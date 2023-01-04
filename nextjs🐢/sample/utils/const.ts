// システム定数定義クラス
export namespace SystemConst {
    // サーバー
    export namespace Server {
        // IPアドレス (localhostのままで公開しないこと)
        // export const hostURL = "http://localhost:3000/";
        export const hostURL = "https://nextjs-phi-lilac-78.vercel.app/";
        // DBアドレス (mongodb+srv://<user>:<password>@cluster0.kflyuot.mongodb.net/?retryWrites=true&w=majority)
        export const dbURL = "mongodb+srv://kanai:mongo-pwd@cluster0.kflyuot.mongodb.net/?retryWrites=true&w=majority";
    }
    // ログイン (トークン方式)
    export namespace Login {
        // シークレットキー
        export const secretKey = "nextjs";
    }
}