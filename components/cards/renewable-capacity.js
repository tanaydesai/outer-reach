"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Capacity } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs3, TabsContent3, TabsList3, TabsTrigger3 } from "@/components/ui/tabs"


export const RenewableCapacities = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
             <h1 className='chart-title'><div className='tag-box '/> 
                Renewable capacity by 
                <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Renewables" />
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
                <Tabs3 defaultValue="cc">
                    <TabsList3>
                        <TabsTrigger3 value="cc">Current Capacity</TabsTrigger3>
                        <TabsTrigger3 value="pc">Planned Capacity</TabsTrigger3>
                        {/* Abs / Share */}
                    </TabsList3>
                    <TabsContent3 value="cc">
                        <Capacity className='w-full h-[330px] mt-4'/>
                        <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
                    </TabsContent3>
                    <TabsContent3 value="pc">
                        <Capacity className='w-full h-[330px] mt-4'/>
                        <p className='chart-desc'>Countries leading the way by share of Renewables in the mix.</p>
                    </TabsContent3>
                </Tabs3>
           </div>
        </div>
    )
}