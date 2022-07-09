import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getSampleData } from '../store/actions/repoAction'

const Home: NextPage = () => {
  const dispatch = useDispatch<any>()

  const { repo }: any = useSelector((state: any) => state.repoData);

  const [input, setInput] = useState('')

  const handlePress = (e: any) => {
    if (e.key === "Enter") {
      dispatch(getSampleData(input))
    }
  }

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>My Sooltan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <div className={styles.input}>
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder='Find User'
            className={styles.inputForm}
            onKeyDown={handlePress}
          />
          <span className={styles.buttonSearch} onClick={() => dispatch(getSampleData(input))}>Search</span>
        </div>
        <Image 
        src={repo?.data?.length > 0 ? 
          repo?.data[0]?.owner?.avatar_url : 
          "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}
          alt="Vercel Logo"
          onClick={() => openInNewTab(repo?.data[0]?.owner?.html_url)}
          width={40}
          height={40}
          style={{ borderRadius: '50px', cursor: 'pointer' }}
        />
      </div>

      <main className={styles.main}>
        {
          repo?.data?.length ?
            repo?.data?.map((item: {
              id: number,
              name: string,
              language: string,
              updated_at: any,
              html_url: string,
            },
              index: number) => {
              return (
                <div key={index} className={styles.card}>
                  <span onClick={() => openInNewTab(item?.html_url)} className={styles.title}>{item?.name}</span>
                  <div className={styles.row}>
                    <span>language: {item?.language} </span>
                    <span className={styles.description}>updated: {item?.updated_at.split('T')[0]}</span>
                  </div>
                </div>
              )
            })
            :
            input.length > 0 && repo?.data?.length <= 0 || repo?.data?.message === 'Not Found' ?
              <div className="">
                <h2>User Not Found!</h2>
              </div>
              :
              <div className="">
                <h2>Please search for user</h2>
              </div>
        }
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
