"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Capacity } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"

export const Capacities = ({className}) => {
    return (
        <div className={`w-full  min-h-[400px] ${className} bg-[#e5e4e4] rounded-[5px] py-3 px-3`}>
            <h1 className='text-[15px] text-[#463f3a] font-a2'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/>
            <Select>
            <SelectTrigger className="ml-0">
                <SelectValue placeholder="Planned" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Current</SelectItem>
                <SelectItem value="dark">Planned</SelectItem>
            </SelectContent>
            </Select>
             Energy Capacity, (GW)</h1>
            <div className='py-5 relative'>    
                <Tabs2 defaultValue="account">
                    <TabsList2 className="mt-4 ml-3 sm:mt-0">
                        <TabsTrigger2 value="account">Absolute</TabsTrigger2>
                        <TabsTrigger2 value="password">% Share</TabsTrigger2>
                    </TabsList2>
                    <TabsContent2 value="account">
                        <Capacity className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                    <TabsContent2 value="password">
                        <Capacity className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                </Tabs2>
            </div>
            <p className='text-[14px] mx-3 my-2 font-a1 text-[#656565] '>Annual planned energy capacity</p>
        </div>
    )
}