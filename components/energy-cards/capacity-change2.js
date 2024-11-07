"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CapacityChange2 } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"


export const EnergyCapacityChange2 = ({className}) => {
    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>YoY change in installed capacity by individual sources</h1>
            <Tabs2 defaultValue="cc">
                <TabsContent2 value="cc">
                    <CapacityChange2 className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="pc">
                    <CapacityChange2 className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsList2>
                    <TabsTrigger2 value="cc">Absolute</TabsTrigger2>
                    <TabsTrigger2 value="pc">% Change</TabsTrigger2>
                </TabsList2>
            </Tabs2>
            <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
        </div>
    )
}