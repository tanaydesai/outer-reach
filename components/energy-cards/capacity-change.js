"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CapacityChange } from '@/components/charts/energy';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import NumberFlow from '@number-flow/react'

export const EnergyCapacityChange = ({className}) => {
    const [value, setValue] = useState('0.30');

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Energy capacity additions by sources</h1>
            <CapacityChange className='w-full flex-1 mt-4'/>
            <ToggleGroup type="single" defaultValue="a">
                    <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                    <ToggleGroupItem value="b">%</ToggleGroupItem>
            </ToggleGroup>
            <div className='cursor-default sm:flex' onClick={() => setValue((Math.floor(Math.random() * (1 - 0.05 + 1)) + 0.05))}>
                <div className='chart-number'>+<NumberFlow value={value} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>growth in clean energy capacity additions since 2019.</div>
            </div>
        </div>
    )
}