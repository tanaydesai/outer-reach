"use client"
import React, { useState, useRef, useEffect } from 'react';
import { MoveRight, ChevronRight, LayersIcon, XIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
 
  return (
    <div className={`fixed top-0 z-[100] w-full left-0 px-3 py-3 flex bg-transparent items-center justify-between ${open ? "" : "backdrop-blur-[10px]"}`}>
     
      <Link href="/"><motion.div whileTap={{scale:0.95}} className='w-fit hover:text-white hover:bg-[#463f3a] cursor-default text-[#9b9b9b] text-[12px] uppercase font-a2 rounded-[5px] border border-[#b3b3b3] py-0.5 px-2.5 flex items-center gap-1'>{'0'} <MoveRight size={15}/> {'42'}</motion.div></Link>
    
      <div className='flex gap-0.5 text-[12px] uppercase text-[#9b9b9b] font-a2 '>
        <Link href={"/energy"}><motion.div whileTap={{scale:0.95}} className='rounded-[5px] hover:text-white hover:bg-[#463f3a] border border-[#b3b3b3] py-0.5 px-2.5'>Energy</motion.div></Link>
        <Link href={"/nuclear"}><motion.div whileTap={{scale:0.95}} className='rounded-[5px] hover:text-white hover:bg-[#463f3a] border border-[#b3b3b3] py-0.5  px-2.5'>Nuclear</motion.div></Link>
        <Link href={"/ai"}><motion.div whileTap={{scale:0.95}} className='rounded-[5px] hover:text-white hover:bg-[#463f3a] border border-[#b3b3b3] py-0.5  px-2.5'>AI</motion.div></Link>
        <Link href={"/space"}><motion.div whileTap={{scale:0.95}} className='rounded-[5px] hover:text-white hover:bg-[#463f3a] border border-[#b3b3b3] py-0.5  px-2.5'>Space</motion.div></Link>
      </div>
      
    </div>
  );
}