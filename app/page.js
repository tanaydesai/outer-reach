"use client"
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Menu } from '@/components/menu';

export default function Home() {
  return (
    <div>
      <div className='relative bg-cover bg-bg3 bg-right overflow-x-hidden  w-[100vw] h-screen'>
          <hr className="absolute left-7 h-full w-[1px] bg-white/[.80]"/>
          <hr className="absolute right-7 h-full w-[1px] bg-white/[.80]"/>

          {/* <video className='w-full h-full object-cover' autoPlay loop muted>
            <source src='/videos/wind2.mp4' type='video/mp4'  className="w-full h-auto"/>
          </video> */}
          
          <div className="p-10 absolute bottom-10 md:bottom-9">
            <h1 className='text-[50px] md:text-[80px] leading-[60px] md:leading-[85px] md:w-[600px] text-white font-planer-m'>THE OUTER REACH</h1>
            <h3 className='text-[14px] pl-1 md:text-[20px] font-rajdhani-regular text-white w-auto md:w-[50%]'>This open-source project aims to keep track of the progress and impact of the world's best frontier technology companies that are solving the worlds biggest problems across space, energy, pollution, transport and biology.</h3>
            <Menu><motion.div whileTap={{scale: 0.97}} className="group text-[11px] mt-5 ml-1 w-fit bg-white/[.80] px-5 py-3 cursor-default backdrop-blur-[100px] hover:bg-white[.60] rounded-[11px] font-planer-m tracking-[1.75px] flex items-center gap-1">START NOW <ChevronRight className='mb-0.5 group-hover:translate-x-0.5 transition' size={13}/></motion.div></Menu>
          </div>
      </div>
    </div>
  )
}