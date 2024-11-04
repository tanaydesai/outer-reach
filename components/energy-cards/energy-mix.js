"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"

export const EnergyMix = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
             <h1 className='chart-title'><div className='tag-box'/> 
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
                <SelectTrigger>
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
           <div className='chart'>
                <Tabs2 defaultValue="ec">
                    <TabsList2>
                        <TabsTrigger2 value="ec">Absolute</TabsTrigger2>
                        <TabsTrigger2 value="elc">% Change</TabsTrigger2>
                        {/* Abs / Share */}
                    </TabsList2>
                    <TabsContent2 value="ec">
                        <EnergyShare className='w-full h-[350px]'/>
                        <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
                    </TabsContent2>
                    <TabsContent2 value="elc">
                        <EnergyShare className='w-full h-[350px]'/>
                        <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
                    </TabsContent2>
                </Tabs2>
           </div>
        </div>
    )
}