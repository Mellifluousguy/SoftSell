import React from 'react'
import './App.css'
import HeroSection from './AllFiles/HeroSection'
import HowItWorks from './AllFiles/HowItWorks'
import Benefits from './AllFiles/Benefits'
import Testimonials from './AllFiles/Testimonials'
import ContactForm from './AllFiles/ContactForm'
import Footer from './AllFiles/Footer'

const App = () => {
  return (
    <>
      <nav className='md:fixed sticky z-3 top-0 w-screen flex md:flex-row gap-2 flex-col justify-around items-center bg-white py-4 shadow-sm'>
        <a href="#" className={`!font-['Pacifico'] bg-red text-blue-500 text-2xl`}>SoftSell</a>
        <div className='flex justify-between gap-4 md:w-[30%] text-gray-700'>
          <a href="#howItWorks" >How It Works</a>
          <a href="#Benefits" >Benefits</a>
          <a href="#Testimonials" >Testimonials</a>
          <a href="#Contact" >Contact</a>
        </div>
        <a href="#Contact" className='px-4 cursor-pointer py-2 rounded-sm bg-blue-500 text-white'>Get Started</a>
      </nav>
      <HeroSection />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App