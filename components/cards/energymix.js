"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import { Tabs3, TabsContent3, TabsList3, TabsTrigger3 } from "@/components/ui/tabs"


export const EnergyMix = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
           <div className='p-3 mb-3 rounded-[10px] border-[2px] border-[#d9d9d9]'>
                <Tabs3 defaultValue="yo">
                    <TabsList3>
                        <TabsTrigger3 value="yo">Energy Production</TabsTrigger3>
                        <TabsTrigger3 value="light">Energy Consumption</TabsTrigger3>
                        <TabsTrigger3 value="dark">Electricity Production</TabsTrigger3>
                        <TabsTrigger3 value="system">Electricity Consumption</TabsTrigger3>
                    </TabsList3>
                    <TabsContent3 value="yo">
                        <EnergyShare className='w-full h-[330px] mt-4'/>
                    </TabsContent3>
                    <TabsContent3 value="light">
                        <EnergyShare className='w-full h-[330px] mt-4'/>
                    </TabsContent3>
                </Tabs3>
           </div>
           <h1 className='text-[18px] mt-5 font-a2 text-[#463f3a] px-3'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/> 
            Share of primary energy consumption by indivisual source</h1>
            <p className='text-[14px] mx-3 mt-2 font-a1 md:w-[50%] text-[#656565]'>Countries leading the way by share of Renewables in the mix.</p>
        </div>
    )
}