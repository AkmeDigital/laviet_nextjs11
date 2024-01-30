import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import yaml from 'js-yaml';

import pageContent from "../site/home.yml";


export default function Home() {
  // destructure.
  const { about, address, hours, contact, menu_philosophy, menu, order_online_link, book_online_link } = pageContent;


  console.log('hello')
  console.log(pageContent)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>

        <div>{about}</div>
        <div>{address}</div>
        <div>{hours}</div>
        <div>{contact}</div>
        <div>{menu_philosophy}</div>
        <div>{menu}</div>
        <div>{order_online_link}</div>
        <div>{book_online_link}</div>


      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
