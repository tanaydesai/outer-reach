"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyMixChange } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import NumberFlow from '@number-flow/react'

export const EnergyChange = ({className}) => {
    const [value, setValue] = useState('0.06');

    return (
        <div className={`chart ${className}`}>
             <h1 className='chart-title'>Change in primary 
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Energy" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Energy</SelectItem>
                        <SelectItem value="light">Electricity</SelectItem>
                    </SelectContent>
                </Select>
                consumption
            </h1>
            <Tabs2 defaultValue="account">
                <TabsContent2 value="account">
                    <EnergyMixChange className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="password">
                    <EnergyMixChange className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsList2>
                    <TabsTrigger2 value="account">Absolute</TabsTrigger2>
                    <TabsTrigger2 value="password">% Change</TabsTrigger2>
                </TabsList2>
            </Tabs2>
            <div className='cursor-default sm:flex' onClick={() => setValue((Math.floor(Math.random() * (1 - 0.05 + 1)) + 0.05))}>
                <div className='chart-number'>+<NumberFlow value={value} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>growth in primary energy consumption since 2019.</div>
            </div>
        </div>
    )
}