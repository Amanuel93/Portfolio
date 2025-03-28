import React from 'react';
import project1 from "../assets/seketssss.png"
import project2 from "../assets/coin.png"
import project3 from "../assets/Screenshot 2024-12-10 004547 (2).png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Seket",
      description: "Exam platform that lets students prepared for entrance and exit exams. I participated as both Frontend and backend developer at kuraz tech. (Express js and React).",
      links: {
        site: "https://exam.kuraztech.com",
        github: "#",
      },
    },
    {
      img: project2,
      title: "coin gebya",
      description: "A platform on which individuals follow crypto coin valuations.(Next js and express js)",
      links: {
        site: "https://cryptoapibuiltbyaman.netlify.app",
      },
    },
    {
      img: project3,
      title: "POETS",
      description: "A Training Platform I developed for postoffice on which workers will training and their performance will be tested on. Currently, its not deployed yet.(Express js with Mongodb and Next js).",
      links: {
        site: "#",
        github: "#",
      },
    },
    
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio - Real Projects</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        {/* <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a> */}

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio