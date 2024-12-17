"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SpaceLunchesCountry } from '@/components/charts/space';
import NumberFlow from '@number-flow/react'
import { getDomainData } from '@/lib/utils';
import { Menu } from '@/components/menu';

export const SpaceLaunches = ({className, data, country}) => {

    data = getDomainData(data, ["United States", "China", "India", "Russia", "Europe"])

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Orbital launches by country</h1>
            <SpaceLunchesCountry data={data} className='w-full h-[450px] mt-4'/>
            <Menu />
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={200} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>absolute clean energy share growth in the electricity mix since.</div>
            </div>
        </div>
        
    )
}