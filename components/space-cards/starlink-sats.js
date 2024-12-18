"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { StarlinkSatellites } from '@/components/charts/space';
import NumberFlow from '@number-flow/react'
import { sortData } from '@/lib/utils';
import { Menu } from '@/components/menu';

export const StarlinkSats = ({className, data, country}) => {
    data = sortData(data, "desc", 'Year')

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Cumulative Starlink satellites launched by year</h1>
            <StarlinkSatellites data={data} className='w-full h-[450px] mt-4'/>
            <Menu />
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={200} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>absolute clean energy share growth in the electricity mix since.</div>
            </div>
        </div>
        
    )
}