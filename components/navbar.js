"use client"
import React, { useState, useRef, useEffect } from 'react';
import { MoveRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuIcon } from './icons';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
 
  return (
    <div className={`fixed top-0 z-[100] w-full left-0 px-3 py-3 flex bg-transparent items-center justify-between ${open ? "" : "backdrop-blur-[10px]"}`}>
     
      <Link href="/"><motion.div whileTap={{scale:0.95}} className='navbar-box flex items-center gap-1'>0 <MoveRight size={15}/> {'42'}</motion.div></Link>
    
      <div className={`gap-1 ${path == "/" ? "flex" : "hidden"} sm:flex`}>
        <Link href={"/energy"}><motion.div whileTap={{scale:0.95}} className="navbar-box">Energy</motion.div></Link>
        <Link href={"/nuclear"}><motion.div whileTap={{scale:0.95}} className='navbar-box'>Nuclear</motion.div></Link>
        <Link href={"/ai"}><motion.div whileTap={{scale:0.95}} className='navbar-box'>AI</motion.div></Link>
        <Link href={"/space"}><motion.div whileTap={{scale:0.95}} className='navbar-box'>Space</motion.div></Link>
      </div>

      {path !== "/" && <MenuIcon className='flex sm:hidden z-[100]' clicked={open} onClick={() => setOpen(!open)}/>}

      {open && 
      <div className='fixed top-0 right-0 w-full px-6 p-4 h-full text-center bg-[#d0d0d0]/30 backdrop-blur-[15px] flex flex-col gap-2 items-center justify-center'>
        <Link href="/"><motion.div whileTap={{scale:0.95}} className='navbar-box absolute top-3 left-3 flex items-center gap-1'>0 <MoveRight size={15}/> {'42'}</motion.div></Link>
        
        <Fade>
          <Link href="/energy"><motion.div whileTap={{scale:0.95}} className="navbar-box hover:bg-transparent hover:text-[#aaaaaa] text-[30px] border-none">Road to Energy Abundance</motion.div></Link>
          <Link href="/nuclear"><motion.div whileTap={{scale:0.95}} className='navbar-box hover:bg-transparent hover:text-[#aaaaaa] text-[30px] border-none'>Nuclear's Revenge</motion.div></Link>
          <Link href="/ai"><motion.div whileTap={{scale:0.95}} className='navbar-box hover:bg-transparent hover:text-[#aaaaaa] text-[30px] border-none'>Age of AGI</motion.div></Link>
          <Link href="/space"><motion.div whileTap={{scale:0.95}} className='navbar-box hover:bg-transparent hover:text-[#aaaaaa] text-[30px] border-none'>The Space Race</motion.div></Link>
        </Fade>
      </div>}

    </div>
  );
}
