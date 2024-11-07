"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CapacityChange } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"


export const EnergyCapacityChange = ({className}) => {
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
            <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
        </div>
    )
}