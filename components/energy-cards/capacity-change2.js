"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CapacityChange2 } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"


export const RenewableCapacityChange2 = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
             <h1 className='chart-title'><div className='tag-box '/> 
             YoY Change in installed capacity by
             <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Sources" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">All</SelectItem>
                    <SelectItem value="light">Solar</SelectItem>
                    <SelectItem value="light">Wind</SelectItem>
                    <SelectItem value="dark">Nuclear</SelectItem>
                    <SelectItem value="dark">Hydro</SelectItem>
                </SelectContent>
                </Select>
             </h1>
           <div className='chart'>
                <Tabs2 defaultValue="cc">
                    <TabsList2>
                        <TabsTrigger2 value="cc">Absolute</TabsTrigger2>
                        <TabsTrigger2 value="pc">% Change</TabsTrigger2>
                        {/* Abs / Share */}
                    </TabsList2>
                    <TabsContent2 value="cc">
                        <CapacityChange2 className='w-full h-[330px] mt-4'/>
                        <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
                    </TabsContent2>
                    <TabsContent2 value="pc">
                        <CapacityChange2 className='w-full h-[330px] mt-4'/>
                        <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
                    </TabsContent2>
                </Tabs2>
           </div>
        </div>
    )
}