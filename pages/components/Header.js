import React from 'react'
import Image from 'next/image'
import {
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon, 
  MagnifyingGlassIcon,
 } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className='fixed top-0 left-0 right-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
    {/**left */}
    <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
    </div>

    {/**middle- search*/}
    <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
      <input className='pl-5 transparent outline-none bg-white text-sm text-gray-600 flex-grow placeholder-gray-400' 
      type="text" 
      placeholder='Start your search now' />
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
    </header>
  )
}

export default Header