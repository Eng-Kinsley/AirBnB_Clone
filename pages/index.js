import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import Banner from './components/Banner'
import SmallCard from './components/SmallCard'
import MediumCard from './components/MediumCard'
import LargeCard from './components/LargeCard'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts, respond }) {
  return (
    <>
      <Head>
        <title>airbnb_kinsley</title>
        <meta name="description" content="This is our AirBnB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/* pull some data from a server - API endpoints. */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {posts?.map((item) => (
           <SmallCard key={item.img} img={item.img} location={item.location} distance={item.distance} /> 
          ))}
          </div>

        {/**
         * or we can destructure our code
         * {posts?.map(({img, distance, location}) => (
           <SmallCard key={img} img={img} location={location} distance={distance} /> 
          ))}
         */}
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

          {/**when we edit here, we edit the container where the cards are placed */}
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {/**Pull cardsData data from an API endpoint */}
          {respond?.map(({img, title}) => (
            <MediumCard key={img} img={img} title={title} />
          ))}
          </div>
        </section>

        <LargeCard img='https://links.papareact.com/4cj'
        title='The Greatest Outdoors'
        description='Wishlists curated by Airbnb.'
        buttonText="Get Inspired"
        />

      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G')
  const posts = await res.json()

  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT')
  const respond = await cardsData.json()

  return {
    props: {
      posts,
      respond,
    },
  }
}