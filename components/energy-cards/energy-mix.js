"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import NumberFlow from '@number-flow/react'


export const EnergyMix = ({className}) => {
    const [value, setValue] = useState('20000');

    return (
        <div className={`chart ${className}`}>
           <h1 className='chart-title'>
                Primary
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Energy" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">Energy</SelectItem>
                        <SelectItem value="light">Electricity</SelectItem>
                    </SelectContent>
                </Select>
                consumption by individual
                <Select>
                <SelectTrigger className='mt-2.5 sm:mt-0'>
                    <SelectValue placeholder="Sources" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">All sources</SelectItem>
                    <SelectItem value="light">Solar</SelectItem>
                    <SelectItem value="light">Wind</SelectItem>
                    <SelectItem value="dark">Nuclear</SelectItem>
                    <SelectItem value="dark">Hydro</SelectItem>
                </SelectContent>
                </Select>
             </h1>
            <Tabs2 defaultValue="ec">
                <TabsContent2 value="ec">
                    <EnergyShare className='w-full h-[350px]'/>
                </TabsContent2>
                <TabsContent2 value="elc">
                    <EnergyShare className='w-full h-[350px]'/>
                </TabsContent2>
                <TabsList2>
                    <TabsTrigger2 value="ec">Abs</TabsTrigger2>
                    <TabsTrigger2 value="elc">% Change</TabsTrigger2>
                </TabsList2>
            </Tabs2>
            <div className='cursor-default sm:flex' onClick={() => setValue((Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000))}>
                <div className='chart-number'><NumberFlow value={value}/>Kwh </div>{/* format={{ style: 'percent' }} */}
                <div className='chart-desc'>of france's energy comes from renewable and nuclear energy sources thus ranking 20th in the world in clean energy consumption.</div>
            </div>
        </div>
    )
}