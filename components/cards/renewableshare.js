"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShareRenewables } from '@/components/charts/energy';
import { ArrowUp } from 'lucide-react';

export const RenewableShare = ({className}) => {
    return (
        <div className={`relative ${className}`}>
            <div className='pt-3 my-3 overflow-auto text-white bg-black relative rounded-[5px]'>    
                <div className='text-[30px] px-6 pt-2 font-a1'>45%<div className='text-[10px] text-white pl-2 font-a2 inline-flex items-end gap-1'><ArrowUp size={17} className='text-[#2eec7d]'/>5% YoY</div></div>
                <ShareRenewables className='w-full h-[150px]'/>
            </div>
            <h1 className='text-[17px] px-3 text-[#463f3a] font-a2'><div className='w-3 h-3 bg-red-400 mr-3 inline-flex'/>Share of Renewables in the mix</h1>
        </div>
    )
}