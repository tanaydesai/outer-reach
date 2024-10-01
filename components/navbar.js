"use client"
import React, { useState, useRef, useEffect } from 'react';
import { SunMediumIcon, AtomIcon, RocketIcon, LeafIcon, Zap, ZapIcon, MoveRight, ChevronRight, LayersIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <div className={`fixed top-0 z-10 w-full left-0 px-6 py-2 flex items-center justify-between ${open ? "" : "backdrop-blur-[10px]"}`}>
      <Link href="/"><motion.div whileTap={{scale:1.1}} className='w-fit cursor-default text-[#9b9b9b] text-[18px] uppercase font-rajdhani-regular flex items-center gap-1'>{'0'} <MoveRight size={15}/> {'1'}</motion.div></Link>
      <div className='hidden md:flex justify-center text-[17px] cursor-default items-center text-[#9b9b9b] font-a1 w-fit gap-3'>
        <Link href="/energy"><div className='group hover:text-[#1e1f2b] duration-300'><div class="bg-[#24252f] h-[1px] my-1 w-0 group-hover:w-[90%] transition-all duration-700"></div>Energy<div className='ml-2 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
        <Link href="/nuclear"><div className='group hover:text-[#1e1f2b] duration-300'><div class="bg-[#24252f] h-[1px] my-1 w-0 group-hover:w-[90%] transition-all duration-700"></div>Nuclear<div className='ml-2 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
        <Link href="/ai"><div className='group hover:text-[#1e1f2b] duration-300'><div class="bg-[#24252f] h-[1px] my-1 w-0 group-hover:w-[90%] transition-all duration-700"></div>Artificial Intelligence<div className='ml-2 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
        {/* <Link href="/ev"><div className='group hover:text-[#1e1f2b] duration-300'><div class="bg-[#24252f] h-[1px] my-1 w-0 group-hover:w-[90%] transition-all duration-700"></div>Electric Vehicles<div className='ml-2 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link> */}
        <Link href="/space"><div className='group hover:text-[#1e1f2b] duration-300'><div class="bg-[#24252f] h-[1px] my-1 w-0 group-hover:w-[90%] transition-all duration-700"></div>Space<div className='ml-2 group-hover:translate-x-1 duration-300 inline-flex'>/</div></div></Link>
      </div>
      <motion.div whileTap={{scale:1.1}} className='block md:hidden' onClick={() => setOpen(true)}><LayersIcon size={18} className='text-[#9b9b9b] hover:text-[#000000] duration-300'/></motion.div>
      {open && 
      <div className='fixed z-[100] px-6 p-4 text-[40px] font-rajdhani-regular w-full h-full bg-[#d0d0d0]/30 backdrop-blur-[15px] top-0 left-0'>
        <XIcon size={20} className='mt-1 mr-0 ml-auto' onClick={() => setOpen(false)}/>
        <Fade delay={300}>
          <Link href="/"><div onClick={() => setOpen(false)}  className='mt-[100px] group w-full rounded-md px-1 hover:bg-[#e0dfdf]'>Home<ChevronRight className='ml-2 group-hover:translate-x-1 duration-300 inline-flex'/></div></Link>

          <Link href="/energy"><div onClick={() => setOpen(false)} className='mt-5 group w-full rounded-md px-1 hover:bg-[#e0dfdf]'>Energy<ChevronRight className='ml-2 group-hover:translate-x-1 duration-300 inline-flex'/></div></Link>
          <Link href="/nuclear"><div onClick={() => setOpen(false)} className='group w-full rounded-md px-1 hover:bg-[#e0dfdf]'>Nuclear<ChevronRight className='ml-2 group-hover:translate-x-1 duration-300 inline-flex'/></div></Link>
          <Link href="/ai"><div onClick={() => setOpen(false)} className='group w-full rounded-md px-1 hover:bg-[#e0dfdf]'>AI<ChevronRight className='ml-2 group-hover:translate-x-1 duration-300 inline-flex'/></div></Link>
          {/* <Link href="/ev"><div onClick={() => setOpen(false)} className='group w-full rounded-md px-1 hover:bg-[#e0dfdf]'>Electric Vehicles<ChevronRight className='ml-2 group-hover:translate-x-1 flex-nowrap shrink-0 duration-300 inline-flex'/></div></Link> */}
          <Link href="/space"><div onClick={() => setOpen(false)} className='group w-full rounded-md px-1 hover:bg-[#e0dfdf]'>Space<ChevronRight className='ml-2 group-hover:translate-x-1 duration-300 inline-flex'/></div></Link>
        </Fade>
      </div>}
    </div>
  );
}