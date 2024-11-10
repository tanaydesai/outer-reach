"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyConsumptionGDP } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"

export const EnergyGDP = ({className}) => {
    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in energy consumption and GDP</h1>
            <Tabs2 defaultValue="account">
                <TabsContent2 value="account">
                    <EnergyConsumptionGDP className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="password">
                    <EnergyConsumptionGDP className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsList2>
                    <TabsTrigger2 value="account">Absolute</TabsTrigger2>
                    <TabsTrigger2 value="password">% Change</TabsTrigger2>
                </TabsList2>
            </Tabs2>
            <p className='chart-desc'>Historical change in CO2 emissions per capita and GDP per capita.</p>
        </div>
    )
}