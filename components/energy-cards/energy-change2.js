"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyMixChange2 } from '@/components/charts/energy';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import NumberFlow from '@number-flow/react'

export const EnergyChange2 = ({className}) => {
    const [value, setValue] = useState('0.16');

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in Fossil fuel, Renewable & nuclear energy consumption</h1>
            <EnergyMixChange2 className='w-full flex-1 mt-4'/>
            <ToggleGroup type="single" defaultValue="a">
                    <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                    <ToggleGroupItem value="b">%</ToggleGroupItem>
            </ToggleGroup>
            <div className='cursor-default sm:flex' onClick={() => setValue((Math.floor(Math.random() * (1 - 0.05 + 1)) + 0.05))}>
                <div className='chart-number'>+<NumberFlow value={value} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>growth in clean energy consumption since 2019.</div>
            </div>
        </div>
        
    )
}