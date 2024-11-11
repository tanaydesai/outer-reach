"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyConsumptionGDP } from '@/components/charts/energy';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export const EnergyGDP = ({className}) => {
    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in energy consumption and GDP</h1>
            <EnergyConsumptionGDP className='w-full h-[400px] mt-4'/>
            <ToggleGroup type="single" defaultValue="a">
                    <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                    <ToggleGroupItem value="b">%</ToggleGroupItem>
            </ToggleGroup>
            <p className='chart-desc'>Historical change in CO2 emissions per capita and GDP per capita.</p>
        </div>
    )
}