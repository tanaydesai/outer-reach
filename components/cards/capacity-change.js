"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PercentChange } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs3, TabsContent3, TabsList3, TabsTrigger3 } from "@/components/ui/tabs"


export const RenewableCapacityChange = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
             <h1 className='text-[18px] font-a2 px-3'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/> 
             Change in Renewable capacity by
             <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">2024</SelectItem>
                    <SelectItem value="light">2023</SelectItem>
                </SelectContent>
                </Select>
             </h1>
           <div className='py-3 mt-5 my-3 rounded-[10px] border-[2px] border-[#d9d9d9]'>
                <Tabs3 defaultValue="cc">
                    <TabsList3>
                        <TabsTrigger3 value="cc">Absolute</TabsTrigger3>
                        <TabsTrigger3 value="pc">% Share</TabsTrigger3>
                        {/* Abs / Share */}
                    </TabsList3>
                    <TabsContent3 value="cc">
                        <PercentChange className='w-full h-[330px] mt-4'/>
                        <p className='text-[14px] mx-3 mt-5 font-a1 md:w-[50%] text-[#656565]'>Countries leading the way by share of Renewables in the mix.</p>
                    </TabsContent3>
                    <TabsContent3 value="pc">
                        <PercentChange className='w-full h-[330px] mt-4'/>
                        <p className='text-[14px] mx-3 mt-5 font-a1 md:w-[50%] text-[#656565]'>Countries leading the way by share of Renewables in the mix.</p>
                    </TabsContent3>
                </Tabs3>
           </div>
        </div>
    )
}