"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SpaceLunchesRocket } from '@/components/charts/space';
import NumberFlow from '@number-flow/react'
import { getDomainData } from '@/lib/utils';
import { Menu } from '@/components/menu';

export const RocketLaunches = ({className, data, country}) => {

    data = data.filter(item => item.Year > 2000)

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Orbital launches by launch vehicle</h1>
            <SpaceLunchesRocket data={data} className='w-full h-[450px] mt-4'/>
            <Menu />
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={200} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>absolute clean energy share growth in the electricity mix since.</div>
            </div>
        </div>
        
    )
}