import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        company: '',
        license: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!formData.company.trim()) newErrors.company = "Company Name is required.";
        if (!formData.license.trim()) newErrors.license = "License Type is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Form submitted:", formData);
            // Submit logic here (API or Email)
        }
    };

    return (
        <section className='py-20 bg-gray-50 w-screen text-center flex flex-col items-center justify-center' id='Contact'>
            <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className='w-[55%] mx-auto '
            >
                <h1 className='text-4xl mb-4 font-semibold text-gray-800'>Get Started Today</h1>
                <span className='text-xl text-gray-600'>
                    Fill out the form below to get an instant valuation for your software licenses.
                </span>
            </motion.div>

            <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.7 }}
                className='flex md:rounded-xl overflow-hidden md:h-[80vh] flex-col items-center md:flex-row md:max-w-[65%] shadow-md mt-8'
            >
                {/* Contact Information Block */}
                <div className='md:w-[40%] bg-blue-500 h-full gap-6 p-6 flex flex-col items-center text-white'>
                    <h1 className='font-medium text-2xl'>Contact Information</h1>
                    <div className='flex items-center w-[80%] gap-4 text-left'>
                        <i className="fa-regular fa-envelope text-sm p-3 rounded-full bg-blue-400"></i>
                        <div>
                            <span className='text-sm text-blue-200'>Email</span><br />
                            <a href="mailto:support@softsell.com">support@softsell.com</a>
                        </div>
                    </div>
                    <div className='flex items-center w-[80%] gap-4 text-left'>
                        <i className="fa-solid fa-phone text-sm p-3 rounded-full bg-blue-400"></i>
                        <div>
                            <span className='text-sm text-blue-200'>Phone</span><br />
                            <a href="tel:+919876543210">+91 9876543210</a>
                        </div>
                    </div>
                    <div className='flex items-center w-[80%] gap-4 text-left'>
                        <i className="fa-solid fa-location-dot text-sm p-3 rounded-full bg-blue-400"></i>
                        <div>
                            <span className='text-sm text-blue-200'>Address</span><br />
                            <span>123 Abc Building, Xyz Road, Lucknow, India</span>
                        </div>
                    </div>
                    <div className='flex flex-col items-start w-[80%] gap-4 text-left'>
                        <span>Follow us</span>
                        <span className='flex gap-4'>
                            <a href="#" className='px-3 py-2 rounded-full bg-blue-400'><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#" className='px-3 py-2 rounded-full bg-blue-400'><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#" className='px-4 py-2 rounded-full bg-blue-400'><i className="fa-brands fa-facebook-f"></i></a>
                        </span>
                    </div>
                </div>

                {/* Form Block */}
                <form onSubmit={handleSubmit} className='bg-white text-gray-700 p-11 md:w-[60%] flex flex-wrap gap-x-10 gap-y-5 py-6 justify-center'>
                    {["fullName", "email", "company", "license"].map((field) => (
                        <div key={field} className='flex flex-col w-full md:max-w-[200px] text-left'>
                            <label htmlFor={field} className='mb-1 capitalize'>{field === "license" ? "License Type" : field.replace("Name", " Name")}</label>
                            <input
                                id={field}
                                type={field === "email" ? "email" : "text"}
                                value={formData[field]}
                                onChange={handleChange}
                                className={`p-2 rounded-sm border ${errors[field] ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors[field] && <span className='text-red-500 text-sm'>{errors[field]}</span>}
                        </div>
                    ))}
                    <div className='flex flex-col w-full text-left'>
                        <label htmlFor="message" className='mb-1'>Message</label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`p-2 w-full resize-none h-[200px] rounded-sm border ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.message && <span className='text-red-500 text-sm'>{errors.message}</span>}
                    </div>
                    <button type="submit" className='w-full cursor-pointer bg-blue-500 p-2 rounded-lg text-lg text-white'>Get Instant Valuation</button>
                </form>
            </motion.div>
        </section>
    );
};

export default ContactForm;
