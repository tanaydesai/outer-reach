"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnnualHouse } from '@/components/charts/energy';
import { ArrowUp } from 'lucide-react';

export const AvgHouse = ({className}) => {
    return (
        <div className='flex-1 h-full rounded-[30px]  px-3 py-3 border-transparent text-white bg-black relative overflow-hidden'>
            <p className='text-[14px] mx-2 font-rajdhani-regular'>Avg. annual household energy use (Kwh)</p>
            <div className='text-[30px] pl-2 font-rajdhani-regular'>13,000Kwh<div className='text-[18px] text-black pl-2 font-rajdhani-regular inline-flex items-center gap-1'><ArrowUp size={17} className='text-[#2eec7d]'/>5% YoY</div></div>
            <AnnualHouse className='absolute w-full h-[80%] -bottom-1 left-0 mt-1.5'/>
        </div>
    )
}