"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
      <div className='fixed w-full h-full bg-[#efefef] overflow-x-hidden'>
        <div className='absolute w-full h-full flex items-center justify-center'>
            <div> 
              <div className='flex justify-center'><Fade><TypeAnimation speed={40} cursor={false} sequence={["Outer", "Outer->", 'Outer->Reach']} className='text-[45px] md:text-[80px] text-center leading-[60px] md:leading-[85px] text-[#1e1f2b] uppercase font-a2'/></Fade></div>
              <div className='mt-5 mx-auto w-[400px] text-center text-[16px] text-[#1e1f2b] uppercase font-rajdhani-regular'><Fade>Data to Track Progress of the world's frontier technologies</Fade></div>
              <Fade><Link href="/energy"><div className='block sm:hidden mt-10 group mx-auto w-[400px] text-center text-[16px] text-[#1e1f2b] uppercase font-rajdhani-regular'>Start<div className='ml-1 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link></Fade>
            </div>
        </div>
        <Fade>
        <div className='absolute bottom-0 px-5 p-4 text-[12.5px] w-full flex items-end text-[#1e1f2b] justify-between uppercase font-rajdhani-regular'>
          <div className='border-l-[2px] h-[55px] md:h-[36px] break-words w-[160px] md:w-[200px] border-l-[#9b9b9b] px-2'>
            <div><TypeAnimation speed={40} cursor={false} sequence={["Optimistic", "Optimistic, accelerationist", "Optimistic, accelerationist & technocapitalistic"]} /></div>
          </div>
          <div className='hidden md:block border-l-[2px] h-[36px] border-l-[#9b9b9b] px-2'>
            <div><TypeAnimation speed={40} cursor={false} sequence={["Open","Open Source"]}/></div>
            <Link href="https://github.com/tanaydesai" target="_blank"><div className='group cursor-default'><TypeAnimation speed={40} cursor={false} sequence={["GitHub"]} /><div className='ml-1 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
          </div>
          <div className='border-l-[2px] h-[55px] md:h-[36px] border-l-[#9b9b9b] px-2'>
            <div><TypeAnimation speed={40} cursor={false} sequence={["Est.", "Est. 2024"]} /></div>
            <Link href="https://tanaydesai.com" target="_blank"><div className='group cursor-default'><TypeAnimation speed={40} cursor={false} sequence={["Tanay","Tanay Desai",]} /><div className='ml-1 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
            <Link href="https://github.com/tanaydesai" target="_blank"><div className='block md:hidden group cursor-default'><TypeAnimation speed={40} cursor={false} sequence={["GitHub"]} /><div className='ml-1 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
          </div>
        </div>
        </Fade>
      </div>
  )
}