"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SpaceRockeCost } from '@/components/charts/space';
import NumberFlow from '@number-flow/react'
import { sortData } from '@/lib/utils';
import { Menu } from '@/components/menu';

export const RocketCosts  = ({className, data, country}) => {

    data = sortData(data, "asc", "Year")

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Cost per kilogram to orbit by launch vehicle ($ / kg)</h1>
            <SpaceRockeCost data={data} className='w-full h-[450px] mt-4'/>
            <Menu />
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={200}/>$ / kg</div>
                <div className='chart-desc'>Is the estimated launch cost of Staship, the lowest of any kind of orbital class rocket</div>
            </div>
        </div>
        
    )
}