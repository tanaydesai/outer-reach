"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnnualHouse } from '@/components/charts/energy';
import { ArrowUp } from 'lucide-react';

export const AvgHouse = ({className}) => {
    return (
        <div className={`md:h-full rounded-[30px] ${className}`}>
            <h1 className='chart-title'><div className='tag-box '/>
                Avg. annual household energy use
            </h1>
            <div className='chart text-white bg-black pb-0'>    
                <div className='chart-data text-left'>13,000Kwh<div className='chart-data-span'><ArrowUp size={17} className='text-[#2eec7d]'/>5% YoY</div></div>
                <AnnualHouse className='w-full h-[150px]'/>
            </div>
        </div>
    )
}