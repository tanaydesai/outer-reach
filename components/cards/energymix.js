"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"


export const EnergyMix = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className} bg-[#e5e4e4] rounded-[5px] py-3 px-3`}>
            <h1 className='text-[15px] font-a2 text-[#463f3a]'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/> 
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
            <div className='py-5 relative'>    
                <Tabs2 defaultValue="account">
                    <TabsList2 className="mt-4 ml-3 sm:mt-0">
                        <TabsTrigger2 value="account">Absolute</TabsTrigger2>
                        <TabsTrigger2 value="password">% Share</TabsTrigger2>
                    </TabsList2>
                    <TabsContent2 value="account">
                        <EnergyShare className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                    <TabsContent2 value="password">
                        <EnergyShare className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                </Tabs2>
            </div> 
            <p className='text-[14px] mx-3 mt-2 font-a1 text-[#656565]'>Measured as a percentage of primary energy.</p>   
            {/* <p className='text-[12px] mx-3 my-0.5 font-a2'>Data source: <span className=' underline'>Ourworldindata</span></p> */}
        </div>
    )
}