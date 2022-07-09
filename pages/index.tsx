import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useDispatch } from 'react-redux'
import { getSampleData } from '../store/actions/repoAction'

const Home: NextPage = () => {
  const dispatch = useDispatch<any>()
  
  const [input, setInput] = useState('')

  const handlePress = (e: any) => {
    if (e.key === "Enter") {
      dispatch(getSampleData(input))
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>My Sooltan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder='Find User'
          className={styles.input}
          onKeyDown={handlePress}
        />
      </div>

      <main className={styles.main}>
        <div className={styles.card}>
          <h2>nama aplikasi</h2>
          <div className={styles.raw}>
            <p>bahasa</p>
            <p>last update</p>
          </div>
        </div>

        <div className={styles.card}>
          <h2>nama aplikasi</h2>
          <div className={styles.raw}>
            <p>bahasa</p>
            <p>last update</p>
          </div>
        </div>

        <div className={styles.card}>
          <h2>nama aplikasi</h2>
          <div className={styles.raw}>
            <p>bahasa</p>
            <p>last update</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
