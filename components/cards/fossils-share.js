"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShareFossils } from '@/components/charts/energy';
import { ArrowDown } from 'lucide-react';

export const FossilShare = ({className}) => {
    return (
        <div className={`relative ${className}`}>
            <h1 className='text-[17px] px-3 font-a2'><div className='w-3 h-3 bg-red-400 mr-3 inline-flex'/>Share of Fossil Fuels in the mix</h1>
            <div className='pt-3 my-3 mt-5 overflow-auto text-white bg-black relative rounded-[10px]'>    
                <div className='text-[30px] px-6 font-a1'>45%<div className='text-[10px] text-white pl-2 font-a2 inline-flex items-end gap-1'><ArrowDown size={17} className='text-[#ec542e]'/>5% YoY</div></div>
                <ShareFossils className='w-full h-[150px]'/>
            </div>
        </div>
    )
}