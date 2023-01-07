import React, { useState } from 'react'
import Image from 'next/image'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon, 
  MagnifyingGlassIcon,
 } from '@heroicons/react/24/solid'
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


function Header() {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoofGuests] = useState(1)
  const router = useRouter()

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput("")
  }

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString,
        endDate: endDate.toISOString,
        noOfGuests,
      }
    })
  }

  const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    }

  

    {/**This is from the documentation */}
    {/**const handleSelect = (ranges) => {
      console.log(ranges)
    }

    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    } */}

  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
    {/**left */}
    <div
    onClick={() => router.push('/')} 
    className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
    </div>

    {/**middle- search*/}
    <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
      <input
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      className='pl-5 transparent outline-none bg-white text-sm text-gray-600 flex-grow placeholder-gray-400' 
      type="text" 
      placeholder = 'Start your search now' 
      />
      <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
    </div>

    {/**right */}
    <div className='flex items-center space-x-4 justify-end text-gray-400'>
      <p className='text-black cursor-pointer hidden md:inline'>Become a host</p>
      <GlobeAltIcon className='text-black h-6 cursor-pointer'/>

      <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
        <Bars3Icon className='h-6 cursor-pointer' />
        <UserCircleIcon className='h-6 cursor-pointer' />
      </div>
    </div>
    
    {/**only say hello world if the search input has a value. Some sort of test */}
    {/**{searchInput && (<h1>Hello world</h1>) }*/}
    {searchInput && (
      <div className='flex flex-col col-span-3 mx-auto'>
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleSelect}
          minDate={new Date()}
          rangeColors={['#FD5861']}
        />
        <div className='flex items-center border-b mb-4'>
          <h2 className='text-2xl flex-grow font-semibold'>Number of guests</h2>
          <UserCircleIcon className='h-5' />
          <input 
          type="number"
          value={noOfGuests}
          onChange={(e) => setNoofGuests(e.target.value)}
          min={1} 
          className='bg-white w-12 pl-2 text-lg outline-none text-red-400' 
          />
        </div>
        <div className='flex items-center'>
          <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
          <button onClick={search} className='text-red-400 flex-grow'>Search</button>
        </div>
      </div>
    )}

    {/**This is from the documentation */}
    {/**{searchInput && (
      <div>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={new Date()}
        rangeColors={['#FD5861']}
      />
      </div>
    )} */}
    
    </header>
  )
}

export default Header