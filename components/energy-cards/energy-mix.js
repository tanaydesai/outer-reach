"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import NumberFlow from '@number-flow/react'

export const EnergyMix = ({className, data, data2, country}) => {
    data = data.filter((d) => d.Country == country)
    data2 = data2.filter((d) => d.Country == country)
    let value =  "20000"
    
    return (
        <div className={`chart ${className}`}>
            <Tabs2 defaultValue="ec">
                <h1 className='chart-title'>Primary consumption by individual sources (TWh), {country}</h1>
                    <TabsList2 className="my-3">
                        <TabsTrigger2 value="ec">Energy</TabsTrigger2>
                        <TabsTrigger2 value="elc">Electricity</TabsTrigger2>
                    </TabsList2>
                <TabsContent2 value="ec">
                    <EnergyShare data={data} className='w-full h-[350px]'/>
                </TabsContent2>
                <TabsContent2 value="elc">
                    <EnergyShare data={data2} className='w-full h-[350px]'/>
                </TabsContent2>
                <ToggleGroup type="single" defaultValue="a">
                        <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                        <ToggleGroupItem value="b">%</ToggleGroupItem>
                </ToggleGroup>
                <div className='cursor-default sm:flex'>
                    <div className='chart-number'><NumberFlow value={value}/>TWh </div>
                    <div className='chart-desc'>of {country}'s energy comes from renewable and nuclear energy sources thus ranking 20th in the world in clean energy consumption.</div>
                </div>
            </Tabs2>
        </div>
    )
}