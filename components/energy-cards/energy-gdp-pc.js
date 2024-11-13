"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyConsumptionGDPPC } from '@/components/charts/energy';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const EnergyGDPPC = ({className, data, country}) => {
    data = data.filter((d) => d.Country == country)

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in energy consumption per capita and GDP per capita, {country}</h1>
            <EnergyConsumptionGDPPC data={data} className='w-full flex-1 mt-4'/>
            <ToggleGroup type="single" defaultValue="a">
                    <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                    <ToggleGroupItem value="b">%</ToggleGroupItem>
            </ToggleGroup>
            <p className='chart-desc'>Historical change in CO2 emissions per capita and GDP per capita.</p>
        </div>
    )
}