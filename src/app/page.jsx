"use client";
import Image from 'next/legacy/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs'

import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiOutlineGithub } from 'react-icons/ai'
import han from "../../public/dev-ed-wave.png"
import harry from "../../public/harry_anime.png"
import realHarry from "../../public/real_harry.png"
// import web5 from "../../public/web5.png"
// import web6 from "../../public/web6.png"
import { useState } from 'react'
import Link from 'next/link';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);
  const [isRealMe, setIsRealMe] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen '>

          <nav className='py-10 mb-10 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-gray-300'>
              My Portofilio
            </h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={(e) => setDarkMode(!darkMode)} className='cursor-pointer text-2xl mx-10 dark:text-gray-200' /></li>
              <li><a rel="noopener noreferrer" target="_blank" href="https://www.canva.com/design/DAFdzBudAdU/r85CO4--ulDLzfz6gaMbJw/view?utm_content=DAFdzBudAdU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" className="bg-cyan-500 text-white px-4 py-2 border-none rounded-md ml-2">Resume</a></li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl">
              THI HAN HEIN
            </h2>
            <h3 className="text-2xl py-2 dark:text-white">
              Full Stack Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white md:text-xl max-w-lg mx-auto">
              Innovative Software Engineer striving to make the world a more unified and connected place.
              A creative thinker, adept in software development and working with passions.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <Link href={"https://github.com/micaljohn60"} target="_blank">
              <AiOutlineGithub className='dark:text-white' />
            </Link>

            <Link href="https://www.linkedin.com/in/thihan-hein-77b85218a/" target="_blank">
              <AiFillLinkedin className='dark:text-white' />
            </Link>

          </div>

          <div className="flex justify-center items-center my-6">
            <span class="mr-3 text-sm font-medium text-gray-900 dark:text-gray-300">Anime Me</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" checked={isRealMe} onClick={(e) => setIsRealMe(!isRealMe)}/>
              <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>

            </label>
            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Real Me</span>
          </div>

          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden">
            <Image src={isRealMe ? realHarry : harry} layout="fill" objectFit='cover' />
          </div>

        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-100">My Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-100">
              Moto: I learn from mistakes, I make mistakes everyday
            </p>
          </div>


          <div className="shadow-lg p-10 rounded-xl my-5 dark:bg-white">

            <div className="lg:flex gap-10 ">

              <div className="flex-1">
                <div class="mb-1 text-base font-medium dark:text-gray-800">Python</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div class="bg-teal-600 h-2.5 rounded-full dark:bg-teal-400" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="flex-1">
                <div class="mb-1 text-base font-medium dark:text-gray-800">React</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div class="bg-teal-600 h-2.5 rounded-full dark:bg-teal-400" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="flex-1">
                <div class="mb-1 text-base font-medium dark:text-gray-800">JavaScript</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div class="bg-teal-600 h-2.5 rounded-full dark:bg-teal-400" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="flex-1">
                <div class="mb-1 text-base font-medium dark:text-gray-800">HTML/CSS, BS, Tailwind</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div class="bg-teal-600 h-2.5 rounded-full dark:bg-teal-400" style={{ width: '100%' }}></div>
                </div>
              </div>

            </div>

            <div className="lg:flex gap-10 ">

              <div className="flex-1">
                <div class="mb-1 text-base font-medium dark:text-gray-800">GIT</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div class="bg-teal-600 h-2.5 rounded-full dark:bg-teal-400" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="flex-1">
                <div class="mb-1 text-base font-medium dark:text-gray-800">PHP</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div class="bg-teal-600 h-2.5 rounded-full dark:bg-teal-400" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="flex-1">
                <div class="mb-1 text-base font-medium dark:text-gray-800">SQL</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div class="bg-teal-600 h-2.5 rounded-full dark:bg-teal-400" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="flex-1">
                <div class="mb-1 text-base font-medium dark:text-gray-800">Laravel & Django</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div class="bg-teal-600 h-2.5 rounded-full dark:bg-teal-400" style={{ width: '100%' }}></div>
                </div>
              </div>

            </div>

            <div className="lg:flex gap-10 ">

              <div className="flex-1">
                <div class="mb-1 text-base font-medium dark:text-gray-800">Firebase</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div class="bg-teal-600 h-2.5 rounded-full dark:bg-teal-400" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="flex-1">
                <div class="mb-1 text-base font-medium dark:text-gray-800">C#</div>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div class="bg-teal-600 h-2.5 rounded-full dark:bg-teal-400" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

          </div>

          <div>
            <h3 className="text-3xl py-5 dark:text-gray-100">My Personal & Real World Projects</h3>

          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://raw.githubusercontent.com/micaljohn60/images/main/talent_and_jobs.jpg" alt="" />
              <div className='dark:text-white text-gray-800 my-3 mx-5'>
                <h1>Type : Real World Project</h1>
                <p> Design & Developed for Talent & Jobs</p>
              </div>
            </div>

            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://raw.githubusercontent.com/micaljohn60/images/main/admin-dashboard.jpg" alt="" />
              <div className='dark:text-white text-gray-800 my-3 mx-5'>
                <h1>Type : Real World Project</h1>
                <p> Design & Developed for Talent & Jobs</p>
              </div>
            </div>

            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://raw.githubusercontent.com/micaljohn60/images/main/covid19tracker.jpg" alt="" />
              <div className='dark:text-white text-gray-800 my-3 mx-5'>
                <h1>Type : Personal Project</h1>
                <p> Design & Developed Using Flutter & API</p>
              </div>
            </div>

            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://raw.githubusercontent.com/micaljohn60/images/main/tictatoe.jpg" alt="" />
              <div className='dark:text-white text-gray-800 my-3 mx-5'>
                <h1>Type : Personal Project</h1>
                <p> Tic Tac Toe With Python</p>
              </div>
            </div>

            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://raw.githubusercontent.com/micaljohn60/images/main/landing%20page.png" alt="" />
              <div className='dark:text-white text-gray-800 my-3 mx-5'>
                <h1>Type : Personal Project</h1>
                <p> travel Landing Page with HTML,CSS, Bootstrap</p>
              </div>
            </div>

            <div>
              <img class="h-auto max-w-full rounded-lg" src="https://raw.githubusercontent.com/micaljohn60/images/main/talent%20and%20jobs%20figma.png" alt="" />
              <div className='dark:text-white text-gray-800 my-3 mx-5'>
                <h1>Type : Real World Project</h1>
                <p> Frontend Design with Figma</p>
              </div>
            </div>

          </div>

        </section>

      </main>
    </div>
  )
}
