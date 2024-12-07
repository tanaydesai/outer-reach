"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CurrentCapacity, PlannedCapacity, MultiCountry } from '@/components/charts/energy';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import NumberFlow from '@number-flow/react'
import { getDomainData, sortData, continents } from '@/lib/utils';
import { Menu } from '@/components/menu';

export const NuclearCapacities = ({className, data, country}) => {
    let result = sortData(getDomainData(data, false, false, 2023), "desc", "Nuclear").filter(item => !continents.includes(item.Country)).slice(0, 10).map(item => ({ type: item.Country, value: item["Nuclear"] }));
   
    let countries = result.map(item => item.type);
    let result2 = Object.values(countries.map(c => getDomainData(data, c).map(item => ({ Year: item.Year, [c]: item["Nuclear"] }))).flat().reduce((acc, { Year, ...rest }) => {
            acc[Year] = { ...acc[Year], Year, ...rest };
            return acc;
        }, {})
        )

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Installed capacity of nuclear energy (GW) by countries</h1>
            <Tabs2 defaultValue="cc">
                <TabsList2 className="my-3">
                    <TabsTrigger2 value="cc">Current</TabsTrigger2>
                    <TabsTrigger2 value="yc">Yearly</TabsTrigger2>
                    <TabsTrigger2 value="pc">Projected (2030)</TabsTrigger2>
                </TabsList2>
                <TabsContent2 value="cc">
                    <CurrentCapacity data={result} className='w-full h-[400px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="yc"> 
                    <MultiCountry data={result2} className='w-full h-[400px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="pc">
                    <PlannedCapacity className='w-full h-[400px] mt-4'/>
                </TabsContent2>
            </Tabs2>
            <Menu />
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={result.at(0)["value"]} />GW</div>
                <div className='chart-desc'>is {countries[0]}'s current installed capacity of nuclear energy, the largest in the world.</div>
            </div>
        </div>
    )
}