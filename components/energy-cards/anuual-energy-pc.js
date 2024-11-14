"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyUsePP } from '@/components/charts/energy';
import { ArrowUp } from 'lucide-react';

export const EnergyUse = ({className, data, country}) => {
    data = data.filter((d) => d.Country == country)
    let value = (((data.at(-1)["Primary energy consumption per capita (kWh/person)"] - data.at(-2)["Primary energy consumption per capita (kWh/person)"]) / data.at(-2)["Primary energy consumption per capita (kWh/person)"]) * 100).toFixed(1);
    
    return (
        <div className={`chart text-white bg-black border-none px-0 pb-0 ${className}`}>
            <h1 className='chart-title text-white'>Energy use per capita (Kwh), {country}</h1>
        <div className='chart-data text-left pl-3'>{data.at(-1)["Primary energy consumption per capita (kWh/person)"]}<div className='chart-data-span'><ArrowUp size={17} className='text-[#2eec7d]'/>{value}% YoY</div></div>
            <EnergyUsePP data={data} className='w-full h-[150px]'/>
        </div>
    )
}