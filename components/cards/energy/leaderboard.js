"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { CrownIcon } from 'lucide-react';

export const LeaderBoard = ({className}) => {
    return (
        <div className={`w-full h-[465px] lg:h-[440px] mt-3 rounded-[30px] border-2 border-transparent text-white py-3 overflow-auto bg-black ${className}`}>
            <h1 className='text-[17px] uppercase font-a2 pl-3 '><div className='w-3 h-3 bg-green-500 shrink-0  mx-2 inline-flex'/>Leaderboard: 
            <Select>
            <SelectTrigger className="text-black">
                <SelectValue placeholder="Renewables" />
            </SelectTrigger>
            <SelectContent className="bg-white text-black">
                <SelectItem value="light">Per Capita Consumption</SelectItem>
                <SelectItem value="light">Avg Houseold Use</SelectItem>
                <SelectItem value="light">Renewables</SelectItem>
                <SelectItem value="dark">Solar</SelectItem>
                <SelectItem value="system">Wind</SelectItem>
                <SelectItem value="system">Hydro</SelectItem>
                <SelectItem value="system">Nuclear</SelectItem>
                <SelectItem value="system">Fossil fuels</SelectItem>
                <SelectItem value="light">Renewables</SelectItem>
            </SelectContent>
            </Select>
            </h1>
            <p className='text-[14px] mx-2 my-0.5 font-rajdhani-regular  px-3'>Countries leading the way by share of Renewables in the mix.</p>
            <div className='px-5 mt-4 w-full flex font-rajdhani-regular text-[15px] text-[#9b9b9b] items-center justify-between'>Country <div>%</div></div>
            <div className='h-[317px] mt-2 px-3 cursor-default whitespace-nowrap'>
                <motion.div initial={{scale: 1.03}}  className='px-2 mt-1.5 w-full flex font-rajdhani-regular text-[35px] rounded-[7px] bg-green-700 items-center justify-between'><div className='flex gap-2 items-center'><CrownIcon size={30}/> United States </div><div>40%</div></motion.div>
                <motion.div initial={{scale: 1.017}}  className='px-2  mt-2 w-full flex font-rajdhani-regular text-[25px] rounded-[7px] bg-green-500  items-center justify-between'>United Kindom <div>40%</div></motion.div>
                <motion.div initial={{scale: 1}}  className='px-2  mt-2 w-full flex font-rajdhani-regular text-[20px] rounded-[7px] bg-green-400   items-center justify-between'>France <div>40%</div></motion.div>
               <div className='overflow-auto h-[180px]'>
                    <motion.div whileHover={{scale: 1.01, transition: {duration: 0.2, type: 'spring'}}} className='px-2  mt-1.5 w-full flex font-rajdhani-regular text-[17px]  gap-3 items-center justify-between'>India <div>40%</div></motion.div>
                    <motion.div whileHover={{scale: 1.01, transition: {duration: 0.2, type: 'spring'}}} className='px-2  mt-1.5 w-full flex font-rajdhani-regular text-[17px]  gap-3 items-center justify-between'>Saudi Arabia <div>40%</div></motion.div>
                    <motion.div whileHover={{scale: 1.01, transition: {duration: 0.2, type: 'spring'}}} className='px-2  mt-1.5 w-full flex font-rajdhani-regular text-[17px]  gap-3 items-center justify-between'>China <div>40%</div></motion.div>
                    <motion.div whileHover={{scale: 1.01, transition: {duration: 0.2, type: 'spring'}}} className='px-2  mt-1.5 w-full flex font-rajdhani-regular text-[17px]  gap-3 items-center justify-between'>Ireland <div>40%</div></motion.div>
                    <motion.div whileHover={{scale: 1.01, transition: {duration: 0.2, type: 'spring'}}} className='px-2  mt-1.5 w-full flex font-rajdhani-regular text-[17px]  gap-3 items-center justify-between'>Ireland <div>40%</div></motion.div>
                    <motion.div whileHover={{scale: 1.01, transition: {duration: 0.2, type: 'spring'}}} className='px-2  mt-1.5 w-full flex font-rajdhani-regular text-[17px]  gap-3 items-center justify-between'>Ireland <div>40%</div></motion.div>
                    <motion.div whileHover={{scale: 1.01, transition: {duration: 0.2, type: 'spring'}}} className='px-2  mt-1.5 w-full flex font-rajdhani-regular text-[17px]  gap-3 items-center justify-between'>Ireland <div>40%</div></motion.div>
                </div>
            </div>                  
        </div>
    )
}