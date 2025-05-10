import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Benefits = () => {
    return (
        <section className='min-h-[90vh] py-20 bg-gray-50 w-screen gap-6 text-center flex flex-col justify-center' id='Benefits'>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='md:w-[55%] mx-auto '>
                <h1 className='text-4xl mb-4 font-semibold text-gray-800'>Why Choose SoftSell</h1>
                <span className='md:text-xl text-gray-600'>We provide the most efficient and secure way to sell your unused software licenses.</span>
            </motion.div>

            <div className="flex justify-center flex-wrap md:mx-24 my-2 gap-6">

                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border text-left py-8 px-4 hover:shadow-lg hover:scale-105 bg-white flex flex-col items-start gap-2 border-gray-100 rounded-lg shadow-sm w-full mx-10 md:mx-0  md:max-w-[250px]">
                    <i className={`fa-regular fa-clock text-xl  p-3 rounded-full text-indigo-500 bg-indigo-100  mb-2`}></i>
                    <h3 className="text-lg">Instant Valuation</h3>
                    <p className='text-gray-600' >Get an accurate market valuation for your software licenses in less than 60 seconds.</p>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border text-left p-8 px-4 hover:shadow-lg hover:scale-105 bg-white flex flex-col items-start gap-2 border-gray-100 rounded-lg shadow-sm w-full mx-10 md:mx-0  md:max-w-[250px]">
                    <i className={`fa-solid fa-shield-halved text-xl  p-3 rounded-full text-green-500 bg-green-100 mb-2`}></i>
                    <h3 className="text-lg">100% Secure</h3>
                    <p className='text-gray-600'>Bank-level encryption and secure transfer protocols protect your data and transactions.</p>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border text-left p-8 px-4 hover:shadow-lg hover:scale-105 bg-white flex flex-col items-start gap-2 border-gray-100 rounded-lg shadow-sm w-full mx-10 md:mx-0  md:max-w-[250px]">
                    <i className={`fa-brands fa-bitcoin text-xl  p-3 rounded-full text-yellow-500 bg-yellow-100  mb-2`}></i>
                    <h3 className="text-lg">Best Market Rates</h3>
                    <p className='text-gray-600'>Our extensive network of buyers ensures you get the highest possible value for your licenses.</p>
                </motion.div>
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border text-left p-8 px-4 hover:shadow-lg hover:scale-105 bg-white flex flex-col items-start gap-2 border-gray-100 rounded-lg shadow-sm w-full mx-10 md:mx-0  md:max-w-[250px]">
                    <i className={`fa-solid fa-headset text-xl  p-3 rounded-full text-indigo-600 bg-indigo-100  mb-2`}></i>
                    <h3 className="text-lg">Dedicated Support</h3>
                    <p className='text-gray-600'>Our expert team is available 24/7 to assist you throughout the selling process</p>
                </motion.div>
            </div>

        </section>
    )
}

export default Benefits