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
     
      <Link href="/"><motion.div whileTap={{scale:1.1}} className='w-fit cursor-default text-[#9b9b9b] text-[12px] uppercase font-a2 rounded-[5px] border border-[#b3b3b3] py-0.5 px-2.5 flex items-center gap-1'>{'0'} <MoveRight size={15}/> {'42'}</motion.div></Link>
    
      <div className='flex gap-0.5 text-[12px] uppercase text-[#9b9b9b] font-a2 '>
        <Link href={"/energy"}><div className='rounded-[5px] border border-[#b3b3b3] py-0.5 px-2.5'>Energy</div></Link>
        <Link href={"/nuclear"}><div className='rounded-[5px] border border-[#b3b3b3] py-0.5  px-2.5'>Nuclear</div></Link>
        <Link href={"/ai"}><div className='rounded-[5px] border border-[#b3b3b3] py-0.5  px-2.5'>AI</div></Link>
        <Link href={"/space"}><div className='rounded-[5px] border border-[#b3b3b3] py-0.5  px-2.5'>Space</div></Link>
      </div>
      
    </div>
  );
}