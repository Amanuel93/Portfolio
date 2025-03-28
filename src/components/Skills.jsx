import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
  DiPostgresql 
} from "react-icons/di"
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import Reveal from "./Reveal"

const skills = [
    // {
    //   category: 'Frontend',
    //   technologies: [
    //     { name: 'React', icon: <DiReact className='text-blue-500' /> },
    //     { name: 'Next Js', icon: <DiHtml5 className='text-orange-600' /> },
    //     { name: 'Typescript', icon: <DiJavascript1 className='text-yellow-500' /> },
    //   ],
    // },
    {
      category: 'Fullstack',
      technologies: [
        { name: 'ExpressJs', icon: <SiExpress className='text-green-500' /> },
        { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
        { name: 'Postgressql', icon: <DiPostgresql  className='text-blue-500' /> },
        { name: 'Mysql', icon: <DiGithubBadge className='text-gray-600' /> },
        { name: 'React ', icon: <DiReact className='text-blue-500' /> },
        { name: 'NextJs', icon: <RiNextjsFill className='text-white' /> },
      ],
    },
  ]

const Skills = () => {
  return (
    <div className="max-w-[1650px] mx-auto flex flex-col items-center justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
            I worked on various Backend and fullstack projects. Check them <a href="#portfolio" className="underline">there</a>.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        ">
            {skills.map((skill, index) => (
                <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full">
                    <h3 className="text-xl font-bold mb-4 text-left">{skill.category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {skill.technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-2xl md:text-3xl">{tech.icon}</span>
                                <span className="text-white">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills
