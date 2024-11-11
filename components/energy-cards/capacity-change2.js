"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CapacityChange2 } from '@/components/charts/energy';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const EnergyCapacityChange2 = ({className}) => {
    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>YoY change in installed capacity by individual sources</h1>
            <CapacityChange2 className='w-full h-[330px] mt-4'/>
            <ToggleGroup type="single" defaultValue="a">
                    <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                    <ToggleGroupItem value="b">%</ToggleGroupItem>
            </ToggleGroup>
            <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
        </div>
    )
}