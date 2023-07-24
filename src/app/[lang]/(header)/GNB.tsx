import React from 'react'
import Link from 'next/link'
import styles from './gnb.module.scss'
import ScrollEvents from './ScrollEvents'
import ko from '@/../dictionaries/en'
export type Dictionary = typeof ko.header

const ids = ['nav-about', 'nav-product', 'nav-careers', 'nav-news-room', 'nav-contact']

type Props = {
  lang: string
  dictionary: Dictionary
}

const GNB = ({ lang, dictionary }: Props) => {
  return (
    <nav className={styles.gnb}>
      <ul className="nav-about">
        <li className="title">
          <Link id="nav-about" className={styles.link} href={`/${lang}/`}>
            {dictionary.about}
          </Link>
        </li>
        <li className={styles.sub}>
          <Link id="nav-company" className={styles.link} href={`/${lang}/#company`}>
            기업소개
          </Link>
          <Link id="nav-technology" className={styles.link} href={`/${lang}/#technology`}>
            AI기술
          </Link>
          <Link id="nav-history" className={styles.link} href={`/${lang}/#history`}>
            연혁
          </Link>
        </li>
      </ul>
      <ul className="nav-product">
        <li className="title">
          <Link id="nav-product" className={styles.link} href={`/${lang}/product`}>
            Product
          </Link>
        </li>
        <li className={styles.sub}>
          <Link id="nav-stepin" className={styles.link} href={`/${lang}/stepin`}>
            STEPIN
          </Link>
        </li>
      </ul>
      <ul className="nav-careers">
        <li className="title">
          <Link id="nav-careers" className={styles.link} href={`/${lang}/careers`}>
            Careers
          </Link>
        </li>
        <li className={styles.sub}>
          <Link id="인재채용" className={styles.link} href={`/${lang}/인재채용`}>
            인재채용
          </Link>
        </li>
      </ul>
      <ul className="nav-news-room">
        <li className="title">
          <Link id="nav-news-room" className={styles.link} href={`/${lang}/newsroom`}>
            News Room
          </Link>
        </li>
        <li className={styles.sub}>
          <Link id="기업소식" className={styles.link} href={`/${lang}/기업소식`}>
            기업소식
          </Link>
          <Link id="IR 공지" className={styles.link} href={`/${lang}/ir`}>
            Contact
          </Link>
        </li>
      </ul>
      <ul className="nav-contact">
        <li className="title">
          <Link id="nav-contact" className={styles.link} href={`/${lang}/contact`}>
            Contact
          </Link>
        </li>
        <li className={styles.sub}>
          <Link id="find" className={styles.link} href={`/${lang}/인재채용`}>
            인재채용
          </Link>
          <Link id="찾아오시는 길" className={styles.link} href={`/${lang}/contact`}>
            Contact
          </Link>
        </li>
      </ul>
      <ScrollEvents />
    </nav>
  )
}

export default GNB
