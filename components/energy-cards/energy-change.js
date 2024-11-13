"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyMixChange } from '@/components/charts/energy';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import NumberFlow from '@number-flow/react'

export const EnergyChange = ({className, data, country}) => {
    data = data.filter((d) => d.Country == country)
    const [value, setValue] = useState(String(data[0]["Change (%)"]));

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in primary consumption, {country}</h1>
            <Tabs2 defaultValue="account">
                <TabsList2 className="my-3">
                    <TabsTrigger2 value="account">Energy</TabsTrigger2>
                    <TabsTrigger2 value="password">Electricity</TabsTrigger2>
                </TabsList2>
                <TabsContent2 value="account">
                    <EnergyMixChange data={data} className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="password">
                    <EnergyMixChange className='w-full h-[330px] mt-4'/>
                </TabsContent2>
            </Tabs2>
            <ToggleGroup type="single" defaultValue="a">
                    <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                    <ToggleGroupItem value="b">%</ToggleGroupItem>
            </ToggleGroup>
            <div className='cursor-default sm:flex' onClick={() => setValue((Math.floor(Math.random() * (1 - 0.05 + 1)) + 0.05))}>
                <div className='chart-number'>+<NumberFlow value={value} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>growth in primary energy consumption since 2019.</div>
            </div>
        </div>
    )
}