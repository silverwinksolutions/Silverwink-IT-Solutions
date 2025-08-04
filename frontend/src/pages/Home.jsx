import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import PageWrapper from '../components/PageWrapper'

const Home = () => {
  return (
    <PageWrapper>
      <div className='select-none'>
        <Navbar />
        <Hero />
        <Testimonials />
        <Footer />
      </div>
    </PageWrapper>
  )
}

export default Home
