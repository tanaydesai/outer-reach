"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { LeaderBoards } from '@/components/charts/energy';

export const EnergyLeaderBoard = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] mt-7 ${className}`}>
            <h1 className='chart-title'><div className='tag-box bg-green-500'/>King's Leaderboard: 
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
            <div className='px-3 chart text-white bg-black pb-0'>    
                <p className='chart-desc mt-1 text-white mx-1'>Countries leading the way by share of Renewables in the mix.</p>
                <div className='h-[450px] py-3 w-full overflow-auto'>
                    <LeaderBoards className='min-h-[650px] w-full' />
                </div>
            </div>
        </div>
    )
}