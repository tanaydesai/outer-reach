"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyConsumptionGDPPC } from '@/components/charts/energy';
import NumberFlow from '@number-flow/react'
import { getDomainData, removeNAN, sortData } from '@/lib/utils';
import { Menu } from '@/components/menu';

export const EnergyGDPPC = ({className, data, country}) => {
    data = getDomainData(data, country, "e-use-pp-gdp-pc")

    let gdpValue = sortData(data, "desc", "Year").find(d => d["GDP per capita, PPP (constant 2017 international $)"] !== "");
    let energyValue = sortData(data, "desc", "Year").find(d => d["Primary energy consumption per capita (kWh/person)"] !== "");
    let value = gdpValue ? (gdpValue["GDP per capita, PPP (constant 2017 international $)"] - data[data.length - 5]["GDP per capita, PPP (constant 2017 international $)"]) / data[data.length - 5]["GDP per capita, PPP (constant 2017 international $)"] : undefined;
    let value2 = energyValue ? (energyValue["Primary energy consumption per capita (kWh/person)"] - data[data.length - 5]["Primary energy consumption per capita (kWh/person)"]) / data[data.length - 5]["Primary energy consumption per capita (kWh/person)"] : undefined
    
    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in energy use per capita and GDP per capita, {country}</h1>
            <EnergyConsumptionGDPPC data={data} className='w-full h-[350px] mt-4'/>
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