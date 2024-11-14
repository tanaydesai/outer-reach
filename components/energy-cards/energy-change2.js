"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyMixChange2 } from '@/components/charts/energy';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import NumberFlow from '@number-flow/react'

export const EnergyChange2 = ({className, data, country}) => {
    data = data.filter((d) => d.Country == country)
    let value = String(((data.at(-1)["Renewables"] + data.at(-1)["Nuclear"]) - (data.at(-5)["Renewables"] + data.at(-5)["Nuclear"]))/ 100);

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Share of Fossil fuel, Renewable & nuclear in electricity mix (%), {country}</h1>
            <EnergyMixChange2 data={data} className='w-full flex-1 mt-4'/>
            <ToggleGroup type="single" defaultValue="a">
                    <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                    <ToggleGroupItem value="b">%</ToggleGroupItem>
            </ToggleGroup>
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={value} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>absolute growth in clean energy (renewable + nuclear) share since {data.at(-5)["Year"]}.</div>
            </div>
        </div>
        
    )
}