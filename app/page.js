"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import starship from "@/assests/images/starship.jpg"
import falcon from "@/assests/images/falcon.jpg"

export default function Home() {
  return (
      <div className='fixed w-full h-full bg-[#efefef] overflow-x-hidden'>
        <div className="w-full absolute top-0 left-0 -z-10 h-full grid grid-cols-4">
          {Array.from({ length: 16 }).map((_, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="7" height="7" viewBox="0 0 10 10" className="text-[#1b1919]">
                  <path d="M5 0v10M0 5h10" stroke="#1b1919" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* <Image src={starship} alt="starship" className='w-[150px] h-auto rounded-full absolute top-[150px] left-[150px]' />
        <Image src={falcon} alt="starship" className='w-[150px] h-auto rounded-full  absolute bottom-[80px] left-[150px]' />
        <Image src={starship} alt="starship" className='w-[150px] h-auto rounded-full absolute top-[80px] right-[150px]' />
        <Image src={starship} alt="starship" className='w-[150px] h-auto rounded-full absolute bottom-[150px] right-[150px]' /> */}

        <div className='absolute w-full h-full flex items-center justify-center'>
            <div> 
              <div className='flex justify-center'><Fade><TypeAnimation speed={40} cursor={false} sequence={["{Outer", "{Outer,", '{Outer, Reach}']} className='text-[45px] md:text-[80px] text-center leading-[60px] md:leading-[85px] text-[#1e1f2b] uppercase font-a2'/></Fade></div>
              <div className='mt-5 mx-auto w-[400px] text-center text-[16px] text-[#1e1f2b] font-a1'><Fade>Data to demistify widely held misperceptions and track the progress of humanity's frontier technologies.</Fade></div>
              {/* <Fade><Link href="/energy"><div className='mt-5 group mx-auto w-[400px] text-center text-[16px] text-[#1e1f2b] font-a1 flex items-center justify-center gap-2'>Start<div className='group-hover:translate-x-1 pt-1 duration-300'><MoveRight size={14}/></div></div></Link></Fade> */}
            </div>
        </div>
        <Fade>
        <div className='absolute bottom-0 px-5 p-4 text-[12.5px] w-full flex items-end text-[#9b9b9b] justify-between uppercase font-rajdhani-regular'>
          <div className='border-l-[2px] h-[55px] md:h-[36px] break-words w-[160px] md:w-[200px] border-l-[#c3c3c3] px-2'>
            <div><TypeAnimation speed={40} cursor={false} sequence={["Optimistic", "Optimistic, accelerationist", "Optimistic, accelerationist & technocapitalistic"]} /></div>
          </div>
          <div className='hidden md:block border-l-[2px] h-[36px] border-l-[#c3c3c3] px-2'>
            <div><TypeAnimation speed={40} cursor={false} sequence={["Open","Open Source"]}/></div>
            <Link href="https://github.com/tanaydesai" target="_blank"><div className='group cursor-default'><TypeAnimation speed={40} cursor={false} sequence={["GitHub"]} /><div className='ml-1 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
          </div>
          <div className='border-l-[2px] h-[55px] md:h-[36px] border-l-[#c3c3c3] px-2'>
            <div><TypeAnimation speed={40} cursor={false} sequence={["Est.", "Est. 2024"]} /></div>
            <Link href="https://tanaydesai.com" target="_blank"><div className='group cursor-default'><TypeAnimation speed={40} cursor={false} sequence={["Tanay","Tanay Desai",]} /><div className='ml-1 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
            <Link href="https://github.com/tanaydesai" target="_blank"><div className='block md:hidden group cursor-default'><TypeAnimation speed={40} cursor={false} sequence={["GitHub"]} /><div className='ml-1 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
          </div>
        </div>
        </Fade>
      </div>
  )
}