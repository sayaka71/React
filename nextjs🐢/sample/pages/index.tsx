import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
//
import styles from '../styles/Home.module.css'
import { SystemConst } from '../utils/const'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>データ入力窓口</h1>
        <form action={SystemConst.Server.hostURL + "api/item/create"} method="post">
            日時：<input type="datetime-local" name="datetime"></input>
            タイトル：<input type="text" name="title"></input>
            イメージ：<input type="file" name="image" accept='image/*'></input>
            説明：<textarea name="description"></textarea>
            <button type="submit">投稿</button>
        </form>
        
        <h1>データ編集窓口</h1>
        <form action={SystemConst.Server.hostURL + "api/item/update/63b5022f3e40b8c1351a2556"} method="post">
            日時：<input type="datetime-local" name="datetime"></input>
            タイトル：<input type="text" name="title"></input>
            イメージ：<input type="file" name="image" accept='image/*'></input>
            説明：<textarea name="description"></textarea>
            <button type="submit">投稿</button>
        </form>
      </main>
    </>
  )
}
