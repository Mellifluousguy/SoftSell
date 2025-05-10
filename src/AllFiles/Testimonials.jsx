import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Testimonials = () => {
    return (
        <section className='min-h-[90vh] py-20 w-screen gap-6 text-center flex flex-col justify-center' id='Testimonials'>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='md:w-[55%] mx-auto '>
                <h1 className='text-4xl font-semibold mb-4 text-gray-900'>What Our Customers Say</h1>
                <span className='md:text-xl text-gray-800'>Don't just take our word for it. Here's what our customers have to say about their experience with SoftSell.</span>
            </motion.div>

            <div className="flex justify-evenly  flex-wrap gap-6">

                <motion.div
                    variants={fadeIn("right", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border text-center p-8 hover:shadow-lg  flex flex-col hover:scale-105 items-center gap-6 border-gray-100 rounded-lg shadow-sm md:w-full w-[90%] max-w-xl">
                    <div className='flex items-center w-full text-left gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s" className='h-[65px] rounded-full w-[65px] object-cover' alt="" />
                        <div className='flex flex-col h-full gap-1 justify-center'>
                            <h4 className='font-semibold text-lg'>Emily Robertson</h4>
                            <p className=' text-gray-600'>It Director, TCS Technologies</p>
                            <span className='text-sm flex flex- gap-1 text-yellow-400'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <p className='text-gray-600 text-left'>"After our company downsized, we had dozens of unused software licenses. SoftSell made it incredibly easy to convert these assets back into capital. The valuation was fair, the process was smooth, and payment was received promptly. I highly recommend their service to any business looking to optimize their software expenses."</p>
                </motion.div>

                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border text-center p-8 flex flex-col hover:shadow-lg hover:scale-105 items-center gap-6 border-gray-100 rounded-lg shadow-sm md:w-full w-[90%] max-w-xl">
                    <div className='flex items-center w-full text-left gap-4'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s" className='h-[65px] rounded-full w-[65px] object-cover' alt="" />
                        <div className='flex flex-col h-full gap-1 justify-center'>
                            <h4 className='font-semibold text-lg'>Emily Robertson</h4>
                            <p className=' text-gray-600'>It Director, TCS Technologies</p>
                            <span className='text-sm flex gap-1 text-yellow-400'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </span>
                        </div>
                    </div>
                    <p className='text-gray-600 text-left'>"After our company downsized, we had dozens of unused software licenses. SoftSell made it incredibly easy to convert these assets back into capital. The valuation was fair, the process was smooth, and payment was received promptly. I highly recommend their service to any business looking to optimize their software expenses."</p>
                </motion.div>

            </div>

        </section>
    )
}

export default Testimonials