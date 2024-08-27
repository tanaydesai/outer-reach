"use client"
import React from 'react';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { SunMediumIcon, AtomIcon, RocketIcon, LeafIcon, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <div className='fixed w-full top-3.5 z-[100] flex justify-between items-start px-2 md:px-3 gap-2'>
        <Select>
            <SelectTrigger className="justify-start">
                <SelectValue placeholder={<SunMediumIcon size={20}/>}/>
            </SelectTrigger>
          <SelectContent>
            <SelectItem value="nuclear" name="nuclear"><AtomIcon size={20}/></SelectItem>
            <SelectItem value="pollution" name="pollution"><LeafIcon size={20} /></SelectItem>
            <SelectItem value="ev" name="ev"><Zap size={20}/></SelectItem>
            <SelectItem value="space" name="space"><RocketIcon size={20} /></SelectItem>
          </SelectContent>
        </Select>

        <div className='absolute left-[calc(50%-25px)] w-[50px]'>
          <div className='font-planer-m h-full text-center font-bold uppercase text-[#231a0f] text-[20px]'>{">_"}</div>
        </div>

        <Select>
            <SelectTrigger className="justify-end">
                <SelectValue placeholder="Country"  />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">USA</SelectItem>
              <SelectItem value="dark">Saudi Arabia</SelectItem>
              <SelectItem value="system">UK</SelectItem>
            </SelectContent>
          </Select>
    </div>
  );
};
