import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
      {
        company: 'Ethiopost (Fullstack developer and IT expert)',
        period: '2024 - Present',
        description: 'Developed a training platform using PostgreSQL, Express.js, and React, enabling trainee assessments, progress tracking, and admin management.',
      },
      {
        company: 'Kuraz tech (Fullstack dev)',
        period: '2022 - 2024',
        description: 'Seket - a recently released platform, handling both frontend and backend development to ensure a seamless user experience and robust functionality. Most of the time i handled the backend side.',
      },
]


const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience