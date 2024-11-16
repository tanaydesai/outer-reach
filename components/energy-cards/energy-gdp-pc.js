"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyConsumptionGDPPC } from '@/components/charts/energy';

export const EnergyGDPPC = ({className, data, country}) => {
    data = data.filter((d) => d.Country == country).map(item => 
        Object.entries(item)
          .filter(([, value]) => value !== undefined && value !== "" && !isNaN(value))
          .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {})
      )

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Change in energy use per capita and GDP per capita, {country}</h1>
            <EnergyConsumptionGDPPC data={data} className='w-full flex-1 mt-4'/>
            <p className='chart-desc'>Historical change in CO2 emissions per capita and GDP per capita.</p>
        </div>
    )
}