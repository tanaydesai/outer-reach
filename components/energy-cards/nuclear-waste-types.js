"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NuclearWasteTypesChart } from '@/components/charts/energy';
import NumberFlow from '@number-flow/react'
import { Menu } from '../menu';

export const NuclearWasteTypes = ({className}) => {
   
    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Breakdown of nuclear waste by type</h1>
            <NuclearWasteTypesChart className='w-full h-[300px] mt-4'/>
            <Menu />
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={0.03} format={{style: 'percent'}}/></div>
                <div className='chart-desc'>of nuclear waste is high-level waste i.e spent fuel (95% radioactivity) contrary to myths about nuclear energy producing a lot of radioactive waste</div>
            </div>
        </div>
    )
}