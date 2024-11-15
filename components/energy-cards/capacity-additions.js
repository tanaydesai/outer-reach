"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CapacityAdditions } from '@/components/charts/energy';
import NumberFlow from '@number-flow/react'

export const EnergyCapacityAdditions = ({className, data, country}) => {
    data = data.filter((d) => d.Country == country)
    const [value, setValue] = useState('0.30');

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Renewable capacity additions by sources (GW), {country}</h1>
            <CapacityAdditions data={data} className='w-full flex-1 mt-4'/>
            <div className='cursor-default sm:flex' onClick={() => setValue((Math.floor(Math.random() * (1 - 0.05 + 1)) + 0.05))}>
                <div className='chart-number'><NumberFlow value={value} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>growth in clean energy capacity additions since 2019.</div>
            </div>
        </div>
    )
}