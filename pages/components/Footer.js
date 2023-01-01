import React from 'react'

function Footer() {
  return (
    <div className='bg-gray-100'>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 text-gray-600 max-w-7xl mx-auto '>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb Works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Email for Tech Services</p>
            <p>@kinsley@3aspire.com</p>
            <p>Not For Commercial Use</p>
            <p>Having fun</p>
            <p>Referrals Accepted</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>@Eng-Kinsley</p>
            <p>Presenting</p>
            <p>Airbnb Clone</p>
            <p>Feel Free To</p>
            <p>Use This Code</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Hello Kinsley</p>
            <p>Kaimenyi</p>
            <p>Great coding @Eng-Kinsley</p>
        </div>
    </div>
    </div>
  )
}

export default Footer