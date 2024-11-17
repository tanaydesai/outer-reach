"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CurrentCapacity, PlannedCapacity, Capacity } from '@/components/charts/energy';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import NumberFlow from '@number-flow/react'
import { getDomainData } from '@/lib/utils';

export const EnergyCapacities = ({className, data, country}) => {
    data = getDomainData(data, country, "" , false)
    let value =  Object.entries(data.at(-1)).filter(([key]) => ["Solar", "Wind", "Nuclear", "Hydro", "Bioenergy", "Other Renewables"].includes(key)).filter(([key]) => !["Year", "Country"].includes(key)).reduce((acc, [, value]) => acc + (value === "" || value == null ? 0 : value), 0).toFixed(0)

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Renewable cumulative installed capacity by sources (GW), {country}</h1>
            <Tabs2 defaultValue="cc">
                <TabsList2 className="my-3">
                    <TabsTrigger2 value="cc">Current</TabsTrigger2>
                    <TabsTrigger2 value="yc">Yearly</TabsTrigger2>
                    <TabsTrigger2 value="pc">Projected (2030)</TabsTrigger2>
                </TabsList2>
                <TabsContent2 value="cc">
                    <CurrentCapacity data={Object.entries(data.at(-1)).filter(([key]) => key === "Solar" || key === "Wind" || key === "Nuclear" || key === "Hydro" || key === "Bioenergy" || key === "Other Renewables").map(([type, value]) => ({ type, value }))} className='w-full h-[370px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="yc"> 
                    <Capacity data={data} className='w-full h-[370px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="pc">
                    <PlannedCapacity className='w-full h-[370px] mt-4'/>
                </TabsContent2>
            </Tabs2>
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={value}/>GW</div>
            <div className='chart-desc'>Current comulative clean energy (renewables + nuclear) capacity as of {data.at(-1)["Year"]}, ranking 5th in the world.</div>
            </div>
        </div>
    )
}