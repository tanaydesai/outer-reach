"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"

export const EnergyMix = ({className}) => {
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
                    <TabsTrigger2 value="ec">Absolute</TabsTrigger2>
                    <TabsTrigger2 value="elc">% Change</TabsTrigger2>
                </TabsList2>
            </Tabs2>
            <p className='chart-desc'>Historical change in CO2 emissions per capita and GDP per capita.</p>
        </div>
    )
}