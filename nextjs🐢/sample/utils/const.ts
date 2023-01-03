// システム定数定義クラス
export namespace SystemConst {
    // サーバー
    export namespace Server {
        // IPアドレス (localhostのままで公開しないこと)
        export const hostURL = "http://localhost:3000/";
        // DBアドレス (mongodb+srv://<user>:<password>@cluster0.kflyuot.mongodb.net/?retryWrites=true&w=majority)
        export const dbURL = "mongodb+srv://kanai:mongo-pwd@cluster0.kflyuot.mongodb.net/?retryWrites=true&w=majority";
    }
}