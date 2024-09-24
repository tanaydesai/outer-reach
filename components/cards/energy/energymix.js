"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const EnergyMix = ({className}) => {
    return (
        <div className='w-full h-[400px] rounded-[30px] border-2 px-3 py-3 border-[#9b9b9b]'>
            <h1 className='text-[17px] uppercase font-a2 flex items-center'><div className='w-3 h-3 bg-red-400 mx-2 inline-flex'/>Share of 
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
                <SelectTrigger>
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
            <p className='text-[14px] mx-2 my-0.5 font-rajdhani-regular'>Measured as a percentage of primary energy.</p>        
            <Tabs defaultValue="account">
                <TabsContent value="account">
                    <EnergyShare className='w-full h-[280px] mt-4'/>
                </TabsContent>
                <TabsContent value="password">
                    <EnergyShare className='w-full h-[280px] mt-4'/>
                </TabsContent>
                <TabsList>
                    <TabsTrigger value="account">Absolute</TabsTrigger>
                    <TabsTrigger value="password">% Share</TabsTrigger>
                </TabsList>
            </Tabs>

            {/* <p className='text-[13px] mx-5 my-0.5 font-rajdhani-regular'>Data source: <span className=' underline'>Ourworldindata</span></p> */}
        </div>
    )
}