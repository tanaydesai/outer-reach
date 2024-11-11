"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { LeaderBoards } from '@/components/charts/energy';
import NumberFlow from '@number-flow/react'

export const EnergyLeaderBoard = ({className}) => {
    const [value, setValue] = useState('20000');

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title mb-5'>Winners Vs Losers: Country Rankings</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 mb-3 grid-flow-row mx-3 border border-[#d9d9d9] divide-y divide-x lg:divide-y-0 divide-[#d9d9d9] rounded-[10px]'>
                <div className='h-[140px] flex-1 py-1' onClick={() => setValue((Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000))}>
                    <p className='chart-desc w-full text-[12px]'>Energy use per person</p>
                    <div className='chart-number  flex-1'><NumberFlow value={value}/> Kwh</div>
                    <p className='chart-desc mt-3 w-full '><span className='text-white bg-green-400 rounded-[5px] p-1 mr-1'>Highest:</span> United States of America </p>
                </div>
                <div className='h-[140px] flex-1 py-1 '>
                    <p className='chart-desc w-full text-[12px]'>Renewable Capacity</p>
                    <div className='chart-number'><NumberFlow value="200"/> GW</div>
                    <p className='chart-desc mt-3 w-full '><span className='text-white bg-green-400 rounded-[5px] p-1 mr-1'>Highest:</span> United Kingdom </p>
                </div>
                <div className='h-[140px] flex-1 py-1 '>
                    <p className='chart-desc w-full text-[12px]'>Renewable %</p>
                    <div className='chart-number'><NumberFlow value="0.97" format={{ style: 'percent' }}/></div>
                    <p className='chart-desc mt-3 w-full '><span className='text-white bg-green-400 rounded-[5px] p-1 mr-1'>Highest:</span> Norway</p>
                </div>
                <div className='h-[140px] flex-1 py-1 '>
                    <p className='chart-desc w-full text-[12px]'>GDP percapita </p>
                    <div className='chart-number'><NumberFlow value="80000" format={{ style: 'currency', currency: 'USD' }}/></div>
                    <p className='chart-desc mt-3 w-full '><span className='text-white bg-green-400 rounded-[5px] p-1 mr-1'>Highest:</span> United States of America</p>
                </div>
            </div>
            <Select>
                <SelectTrigger className="mx-3 mb-5">
                    <SelectValue placeholder="Domain" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Energy consumption</SelectItem>
                    <SelectItem value="light">Energy consumption percapita</SelectItem>
                    <SelectItem value="light">Electricity consumption</SelectItem>
                    <SelectItem value="light">Avg Annual Electricity Use</SelectItem>
                    <SelectItem value="dark">GDP percapita</SelectItem>
                    <SelectItem value="dark">Solar Capacity</SelectItem>
                    <SelectItem value="system">Wind Capacity</SelectItem>
                    <SelectItem value="system">Hydro Capacity</SelectItem>
                    <SelectItem value="system">Nuclear Capacity</SelectItem>
                    <SelectItem value="light">Renewables Capacity</SelectItem>
                    <SelectItem value="system">Planned Renewables Capacity</SelectItem>
                    <SelectItem value="light">Renewables %</SelectItem>
                    <SelectItem value="dark">Solar %</SelectItem>
                    <SelectItem value="system">Wind %</SelectItem>
                    <SelectItem value="system">Hydro %</SelectItem>
                    <SelectItem value="system">Nuclear %</SelectItem>
                </SelectContent>
            </Select>
            <LeaderBoards className='m-3 min-h-[600px] w-full' />
        </div>
    )
}