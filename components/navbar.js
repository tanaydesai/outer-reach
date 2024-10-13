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
    <div className={`fixed top-0 z-10 w-full left-0 px-3 py-2 flex bg-transparent items-center justify-between ${open ? "" : "backdrop-blur-[10px]"}`}>
      <Link href="/"><motion.div whileTap={{scale:1.1}} className='w-fit cursor-default text-[#9b9b9b] text-[17px] uppercase font-rajdhani-regular flex items-center gap-1'>{'0'} <MoveRight size={15}/> {'42'}</motion.div></Link>
    
      <div className='flex gap-1 text-[12px] uppercase text-[#9b9b9b]  font-a2 '>
        <div className='rounded-[5px] border border-[#b3b3b3] px-2'>Energy</div>
        <div className='rounded-[5px] border border-[#b3b3b3] px-2'>Nuclear</div>
        <div className='rounded-[5px] border border-[#b3b3b3] px-2'>AI</div>
        <div className='rounded-[5px] border border-[#b3b3b3] px-2'>Space</div>
      </div>
      
    </div>
  );
}