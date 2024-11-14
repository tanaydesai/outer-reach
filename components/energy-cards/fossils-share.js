"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ShareFossils } from '@/components/charts/energy';
import { ArrowDown } from 'lucide-react';

export const FossilShare = ({className, data, country}) => {
    data = data.filter((d) => d.Country == country).map(item => ({ Year: item.Year, ["Fossil fuels"]: item["Fossil fuels"] }))
    let value = (((data.at(-1)["Fossil fuels"] - data.at(-2)["Fossil fuels"]) / data.at(-2)["Fossil fuels"]) * 100).toFixed(1);

    return (
        <div className={`chart text-white bg-black border-none px-0 pb-0 ${className}`}>
            <h1 className='chart-title text-white'>Share of Fossil Fuels in the electricity mix, {country}</h1>
            <div className='chart-data'>{data.at(-1)["Fossil fuels"].toFixed(1)}%<div className='chart-data-span'><ArrowDown size={17} className='text-[#ec542e]'/>{value}% YoY</div></div>
            <ShareFossils data={data} className='w-full h-[150px]'/>
        </div>
    )
}