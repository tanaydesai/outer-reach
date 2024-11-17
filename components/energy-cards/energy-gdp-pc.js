"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyConsumptionGDPPC } from '@/components/charts/energy';
import { getDomainData, removeNAN } from '@/lib/utils';

export const EnergyGDPPC = ({className, data, country}) => {
    data = removeNAN(getDomainData(data, country, "e-use-pp-gdp-pc"))

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in energy use per capita and GDP per capita, {country}</h1>
            <EnergyConsumptionGDPPC data={data} className='w-full flex-1 min-h-[350px] mt-4'/>
            <p className='chart-desc'>Historical change in CO2 emissions per capita and GDP per capita.</p>
        </div>
    )
}