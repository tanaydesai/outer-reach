"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { LeaderBoards } from '@/components/charts/energy';
import NumberFlow from '@number-flow/react'
import { getDomainData, sortData, leaderboardDomains } from '@/lib/utils';

export const EnergyLeaderBoard = ({className, data}) => {
    const [domain, setDomain] = useState('Wind %');
    let pick = leaderboardDomains[domain];
    let result = domain.includes("capacity") 
                ? sortData(getDomainData(data.capacity, false, pick["Code"], 2023).map(item => ({ Country: item.Country, Value: item[domain.replace(" capacity", "")] })), "desc", "Value")
                : sortData(getDomainData(data.mix, false, pick["Code"], domain == "GDP per capita" ? 2022 : 2023)
                        .map(item => {
                        const { Country, ...rest } = item;
                        const remaining = Object.fromEntries(
                            Object.entries(item).filter(([key]) => !["Country", "Year", ...pick["Keys"]].includes(key))
                        );
                        return {
                            Country,
                            Value: Object.values(remaining).reduce((acc, value) => acc + (value || 0), 0)
                        };
                        }), "desc", "Value")

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title mb-5'>Winners Vs Losers: Country Rankings</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-3 grid-flow-row mx-3 border border-[#d9d9d9] divide-y divide-x lg:divide-y-0 divide-[#d9d9d9] rounded-[10px]'>
                <div className='h-fit flex-1 py-1'>
                    <p className='chart-desc text-[14px]'><span className='text-white bg-green-400 rounded-[5px] p-1 w-fit'>No. 1</span> {result.at(0)["Country"]}</p>
                    <div className='chart-number  flex-1'><NumberFlow value={result.at(0)["Value"].toFixed(1)}/>{pick["Unit"]}</div>
                </div>
                <div className='h-fit flex-1 py-1'>
                    <p className='chart-desc text-[14px]'><span className='text-white bg-green-400 rounded-[5px] p-1 w-fit'>No. 2</span> {result.at(1)["Country"]}</p>
                    <div className='chart-number  flex-1'><NumberFlow value={result.at(1)["Value"].toFixed(1)}/>{pick["Unit"]}</div>
                </div>
                <div className='h-fit flex-1 py-1'>
                    <p className='chart-desc text-[14px]'><span className='text-white bg-green-400 rounded-[5px] p-1 w-fit'>No. 3</span> {result.at(2)["Country"]}</p>
                    <div className='chart-number  flex-1'><NumberFlow value={result.at(2)["Value"].toFixed(1)}/>{pick["Unit"]}</div>
                </div>
            </div>
            <Select defaultValue={domain} onValueChange={setDomain}>
                <SelectTrigger className="mx-3 mb-5">
                    <SelectValue placeholder="Domain" />
                </SelectTrigger>
                <SelectContent>
                    {Object.keys(leaderboardDomains).map((lol) => (
                        <SelectItem key={lol} value={lol}>{lol}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <div className='w-full h-[500px] overflow-auto'>
                <LeaderBoards data={result.slice(3, result.length)} unit={pick["Unit"]} className='h-[500vh] w-full' />
            </div>
        </div>
    )
}