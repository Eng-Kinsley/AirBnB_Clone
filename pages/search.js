import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { useRouter } from 'next/router'
import { format } from 'date-fns'
import InfoCard from './components/InfoCard'
import Map from './components/Map'


function Search({ data }) {
  const router = useRouter()

  //ES6 Destructuring
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = startDate ? format(new Date(startDate), "MM/dd/yyyy") : "";
  const formattedEndDate = endDate ? format(new Date(endDate), "MM/dd/yyyy") : "";

  const range = `${formattedStartDate} - ${formattedEndDate}`

  return (
    <div>
        <Header />

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ - { range } - Stays for { noOfGuests } guests</p>

                <h1 className='text-3xl  font-semibold mt-2 mb-6'>Stays in { location }</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More Filters</p>
                </div>
                <div className='flex flex-col'>
                  {data?.map(({img, location, title, description, star, price, total}) => (
                  <InfoCard key={img} img={img} location={location} title={title} description={description} star={star} price={price} total={total} />
                ))}
                </div>
            </section>

            <section className='hidden xl:inline-flex xl:min-w-[600px]'>
              <Map />
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  // Fetch data from external API
  const searchResults = await fetch(`https://www.jsonkeeper.com/b/5NPS`)
  const data = await searchResults.json()

  // Pass data to the page via props
  return {
    props: {
      data,
    }
  }
}