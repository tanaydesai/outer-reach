"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"


export const EnergyMix = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
            <h1 className='text-[14px] uppercase font-a2 px-3 text-[#444444]'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/>Share of 
            <Select>
            <SelectTrigger>
                <SelectValue placeholder="Energy Production" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="yo">Energy Production</SelectItem>
                <SelectItem value="light">Energy Consumption</SelectItem>
                <SelectItem value="dark">Electricity Production</SelectItem>
                <SelectItem value="system">Electricity Consumption</SelectItem>
            </SelectContent>
            </Select>
             by indivisual 
             <Select>
                <SelectTrigger className="mt-2 sm:mt-0">
                    <SelectValue placeholder="Source" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="s">Source</SelectItem>
                    <SelectItem value="light">Renewables</SelectItem>
                    <SelectItem value="dark">Solar</SelectItem>
                    <SelectItem value="system">Wind</SelectItem>
                    <SelectItem value="system">Hydro</SelectItem>
                    <SelectItem value="system">Nuclear</SelectItem>
                    <SelectItem value="system">Fossil fuels</SelectItem>
                </SelectContent>
                </Select>
             </h1>
            <p className='text-[13px] mx-3 mt-2 font-rajdhani-regular'>Measured as a percentage of primary energy.</p>   
            <div className='py-3 mt-5 border-2 border-[#b3b3b3] rounded-[15px]'>    
                <Tabs2 defaultValue="account">
                    <TabsContent2 value="account">
                        <EnergyShare className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                    <TabsContent2 value="password">
                        <EnergyShare className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                    <TabsList2 className="mt-4 px-3 sm:mt-0">
                        <TabsTrigger2 value="account">Absolute</TabsTrigger2>
                        <TabsTrigger2 value="password">% Share</TabsTrigger2>
                    </TabsList2>
                </Tabs2>
            </div> 
            {/* <p className='text-[13px] mx-5 my-0.5 font-rajdhani-regular'>Data source: <span className=' underline'>Ourworldindata</span></p> */}
        </div>
    )
}