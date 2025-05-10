import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants' 

const HowItWorks = () => {
    return (
        <section className='min-h-[90vh] py-20 w-screen gap-6 text-center flex flex-col justify-center' id='howItWorks'>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='md:w-[55%]  mx-auto '>
                <h1 className='text-4xl font-semibold mb-4 text-gray-900'>How It Works</h1>
                <span className='md:text-xl text-gray-800'>Our streamlined process makes selling your unused software licenses simple and profitable.</span>
            </motion.div>

            <div className="flex justify-center flex-wrap gap-6">

                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border text-center p-8 hover:shadow-lg px-4 flex flex-col hover:scale-105 items-center gap-4 border-gray-200 rounded-lg shadow-sm mx-10 md:mx-0 w-full max-w-sm">
                    <i className={`fa-solid fa-cloud-arrow-up text-3xl  p-4 rounded-full text-indigo-500 bg-indigo-100  mb-4`}></i>
                    <h3 className="text-xl">1. Upload License</h3>
                    <p className='text-gray-600'>Submit your software license details through our secure platform. We support all major software vendors.</p>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border text-center p-8 px-4 flex flex-col hover:shadow-lg hover:scale-105 items-center gap-4 border-gray-200 rounded-lg shadow-sm mx-10 md:mx-0 w-full max-w-sm">
                    <i className={`fa-solid fa-calculator text-3xl  p-4 rounded-full text-green-500 bg-green-100  mb-4`}></i>
                    <h3 className="text-xl">2. Get Valuation</h3>
                    <p className='text-gray-600'>Our AI-powered system instantly analyzes your license and provides a competitive market valuation.</p>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border text-center p-8 px-4 flex flex-col hover:shadow-lg hover:scale-105 items-center gap-4 border-gray-200 rounded-lg shadow-sm mx-10 md:mx-0 w-full max-w-sm">
                    <i className={`fa-solid fa-money-bill-wave text-3xl  p-4 rounded-full text-yellow-500 bg-yellow-100  mb-4`}></i>
                    <h3 className="text-xl">3. Get Paid</h3>
                    <p className='text-gray-600'>Accept our offer and receive payment within 48 hours via your preferred payment method.</p>
                </motion.div>
            </div>

        </section>
    )
}

export default HowItWorks;