"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CurrentCapacity, PlannedCapacity, Capacity } from '@/components/charts/energy';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import NumberFlow from '@number-flow/react'

export const EnergyCapacities = ({className, data, country}) => {
    data = data.filter((d) => d.Country == country)
    let value = '600'

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Cumulative installed capacity by sources (GW), {country}</h1>
            <Tabs2 defaultValue="cc">
                <TabsList2 className="my-3">
                    <TabsTrigger2 value="cc">Current</TabsTrigger2>
                    <TabsTrigger2 value="yc">Yearly</TabsTrigger2>
                    <TabsTrigger2 value="pc">Projected (2030)</TabsTrigger2>
                </TabsList2>
                <TabsContent2 value="cc">
                    <CurrentCapacity data={Object.entries(data.at(-1)).filter(([key]) => key === "Solar" || key === "Wind" || key === "Nuclear" || key === "Hydro" || key === "Bioenergy" || key === "Other Renewables" || key === "Fossil Fuels" ).map(([type, value]) => ({ type, value }))} className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="yc">
                    <Capacity data={data} className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="pc">
                    <PlannedCapacity className='w-full h-[330px] mt-4'/>
                </TabsContent2>
            </Tabs2>
            <ToggleGroup type="single" defaultValue="a">
                    <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                    <ToggleGroupItem value="b">%</ToggleGroupItem>
            </ToggleGroup>
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={value}/>Kwh </div>{/* format={{ style: 'percent' }} */}
                <div className='chart-desc'>Current comulative clean energy capacity, ranking 5th in the world.</div>
            </div>
        </div>
    )
}