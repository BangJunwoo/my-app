'use client'
import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import styled from 'styled-components'

type Children = JSX.Element | string

type Props = {
  children: Children[] | Children
}

export const Details = ({ children }: Props) => {
  return <DetailsEl>{children}</DetailsEl>
}

export const Summary = ({ children }: Props) => {
  return <SummaryEl>{children}</SummaryEl>
}

type FAQ = {
  title: string
}
export const FAQ = ({ children, title }: Props & FAQ) => {
  return (
    <DetailsEl>
      <SummaryEl>{title}</SummaryEl>
      <Contents>{children}</Contents>
    </DetailsEl>
  )
}

const DetailsEl = styled.details`
  border: 1px solid #ccc;
  margin: 1rem;
  & summary {
    position: relative;
    display: flex;
    align-items: center;
    ::marker {
      content: '🍏 ';
    }
    ::after {
      content: '+';
      position: absolute;
      right: 1rem;
      font-size: 2rem;
    }
  }
  &[open] summary {
    ::marker {
      content: '🍎 ';
    }
    ::after {
      content: '-';
      position: absolute;
      right: 1rem;
      font-size: 2rem;
    }
  }
`

const SummaryEl = styled.summary`
  border: 1px solid #a24848;
  padding: 0.5rem 1rem;
`

const Contents = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
