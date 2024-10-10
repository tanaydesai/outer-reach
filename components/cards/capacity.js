"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Capacity } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"

export const Capacities = ({className}) => {
    return (
        <div className={`w-full  min-h-[400px] ${className}`}>
            <h1 className='text-[17px] text-[#444444] font-a2 px-3'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/>
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
            <p className='text-[14px] mx-3 my-2 font-a1 text-[#656565] '>Annual planned energy capacity</p>
            <div className='py-3 mt-5 border-2 border-[#b3b3b3] rounded-[10px]'>    
                <Tabs2 defaultValue="account">
                    <TabsContent2 value="account">
                        <Capacity className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                    <TabsContent2 value="password">
                        <Capacity className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                    <TabsList2 className="mt-4 ml-3 sm:mt-0">
                        <TabsTrigger2 value="account">Absolute</TabsTrigger2>
                        <TabsTrigger2 value="password">% Share</TabsTrigger2>
                    </TabsList2>
                </Tabs2>
            </div>
            {/* <p className='text-[14px] mx-5 my-0.5 font-a2'>Data source: <span className=' underline'>Ourworldindata</span></p> */}
        </div>
    )
}