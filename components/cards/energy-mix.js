"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Tabs3, TabsContent3, TabsList3, TabsTrigger3 } from "@/components/ui/tabs"

export const EnergyMix = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
             <h1 className='chart-title'><div className='tag-box'/> 
             Share of primary energy consumption by individual source</h1>
           <div className='chart'>
                <Tabs3 defaultValue="ec">
                    <TabsList3>
                        <TabsTrigger3 value="ec">Energy Consumption</TabsTrigger3>
                        <TabsTrigger3 value="elc">Electricity Consumption</TabsTrigger3>
                        {/* Abs / Share */}
                    </TabsList3>
                    <TabsContent3 value="ec">
                        <EnergyShare className='w-full h-[350px]'/>
                        <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
                    </TabsContent3>
                    <TabsContent3 value="elc">
                        <EnergyShare className='w-full h-[350px]'/>
                        <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
                    </TabsContent3>
                </Tabs3>
           </div>
        </div>
    )
}