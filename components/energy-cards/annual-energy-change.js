"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnnualEnergyChange } from '@/components/charts/energy';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import NumberFlow from '@number-flow/react'

export const EnergyChange = ({className, data, country}) => {
    data = data.filter((d) => d.Country == country)
    let value = String((data.slice(-5).reduce((acc, item) => acc * (1 + item["Change (%)"] / 100), 1) - 1 ));

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in primary energy consumption (%), {country}</h1>
            <AnnualEnergyChange data={data} className='w-full flex-1 mt-4'/>
            <div className='cursor-default sm:flex'>
                <div className='chart-number'><NumberFlow value={value} format={{ style: 'percent' }}/></div>
                <div className='chart-desc'>growth in primary energy consumption since {data.at(-5)["Year"]}.</div>
            </div>
        </div>
    )
}