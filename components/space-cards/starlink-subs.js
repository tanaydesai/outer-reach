"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { StarlinkSubscribers } from '@/components/charts/space';
import NumberFlow from '@number-flow/react'
import { Menu } from '@/components/menu';

export const StarlinkSubs = ({className, data, country}) => {

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Cumulative Starlink satellites launched by year</h1>
            <StarlinkSubscribers data={data} className='w-full h-[450px] mt-4'/>
            <Menu />
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={200} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>absolute clean energy share growth in the electricity mix since.</div>
            </div>
        </div>
        
    )
}