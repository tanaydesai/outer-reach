"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyConsumptionGDPPC } from '@/components/charts/energy';
import NumberFlow from '@number-flow/react'
import { getDomainData, removeNAN } from '@/lib/utils';
import { Menu } from '@/components/menu';

export const EnergyGDPPC = ({className, data, country}) => {
    data = removeNAN(getDomainData(data, country, "e-use-pp-gdp-pc"))
    let value = (data.at(-1)["GDP per capita, PPP (constant 2017 international $)"] - data.at(-5)["GDP per capita, PPP (constant 2017 international $)"]) / data.at(-5)["GDP per capita, PPP (constant 2017 international $)"];
    let value2 = (data.at(-1)["Primary energy consumption per capita (kWh/person)"] - data.at(-5)["Primary energy consumption per capita (kWh/person)"]) / data.at(-5)["Primary energy consumption per capita (kWh/person)"];
    
    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in energy use per capita and GDP per capita, {country}</h1>
            <EnergyConsumptionGDPPC data={data} className='w-full flex-1 h-[350px] mt-4'/>
            <Menu />
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={value} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>growth in {country}'s' GDP per capita since {data.at(-5)["Year"]}.</div>
            </div>
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={value2} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>growth in {country}'s' Energy consumption per capita since {data.at(-5)["Year"]}.</div>
            </div>
        </div>
    )
}