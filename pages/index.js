import Head from 'next/head'

//-----------------------------------------------
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import styles from '@/styles/Home.module.css'

import styled from 'styled-components'
import Card from '@/comps/Card'


export default function Home() {
  return (
      <Caixa>
        <Card 
          image="/img/card1.png"
          title="Card 1"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />

        <Card 
          image="/img/card2.jpg"
          title="Card 2"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />

        <Card 
          image="/img/card3.jpg"
          title="Card 3"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
      </Caixa>
  )
}


const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4em;
    gap: 2em;

    @media screen and (min-width:600px){
      width: 60%;
      margin: 0 auto;
    }

    @media screen and (min-width:1024px){
      flex-direction: row;
      width: 80%;
      margin: 0 auto;
      gap: 3em;
    }
`;

