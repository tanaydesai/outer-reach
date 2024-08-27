"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { SunMediumIcon, AtomIcon, RocketIcon, LeafIcon, Zap, ZapIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [hover, setHover] = useState(false)
  const ref = useRef(null);
  const variants = {
    "initial": {width: "38px", justifyContent:"flex-start"},
    "hover" : {width: '130px', justifyContent:"center", backgroundColor: "#f1f1f1"},
  }
  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setHover(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <div className='fixed w-full top-3.5 z-[100] flex justify-between  items-center px-2 md:px-3 gap-2'>
        <div className='w-fit px-2 items-center gap-5 md:gap-10 flex justify-between bg-[#d6d6d6] rounded-[8px]'>
          <div className='font-planer-m h-full text-center font-semibold uppercase text-[#231a0f] text-[16px]'>{">_"} <span className='hidden md:inline'>Outer Reach</span></div>
          <Select>
              <SelectTrigger icon={true} className="justify-center h-auto font-semibold py-2 text-[13px] font-planer-m uppercase bg-[#d6d6d6] rounded-[8px]">
                  <SelectValue placeholder="Country"  />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value="light">USA</SelectItem>
                <SelectItem value="dark">Saudi Arabia</SelectItem>
                <SelectItem value="system">UK</SelectItem>
              </SelectContent>
            </Select>
        </div>
        
        <div ref={ref} className='flex items-center gap-[7px]'>
          <motion.div onClick={() => setHover(1)} variants={variants} whileTap={{scale: 0.9}} initial="initial" animate={hover == 1 ? "hover" : "initial"}  transition={{duration: 0.3}} className='p-2 text-[16px] bg-[#d6d6d6] flex items-center justify-start gap-3  rounded-[8px] cursor-default overflow-auto font-planer-m uppercase'><SunMediumIcon className='flex-shrink-0' strokeWidth={1} size={20}/><motion.div initial={{opacity: 0, x: 20}} animate={hover == 1 ? {opacity: 1, x: 0} : "initial"} transition={{duration: 0.35}}>Energy</motion.div></motion.div>
          <motion.div onClick={() => setHover(2)}  variants={variants} whileTap={{scale: 0.9}} initial="initial" animate={hover == 2 ? "hover" : "initial"} transition={{duration: 0.3}} className='p-2 text-[16px] bg-[#d6d6d6] flex items-center justify-start gap-3  rounded-[8px] cursor-default overflow-auto font-planer-m uppercase'><AtomIcon className='flex-shrink-0' strokeWidth={1} size={20}/><motion.div initial={{opacity: 0, x: 20}} animate={hover == 2 ? {opacity: 1, x: 0} : "initial"}  transition={{duration: 0.35}}>Nuclear</motion.div></motion.div>
          <motion.div onClick={() => setHover(3)} variants={variants} whileTap={{scale: 0.9}} initial="initial" animate={hover == 3 ? "hover" : "initial"} transition={{duration: 0.3}} className='p-2 text-[16px] bg-[#d6d6d6] flex items-center justify-start gap-3  rounded-[8px] cursor-default overflow-auto font-planer-m uppercase'><LeafIcon className='flex-shrink-0' strokeWidth={1} size={20}/><motion.div initial={{opacity: 0, x: 20}} animate={hover == 3 ? {opacity: 1, x: 0} : "initial"}  transition={{duration: 0.35}}>Pollution</motion.div></motion.div>
          <motion.div onClick={() => setHover(4)} variants={variants} whileTap={{scale: 0.9}} initial="initial" animate={hover == 4 ? "hover" : "initial"} transition={{duration: 0.3}} className='p-2 text-[16px] bg-[#d6d6d6] flex items-center justify-start gap-3  rounded-[8px] cursor-default overflow-auto font-planer-m uppercase'><ZapIcon className='flex-shrink-0' strokeWidth={1} size={20}/><motion.div initial={{opacity: 0, x: 20}} animate={hover == 4 ? {opacity: 1, x: 0} : "initial"}  transition={{duration: 0.35}}>EVs</motion.div></motion.div>
          <motion.div onClick={() => setHover(5)} variants={variants} whileTap={{scale: 0.9}} initial="initial" animate={hover == 5 ? "hover" : "initial"} transition={{duration: 0.3}} className='p-2 text-[16px] bg-[#d6d6d6] flex items-center justify-start gap-3  rounded-[8px] cursor-default overflow-auto font-planer-m uppercase'><RocketIcon className='flex-shrink-0' strokeWidth={1} size={20}/><motion.div initial={{opacity: 0, x: 20}} animate={hover == 5 ? {opacity: 1, x: 0} : "initial"}  transition={{duration: 0.35}}>Space</motion.div></motion.div>
        </div>
    </div>
  );
};