"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CO2GDP } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs3, TabsContent3, TabsList3, TabsTrigger3 } from "@/components/ui/tabs"

export const CO2GDPPercapita = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
            <h1 className='chart-title'><div className='tag-box '/>Change in CO2 emissions & GDP per capita</h1>
            <div className='chart'>    
                <Tabs3 defaultValue="account">
                    <TabsList3>
                        <TabsTrigger3 value="account">Absolute</TabsTrigger3>
                        <TabsTrigger3 value="password">% Share</TabsTrigger3>
                    </TabsList3>
                    <TabsContent3 value="account">
                        <CO2GDP className='w-full h-[330px] mt-4'/>
                        <p className='chart-desc'>Historical change in CO2 emissions per capita and GDP per capita.</p>
                    </TabsContent3>
                    <TabsContent3 value="password">
                        <CO2GDP className='w-full h-[330px] mt-4'/>
                    </TabsContent3>
                </Tabs3>
            </div>
        </div>
    )
}