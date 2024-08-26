"use client"
import React from 'react';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { SunMediumIcon, AtomIcon, RocketIcon, LeafIcon, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <div className='fixed left-[calc(50%-170px)] md:left-10 top-5 z-[100] flex justify-center gap-2'>
        <div className='px-2 flex items-center justify-between w-[280px] md:min-w-[400px] bg-[#f2eceb]/50 backdrop-blur-[20px] rounded-[6px]'>
          <div className='font-planer-m w-fit pl-1 py-2 h-full text-center font-bold uppercase text-[#231a0f] text-[14px]'>{">_"} Outer Reach</div>
          <Select>
            <SelectTrigger className="w-fit text-[13px] ">
                <SelectValue placeholder="Country"  />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">USA</SelectItem>
              <SelectItem value="dark">Saudi Arabia</SelectItem>
              <SelectItem value="system">UK</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Select>
            <SelectTrigger className="w-[50px] bg-[#f2eceb]/50 backdrop-blur-[20px] rounded-[6px]">
                <SelectValue placeholder={<SunMediumIcon size={17}/>}/>
            </SelectTrigger>
          <SelectContent>
            <SelectItem value="nuclear" name="nuclear"><AtomIcon size={17}/></SelectItem>
            <SelectItem value="pollution" name="pollution"><LeafIcon size={17} /></SelectItem>
            <SelectItem value="ev" name="ev"><Zap size={17}/></SelectItem>
            <SelectItem value="space" name="space"><RocketIcon size={17} /></SelectItem>
          </SelectContent>
        </Select>
    </div>
  );
};
