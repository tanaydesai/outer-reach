"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CapacityChange } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import NumberFlow from '@number-flow/react'

export const EnergyCapacityChange = ({className}) => {
    const [value, setValue] = useState('0.30');

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Energy capacity additions by sources</h1>
            <Tabs2 defaultValue="cc">
                <TabsContent2 value="cc">
                    <CapacityChange className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="pc">
                    <CapacityChange className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsList2>
                    <TabsTrigger2 value="cc">Absolute</TabsTrigger2>
                    <TabsTrigger2 value="pc">% Change</TabsTrigger2>
                </TabsList2>
            </Tabs2>
            <div className='cursor-default sm:flex' onClick={() => setValue((Math.floor(Math.random() * (1 - 0.05 + 1)) + 0.05))}>
                <div className='chart-number'>+<NumberFlow value={value} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>growth in clean energy capacity additions since 2019.</div>
            </div>
        </div>
    )
}