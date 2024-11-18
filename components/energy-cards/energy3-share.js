"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Energy3ShareChange } from '@/components/charts/energy';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import NumberFlow from '@number-flow/react'
import { getDomainData } from '@/lib/utils';

export const Energy3Share = ({className, data, country}) => {

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Share of Fossil fuel, Renewable & nuclear (%), {country}</h1>
            <Tabs2 defaultValue="elc" className='flex-1'>
                <TabsList2 className="my-3">
                    <TabsTrigger2 value="ec">Energy</TabsTrigger2>
                    <TabsTrigger2 value="elc">Electricity</TabsTrigger2>
                </TabsList2>
                <TabsContent2 value="ec" >
                    <Energy3ShareChange data={getDomainData(data, country, "e-3-%").slice(-20)} className='w-full flex-1 min-h-[350px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="elc">
                    <Energy3ShareChange data={getDomainData(data, country, "elc-3-%").slice(-20)} className='w-full flex-1 min-h-[350px] mt-4'/>
                </TabsContent2>
            </Tabs2>
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={((getDomainData(data, country, "e-3-%").at(-1)["Renewables"] + getDomainData(data, country, "e-3-%").at(-1)["Nuclear"]) - (getDomainData(data, country, "e-3-%").at(-5)["Renewables"] + getDomainData(data, country, "e-3-%").at(-5)["Nuclear"])) / 100} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>absolute growth in clean energy (renewable + nuclear) share since {data.at(-5)["Year"]}.</div>
            </div>
        </div>
        
    )
}