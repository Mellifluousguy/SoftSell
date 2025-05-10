import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const HeroSection = () => {
  return (
    <div className='md:min-h-screen relative bg-cover bg-center' style={{ backgroundImage: "url('/bg-softsell.webp')" }}>
      <div className='absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent'></div>
      <div className="h-screen flex flex-col gap-4 md:w-[50%] md:mt-[10vh] justify-center mx-12  relative z-2">
        <motion.h1
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='text-6xl font-semibold text-gray-800'>Turn Unused Software into Profit</motion.h1>
        <motion.p
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='text-2xl text-gray-700'>Sell your unused software licenses quickly, securely, and for the best price on the market.</motion.p>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}

        >
          <a href="#Contact"><button className='py-3 cursor-pointer px-8 text-lg rounded-md text-white mr-4 md:w-fit w-full bg-blue-500 mb-2'>Sell my Liceses</button></a>
          <button className='py-3 px-8 text-lg rounded-md text-gray-800 border md:w-fit w-full bg-gray-100 border-gray-400'>Learn More</button>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up stagger-delay-3  ">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              <img src="https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%2C%20headshot%2C%20corporate%20attire%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=2&orientation=squarish" alt="User" class="w-10 h-10 rounded-full border-2 border-white object-cover object-top" />
              <img src="https://readdy.ai/api/search-image?query=professional%20business%20man%20portrait%2C%20headshot%2C%20corporate%20attire%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=3&orientation=squarish" alt="User" class="w-10 h-10 rounded-full border-2 border-white object-cover object-top" />
              <img src="https://readdy.ai/api/search-image?query=young%20professional%20woman%20portrait%2C%20headshot%2C%20casual%20business%20attire%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=4&orientation=squarish" alt="User" class="w-10 h-10 rounded-full border-2 border-white object-cover object-top" />
            </div>
            <span className="ml-4 text-gray-700">Trusted by 1,000+ companies</span>
          </div>
          <div className="flex items-center">
            <div className="flex text-yellow-400">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div>
            <span className="ml-2 text-gray-700">4.8/5 rating</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
