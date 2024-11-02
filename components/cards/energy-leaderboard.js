"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { LeaderBoards } from '@/components/charts/energy';

export const EnergyLeaderBoard = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] mt-7 ${className}`}>
            <h1 className='text-[17px] text-[#463f3a] font-a2 px-3'><div className='w-3 h-3 bg-green-500 shrink-0 mr-2 inline-flex'/>King's Leaderboard: 
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
            <div className='px-3 pt-3 mt-5 overflow-auto text-white bg-black relative rounded-[10px]'>    
                <p className='text-[14px] mx-1 font-a1 md:w-[50%]'>Countries leading the way by share of Renewables in the mix.</p>
                <div className='h-[450px] py-3 w-full overflow-auto'>
                    <LeaderBoards className='min-h-[650px] w-full' />
                </div>
            </div>
        </div>
    )
}