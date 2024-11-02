"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CO2GDP } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs3, TabsContent3, TabsList3, TabsTrigger3 } from "@/components/ui/tabs"

export const EnergyUseCO2Percapita = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
            <h1 className='text-[18px] text-[#463f3a] font-a2 px-3'><div className='w-3 h-3 mr-2 bg-red-400 inline-flex'/>Change in Energy use per person & GDP per capita</h1>
            <div className='py-3 mt-5 rounded-[10px] border-[2px] border-[#d9d9d9]'>    
                <Tabs3 defaultValue="account">
                    <TabsList3>
                        <TabsTrigger3 value="account">Absolute</TabsTrigger3>
                        <TabsTrigger3 value="password">% Share</TabsTrigger3>
                    </TabsList3>
                    <TabsContent3 value="account">
                        <CO2GDP className='w-full h-[330px] mt-4'/>
                        <p className='text-[14px] mt-5 mx-4 font-a1 md:w-[50%]'>Historical change in CO2 emissions per capita and GDP per capita.</p>
                    </TabsContent3>
                    <TabsContent3 value="password">
                        <CO2GDP className='w-full h-[330px] mt-4'/>
                    </TabsContent3>
                </Tabs3>
            </div>
        </div>
    )
}