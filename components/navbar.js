"use client"
import React, { useState, useRef, useEffect } from 'react';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import { ListEnd } from 'lucide-react';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
 
  return (
    <div className={`fixed top-0 z-[100] w-full left-0 px-3 py-3 flex bg-transparent items-center justify-between ${open ? "" : "backdrop-blur-[10px]"}`}>
     
      <Link href="/"><motion.div whileTap={{scale:0.95}} className='navbar-box flex items-center gap-1'>0 <MoveRight size={15}/> {'42'}</motion.div></Link>
    
      <div className={`gap-0.5 ${path == "/" ? "flex" : "hidden"} sm:flex`}>
        <Link href={"/energy"}><motion.div whileTap={{scale:0.95}} className={`navbar-box ${path == "/energy" ? "text-white border-none bg-black " : ""}`}>Energy</motion.div></Link>
        <Link href={"/nuclear"}><motion.div whileTap={{scale:0.95}} className='navbar-box'>Nuclear</motion.div></Link>
        <Link href={"/ai"}><motion.div whileTap={{scale:0.95}} className='navbar-box'>AI</motion.div></Link>
        <Link href={"/space"}><motion.div whileTap={{scale:0.95}} className='navbar-box'>Space</motion.div></Link>
      </div>

      {path !== "/" && <ListEnd size={25} className='flex text-[#9b9b9b] sm:hidden' onClick={() => setOpen(!open)}/>}

    </div>
  );
}




{/* <div className='mt-5 w-full grid gap-10 lg:grid-cols-2 grid-cols-1 grid-rows-4 lg:grid-rows-2 min-h-[600px]'>
            <div className='lg:flex gap-5 justify-between h-fit lg:h-[300px]'>
              <div className='border-[2px] border-t-[12px] h-[300px] border-[#b3b3b3] rounded-[10px] flex-1'></div>
              <div className='flex-1 relative'>
                <div className='text-[30px] mt-2 lg:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text='Road to Energy Abundance' /></div>
                <div className='text-[17px] mt-2 lg:mt-0 lg:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>Global energy mix, renewables growth and capacity, winners & losers, per capita and more.</div>
              </div>
            </div>
            <div className='lg:flex gap-5 justify-between h-fit lg:h-[300px]'>
              <div className='border-[2px] border-t-[12px] border-[#b3b3b3] h-[300px] rounded-[10px] flex-1'></div>
              <div className='flex-1 relative'>
                <div className='text-[30px] mt-2 lg:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text="Nuclear's Revenge" /></div>
                <div className='text-[17px] mt-2 lg:mt-0 lg:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>Global nuclear capacity, rapid expansion, truth about safety and reuseable waste metrics.</div>
              </div>
            </div>
            <div className='lg:flex gap-5 justify-between h-fit lg:h-[300px]'>
              <div className='lg:block hidden flex-1 relative'>
                <div className='text-[30px] mt-2 lg:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text='Age of AGI' /></div>
                <div className='text-[17px] mt-2 lg:mt-0 lg:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>World's largest GPU clusters, rapid global data center rollout, increasing energy demand and AGI's promise.</div>
              </div>
              <div className='border-[2px] border-t-[12px] border-[#b3b3b3] h-[300px] rounded-[10px] flex-1'></div>
              <div className='lg:hidden flex-1 relative'>
                <div className='text-[30px] mt-2 lg:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text='Age of AGI' /></div>
                <div className='text-[17px] mt-2 lg:mt-0 lg:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>The largest GPU clusters, rapid global data center rollout, increasing energy demand and AGI's promise.</div>
              </div>
            </div>
            <div className='lg:flex gap-5 justify-between h-fit lg:h-[300px]'>
              <div className='lg:block hidden flex-1 relative'>
                <div className='text-[30px] mt-2 lg:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text='The Space Race' /></div>
                <div className='text-[17px] mt-2 lg:mt-0 lg:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>The blessing of SpaceX, the economics, impact and need for space exploitation.</div>
              </div>
              <div className='border-[2px] border-t-[12px] border-[#b3b3b3] h-[300px] rounded-[10px] flex-1'></div>
              <div className='lg:hidden flex-1 relative'>
                <div className='text-[30px] mt-2 lg:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text='The Space Race' /></div>
                <div className='text-[17px] mt-2 lg:mt-0 lg:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>The magic of SpaceX and Starship and the economics, impact and need for space exploitation.</div>
              </div>
            </div>
          </div>
        </div> */}