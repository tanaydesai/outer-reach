"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CapacityAdditions } from '@/components/charts/energy';
import NumberFlow from '@number-flow/react'
import { getDomainData } from '@/lib/utils';

export const EnergyCapacityAdditions = ({className, data, country}) => {
    data = getDomainData(data, country, "YoY absolute change")
    let value = data.slice(-5).reduce((acc, { Solar }, i, arr) => i > 0 ? acc + (Solar - arr[i - 1].Solar) : acc, 0) / 4
    
    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Renewable capacity additions by sources (GW), {country}</h1>
            <CapacityAdditions data={data} className='w-full flex-1 min-h-[350px] mt-4'/>
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={value} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>average growth in yearly solar capacity additions since {data.at(-5)["Year"]}.</div>
            </div>
        </div>
    )
}