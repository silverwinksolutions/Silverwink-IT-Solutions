import React from 'react'
import Navbar from '../components/Navbar'
import PageWrapper from '../components/PageWrapper'
import career3 from '../assets/career3.jpg'

const Career = () => {
    return (
        <PageWrapper>
            <div>
                <Navbar />
                <div className='bg-black h-[87vh] text-white'>
                    <div className='relative h-full flex justify-center' >
                        <img className='w-full h-full object-cover' src={career3} alt="" />
                        <div className='absolute top-10 text-5xl bg-black/20 rounded-full py-3 px-4 text-white text-center font-semibold'>Join Our Team</div>
                    </div>
                </div>
                <div className=''>
                    here 
                </div>
            </div>
        </PageWrapper>
    )
}

export default Career
