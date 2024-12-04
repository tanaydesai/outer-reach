"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MultiCountry } from '@/components/charts/energy';
import NumberFlow from '@number-flow/react'
import { getDomainData, sortData, continents } from '@/lib/utils';
import { Menu } from '@/components/menu';

export const NuclearCapacityAdditions = ({className, data, country}) => {       
    let countries = sortData(getDomainData(data, false, false, 2023),  "desc", "Nuclear").filter(item => !continents.includes(item.Country)).slice(0, 7).map(item => item.Country)
   
    let result = Object.values(
        countries.map(c => getDomainData(data, c, "YoY absolute change").slice(-30).map(item => ({ Year: item.Year, [c]: item["Nuclear"] }))).flat().reduce((acc, { Year, ...rest }) => {
            acc[Year] = { ...acc[Year], Year, ...rest };
            return acc;
        }, {})
        )

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Nuclear capacity additions by countries (TWh)</h1>
            <MultiCountry data={result} className='w-full h-[400px]'/>
            <Menu />
            <div className='cursor-default sm:flex'>
                {/* <div className='chart-number'><NumberFlow value={(result.at(-1)["France"]).toFixed(0)} />{type === "abs" ? "TWh" : "%"}</div> */}
                <div className='chart-desc'>of France's electricity production comes from nuclear energy. It is the world's largest energy consumer.</div>
            </div>
        </div>
    )
}