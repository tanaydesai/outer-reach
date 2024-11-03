"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShareFossils } from '@/components/charts/energy';
import { ArrowDown } from 'lucide-react';

export const FossilShare = ({className}) => {
    return (
        <div className={`relative ${className}`}>
            <h1 className='chart-title'><div className='tag-box '/>Share of Fossil Fuels in the mix</h1>
            <div className='chart text-white bg-black border-none pb-0'>    
                <div className='chart-data'>45%<div className='chart-data-span'><ArrowDown size={17} className='text-[#ec542e]'/>5% YoY</div></div>
                <ShareFossils className='w-full h-[150px]'/>
            </div>
        </div>
    )
}