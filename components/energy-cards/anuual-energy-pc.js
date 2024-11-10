"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyUsePP } from '@/components/charts/energy';
import { ArrowUp } from 'lucide-react';

export const EnergyUse = ({className}) => {
    return (
        <div className={`chart text-white bg-black border-none px-0 pb-0 ${className}`}>
            <h1 className='chart-title text-white px-3'>Energy consumption per capita</h1>
            <div className='chart-data text-left pl-3'>25,000Kwh<div className='chart-data-span'><ArrowUp size={17} className='text-[#2eec7d]'/>5% YoY</div></div>
            <EnergyUsePP className='w-full h-[150px]'/>
        </div>
    )
}