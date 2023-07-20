'use client'

import React from 'react'
import Link from 'next/link'
import styles from './gnb.module.scss'
import { useParams } from 'next/navigation'

const ids = ['nav-about', 'nav-product', 'nav-careers', 'nav-news-room', 'nav-contact']

const GNB = () => {
  const { lang } = useParams()

  return (
    <nav className={styles.nav}>
      <ul className={styles.gnb}>
        <li className="nav-about">
          <div className="title">
            {/* <Link id="nav-about" className={styles.link} href={`${lang}/`}> */}
            <Link
              id="nav-about"
              className={styles.link}
              href={{
                pathname: '/',
                hash: 'hello',
              }}
            >
              About
            </Link>
          </div>
          <div className={styles.sub}>
            <Link id="nav-company" className={styles.link} href={`${lang}/#company`} prefetch={false}>
              기업소개<a href="test"> hello</a>
            </Link>
            <Link id="nav-technology" className={styles.link} href={`${lang}/#technology`}>
              AI기술
            </Link>
            <Link id="nav-history" className={styles.link} href={`${lang}/#history`}>
              연혁
            </Link>
          </div>
        </li>
        <li className="nav-product">
          <div className="title">
            <Link id="nav-product" className={styles.link} href={`${lang}/product`}>
              Product
            </Link>
          </div>
          <div className={styles.sub}>
            <Link id="stepin" className={styles.link} href={`${lang}/stepin`}>
              STEPIN
            </Link>
          </div>
        </li>
        <li className="nav-careers">
          <div className="title">
            <Link id="nav-careers" className={styles.link} href={`${lang}/careers`}>
              Careers
            </Link>
          </div>
          <div className={styles.sub}>
            <Link id="인재채용" className={styles.link} href={`${lang}/인재채용`}>
              인재채용
            </Link>
          </div>
        </li>
        <li className="nav-news-room">
          <div className="title">
            <Link id="nav-news-room" className={styles.link} href={`${lang}/newsroom`}>
              News Room
            </Link>
          </div>
          <div className={styles.sub}>
            <Link id="기업소식" className={styles.link} href={`${lang}/기업소식`}>
              기업소식
            </Link>
            <Link id="IR 공지" className={styles.link} href={`${lang}/ir`}>
              Contact
            </Link>
          </div>
        </li>
        <li className="nav-contact">
          <div className="title">
            <Link id="nav-contact" className={styles.link} href={`${lang}/contact`}>
              Contact
            </Link>
          </div>
          <div className={styles.sub}>
            <Link id="find" className={styles.link} href={`${lang}/인재채용`}>
              인재채용
            </Link>
            <Link id="찾아오시는 길" className={styles.link} href={`${lang}/contact`}>
              Contact
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default GNB
