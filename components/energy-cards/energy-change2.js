"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyMixChange2 } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import NumberFlow from '@number-flow/react'

export const EnergyChange2 = ({className}) => {
    const [value, setValue] = useState('12');

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in Fossil fuel, Renewable & nuclear energy consumption</h1>
            <Tabs2 defaultValue="account">
                <TabsContent2 value="account">
                    <EnergyMixChange2 className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="password">
                    <EnergyMixChange2 className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsList2>
                    <TabsTrigger2 value="account">Absolute</TabsTrigger2>
                    <TabsTrigger2 value="password">% Share</TabsTrigger2>
                </TabsList2>
            </Tabs2>
             <div className='cursor-default sm:flex' onClick={() => setValue((Math.floor(Math.random() * (50 - 10 + 50)) + 10))}>
                <div className='chart-number'><NumberFlow value={value}/>Gwh</div>
                <div className='chart-desc'>of clean energy capacity added in the last year.</div>
            </div>
        </div>
        
    )
}