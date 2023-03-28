
import React from 'react';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Navbar } from '../Navbar';
import styles from "./MAinLayout.module.css";

const inter = Inter({ subsets: ['latin'] })

const MainLayout = ({children}) => {
 return (
    <>
      <Head>
        <title> Home - yomar </title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main} >
        {children}
      </main>
    </>
  )
}

export default MainLayout
