'use client'
//임시로 styled와 use client 사용 >> 서버 사이드를 위한 module.scss 사용으로 변환 필요
import styled from 'styled-components'
import Image from 'next/image'
import React from 'react'
import CompanyBox from './CompanyBox'
import { goToId } from '@/model/utilities/viewAction'
import { useRouter, useParams } from 'next/navigation'

type Props = {}

const index = (props: Props) => {
  const router = useRouter()
  const { lang } = useParams()
  return (
    <Company>
      <Warp>
        <Title id="company">싸이드워크 엔터테인먼트</Title>
        <BoxWarp>
          <CompanyBox
            src="/image/Technology.png"
            image="/image/Technology.svg"
            label="View more"
            title="Technology"
            onClick={() => goToId('technology')}
          />
          <CompanyBox
            src="/image/Product.png"
            image="/image/Product.svg"
            label="View more"
            title="Product"
            onClick={() => router.replace(`/${lang}/product`)}
          />
          <CompanyBox
            src="/image/Career.png"
            image="/image/Career.svg"
            label="View more"
            title="Career"
            onClick={() => router.replace(`/${lang}/career`)}
          />
        </BoxWarp>
      </Warp>
    </Company>
  )
}

export default index

const Title = styled.h2`
  color: #202020;
  font-family: var(--noto-sans-kr);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Company = styled.section`
  scroll-snap-stop: normal;
  scroll-snap-align: start;
  position: relative;

  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  background-color: white;
`

const Warp = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  gap: 160px;
`

const BoxWarp = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  img.icon {
    z-index: 100;
    transition-duration: 0.5s;
    transition-property: opacity, height;

    opacity: 1;
  }

  &:has(.company-box:hover) {
    img.icon {
      z-index: 100;
      transition-duration: 0.5s;
      transition-property: opacity, height;
      height: 0;
      opacity: 0;
    }
  }
`

const Box = styled.div`
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  flex-grow: 1;
  max-width: 720px;
  transition-duration: 0.5s;
  transition-property: flex-grow;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #202020;
    opacity: 1;
    transition-duration: 0.5s;
    transition-property: opacity;
  }
  :hover::after {
    opacity: 0.4;
  }
  :hover {
    flex-grow: 3;
  }

  label {
    color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    z-index: 10;

    font-family: var(--noto-sans-kr);
    text-align: center;
    font-size: 24px;
    transition: 0.5s font-size;
  }
  :hover {
    label {
      font-size: 40px;
    }
  }
`

const BoxIamge = styled(Image)`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
`
