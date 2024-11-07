"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShareRenewables } from '@/components/charts/energy';
import { ArrowUp } from 'lucide-react';

export const RenewableShare = ({className}) => {
    return (
        <div className={`chart overflow-auto text-white bg-black border-none px-0 pb-0 ${className}`}>
            <h1 className='chart-title text-white px-3'>Share of Renewables in the mix</h1>
            <div className='chart-data'>45%<div className='chart-data-span'><ArrowUp size={17} className='text-[#2eec7d]'/>5% YoY</div></div>
            <ShareRenewables className='w-full h-[150px]'/>
        </div>
    )
}