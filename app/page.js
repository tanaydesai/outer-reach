"use client"
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'center',   // This will center the div vertically in the view
      inline: 'center'    });
  }, []);

  return (
      <div className='absolute w-full h-full top-0 left-0 overflow-auto overflow-y-hidden'>
        <div className='absolute w-[250vw] md:w-full h-full flex items-center justify-center overflow-y-hidden bg-[#efefef]'>
            {/* <div className="w-full absolute top-0 left-0 -z-10 h-full grid grid-cols-4">
            {Array.from({ length: 16 }).map((_, index) => (
              <div key={index} className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="7" height="7" viewBox="0 0 10 10" className="text-[#1b1919]">
                    <path d="M5 0v10M0 5h10" stroke="#1b1919" strokeWidth="0.5" />
                  </svg>
                </div>
              </div>
            ))}
          </div> */}

        
          <motion.div initial={{height: "35px"}} whileHover={{height: "110px", transition:{duration:0.4, type:'easeInOut'}}} className='cursor-default overflow-hidden absolute top-[70px] md:top-[100px] left-[calc(100% - 125px)] w-[250px] h-fit rounded-[7px] border text-[14px] text-white bg-black font-a2 border-[#b3b3b3]'>
            <div className='w-full pt-2 px-2 uppercase text-[12px]'>
              <div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/>
              Road to Energy Abundance
            </div>
            <div className='p-2 pb-2'>
              Energy & electricity mix, renewable capacity, leaderboards, growth and much more.
            </div>
          </motion.div>

          <motion.div initial={{height: "35px"}} whileHover={{height: "110px", transition:{duration:0.4, type:'easeInOut'}}} className='cursor-default overflow-hidden absolute top-[220px] md:top-[200px] right-[150px] md:right-[100px] w-[250px] h-fit rounded-[7px] border text-[14px] text-white bg-black font-a2 border-[#b3b3b3]'>
            <div className='w-full pt-2 px-2 uppercase text-[12px]'>
              <div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/>
              Age of Artificial Intelligence
            </div>
            <div className='p-2 pb-2'>
              Energy & electricity mix, renewable capacity, leaderboards, growth and much more.
            </div>
          </motion.div>

          <motion.div initial={{height: "35px"}} whileHover={{height: "110px", transition:{duration:0.4, type:'easeInOut'}}} className='cursor-default overflow-hidden absolute bottom-[120px] md:bottom-[150px] left-[170px] md:left-[100px] w-[250px] h-fit rounded-[7px] border text-[14px] text-white bg-black font-a2 border-[#b3b3b3]'>
            <div className='w-full pt-2 px-2 uppercase text-[12px]'>
              <div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/>
              Nuclear's Revenge
            </div>
            <div className='p-2 pb-2'>
              Energy & electricity mix, renewable capacity, leaderboards, growth and much more.
            </div>
          </motion.div>

          <motion.div initial={{height: "35px"}} whileHover={{height: "110px", transition:{duration:0.4, type:'easeInOut'}}} className='cursor-default overflow-hidden absolute bottom-[75px] md:bottom-[100px] right-[130px] md:right-[150px] w-[250px] h-fit rounded-[7px] border text-[14px] text-white bg-black font-a2 border-[#b3b3b3]'>
            <div className='w-full pt-2 px-2 uppercase text-[12px]'>
              <div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/>
              The Space Race
            </div>
            <div className='p-2 pb-2'>
              Energy & electricity mix, renewable capacity, leaderboards, growth and much more.
            </div>
          </motion.div>

          <div className='absolute top-[150px] left-[170px] md:left-[100px] w-[170px] h-[130px] rounded-[7px] border overflow-auto text-[12px] font-a2 border-[#b3b3b3]'>
            <div className='h-[105px]'></div>
            <div className='mx-auto text-center font-a1 text-[#9b9b9b]'>solar.jpg</div>
          </div>

          <div className='absolute top-[350px] right-[30px] md:right-[60px] w-[200px] h-[120px] rounded-[7px] border overflow-auto text-[14px] font-a2 border-[#b3b3b3]'>
            <div className='w-full pt-2 px-2 uppercase text-[12px]'>
              <div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/>
              Features
            </div>
            <div className='p-2 pb-2'>
              <ul className='list-disc list-inside text-[12px]'>
                <li>Comphrehensive & friendly.</li>
                <li>Visualizations & explainers.</li>
                <li>Techno-optimistic.</li>
                <li>No bloatware. No bs.</li>
              </ul>
            </div>
          </div>


          <div ref={ref} className='flex justify-center'><Fade><TypeAnimation speed={40} cursor={false} sequence={["Outer", "Outer->", 'Outer->Reach']} className='text-[40px] md:text-[70px] text-center leading-[60px] md:leading-[85px] text-[#1e1f2b] uppercase font-a2'/></Fade></div>
          {/* <div className='mt-5 mx-auto w-[370px] md:w-[400px] text-center text-[14px] md:text-[16px] text-[#1e1f2b] font-a1'><Fade>Data to demistify common misperceptions and track the progress of humanity's frontier technologies.</Fade></div> */}        
          <div className='absolute bottom-[180px] md:bottom-[200px] left-[calc(100% - 150px)] w-[300px] md:w-[400px] h-fit rounded-[7px] border overflow-auto text-[14px] text-[#1e1f2b] font-a2 border-[#b3b3b3]'>
            <div className='w-full pt-2 px-2 uppercase text-[12px]'>
              <div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/>
              Description
            </div>
            <div className='p-2 pb-2'>
              Data insights to track the progress of humanity's frontier technologies, highlight their need and impact and demistify societal misperceptions.
            </div>
          </div>

          <div className='fixed z-[100] left-0 bottom-0 px-2 p-3 text-[14px] w-full flex items-end text-[#9b9b9b] justify-between uppercase font-rajdhani-regular'>
          <Fade>
            <div className=' h-[18px] px-2'>
              {/* <div><TypeAnimation speed={40} cursor={false} sequence={["Open","Open Source"]}/></div> */}
              <Link href="https://github.com/tanaydesai" target="_blank"><div className='group cursor-default'><TypeAnimation speed={40} cursor={false} sequence={["GitHub"]} /><div className='ml-1 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
            </div>
            <div className='text-right h-[18px] px-2'>
              <div><TypeAnimation speed={40} cursor={false} sequence={["Est.", "Est. 2024"]} /></div>
              {/* <Link href="https://tanaydesai.com" target="_blank"><div className='group cursor-default'><TypeAnimation speed={40} cursor={false} sequence={["Tanay","Tanay Desai",]} /><div className='ml-1 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link> */}
              {/* <Link href="https://github.com/tanaydesai" target="_blank"><div className='block md:hidden group cursor-default'><TypeAnimation speed={40} cursor={false} sequence={["GitHub"]} /><div className='ml-1 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link> */}
            </div>
            </Fade>
          </div>
        </div>
      </div>
  )
}