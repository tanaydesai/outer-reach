"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnnualHouse } from '@/components/charts/energy';
import { ArrowUp } from 'lucide-react';



export const AvgHouse = ({className}) => {
    return (
        <div className={`flex-1 md:h-full rounded-[30px] ${className}`}>
            <h1 className='text-[17px] text-[#444444]  font-a2 px-3'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/>
                Avg. annual household energy use
            </h1>
            <p className='text-[14px] mx-3 mt-2 font-a1 text-transparent'>Avg</p>
            <div className='pt-3 mt-10 overflow-auto text-white bg-black relative rounded-[15px]'>    
                <div className='text-[30px] px-6 pt-2 font-a1'>13,000Kwh<div className='text-[10px] text-white pl-2 font-a2 inline-flex items-end gap-1'><ArrowUp size={17} className='text-[#2eec7d]'/>5% YoY</div></div>
                <AnnualHouse className='w-full h-[180px]'/>
            </div>
        </div>
    )
}