"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CO2GDP } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"

export const CO2GDPPercapita = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
            <h1 className='chart-title'><div className='tag-box '/>Change in CO2 emissions & GDP per capita</h1>
            <div className='chart'>    
                <Tabs2 defaultValue="account">
                    <TabsList2>
                        <TabsTrigger2 value="account">Absolute</TabsTrigger2>
                        <TabsTrigger2 value="password">% Share</TabsTrigger2>
                    </TabsList2>
                    <TabsContent2 value="account">
                        <CO2GDP className='w-full h-[330px] mt-4'/>
                        <p className='chart-desc'>Historical change in CO2 emissions per capita and GDP per capita.</p>
                    </TabsContent2>
                    <TabsContent2 value="password">
                        <CO2GDP className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                </Tabs2>
            </div>
        </div>
    )
}