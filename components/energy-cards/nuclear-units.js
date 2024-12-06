"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NuclearUnits, MultiCountry } from '@/components/charts/energy';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import NumberFlow from '@number-flow/react'
import { getDomainData, sortData } from '@/lib/utils';
import { Menu } from '@/components/menu';

export const NuclearReactors = ({className, data, data2, country}) => {       
    data = sortData(data.filter(d => d["Country"] !== "World"), "desc", "Operation Units").slice(0, 15);
    data2 = data2.filter(item => item.Country !== "World")

    let countries = sortData(getDomainData(data2, false, false, 2023), "desc", "Units").map(item => item.Country).slice(0, 10);
    let result = Object.values(countries.map(c => getDomainData(data2, c).map(item => ({ Year: item.Year, [item.Country]: item["Units"] }))).flat().reduce((acc, { Year, ...rest }) => {
            acc[Year] = { ...acc[Year], Year, ...rest };
            return acc;
        }, {}))

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Nuclear reactors units by country, type and year</h1>
            <Tabs2 defaultValue="r">
                <TabsList2 className="my-3">
                    <TabsTrigger2 value="r">Reactors</TabsTrigger2>
                    <TabsTrigger2 value="c">Yearly</TabsTrigger2>
                    <TabsTrigger2 value="p">Projected (2030)</TabsTrigger2>
                </TabsList2>
                <TabsContent2 value="r"> 
                    <NuclearUnits data={data} className='w-full mt-4 flex-1 h-[400px]'/>
                </TabsContent2>
                <TabsContent2 value="c">
                    <MultiCountry data={result} className='w-full flex-1 mt-4 h-[400px]'/>
                </TabsContent2>
                <TabsContent2 value="p">
                    <NuclearUnits data={data} className='w-full mt-4 flex-1 h-[400px]'/>
                </TabsContent2>
            </Tabs2>
            <Menu />
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={result.at(-1)["USA"]} /></div>
                <div className='chart-desc'>USA has the most number of nuclear reactors in the world. While China is noticbly getting more reactors online fast.</div>
            </div>
        </div>
    )
}