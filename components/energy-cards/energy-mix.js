"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import NumberFlow from '@number-flow/react'
import { getDomainData } from '@/lib/utils';

export const EnergyMix = ({className, data, country}) => {
    const [type, setType] = useState("abs")

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Primary consumption by individual sources (TWh), {country}</h1>
            <Tabs2 defaultValue="ec">
                <TabsList2 className="my-3">
                    <TabsTrigger2 value="ec">Energy</TabsTrigger2>
                    <TabsTrigger2 value="elc">Electricity</TabsTrigger2>
                </TabsList2>
                <TabsContent2 value="ec">
                    <EnergyShare data={type === "abs" ? getDomainData(data, country, "e-TWh") : getDomainData(data, country, "e-%")} className='w-full flex-1 h-[350px]'/>
                </TabsContent2>
                <TabsContent2 value="elc">
                    <EnergyShare data={getDomainData(data, country, "elc-TWh")} className='w-full flex-1 min-h-[350px]'/>
                </TabsContent2>
            </Tabs2>
            <ToggleGroup type="single" onValueChange={setType} defaultValue="abs">
                <ToggleGroupItem value="abs">ABS</ToggleGroupItem>
                <ToggleGroupItem value="%">%</ToggleGroupItem>
            </ToggleGroup>
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={Object.entries(getDomainData(data, country, "e-TWh").at(-1)).filter(([key]) => !["Year", "Code", "Country"].includes(key)).reduce((acc, [, value]) => acc + value, 0).toFixed(0)}/>TWh </div>
                <div className='chart-desc'>is the total energy {country}'s energy comes from renewable and nuclear energy sources thus ranking 20th in the world in clean energy consumption.</div>
            </div>
        </div>
    )
}