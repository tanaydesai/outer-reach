"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { LeaderBoards } from '@/components/charts/energy';
import { MultiCountry } from '@/components/charts/energy';
import NumberFlow from '@number-flow/react'
import { getDomainData, sortData, leaderboardDomains, continents } from '@/lib/utils';

export const EnergyLeaderBoard = ({className, data}) => {
    const [domain, setDomain] = useState('Renewables %');
    let pick = leaderboardDomains[domain];
    let result =  sortData(getDomainData(domain.includes("capacity")  ? data.capacity : data.mix, false, pick["Code"], domain == "GDP per capita" ? 2022 : 2023).map(item => ({ Country: item.Country, Value: item[pick["Key"]] })), "desc", "Value");
   
    let countries = result.filter(item => !continents.includes(item.Country)).slice(0, 5).map(item => item.Country);
    let chartResults = Object.values(
        countries.map(c => getDomainData(domain.includes("capacity")  ? data.capacity : data.mix, c, pick["Code"]).slice(-30).map(item => ({ Year: item.Year, [c]: item[pick["Key"]] }))).flat().reduce((acc, { Year, ...rest }) => {
            acc[Year] = { ...acc[Year], Year, ...rest };
            return acc;
        }, {})
        )

    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title mb-5'>Energy Superstars</h1>
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
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-3 grid-flow-row mx-3 border border-[#d9d9d9] divide-y lg:divide-x lg:divide-y-0 divide-[#d9d9d9] rounded-[10px]'>
                <div className='h-fit flex-1 py-3 md:py-1'>
                    <p className='chart-desc text-[14px]'>1st Place <span className='text-[--primary-text] bg-green-400 rounded-[--primary-radius] p-1 w-fit'>{result.at(0)["Country"]}</span></p>
                    <div className='chart-number  flex-1'><NumberFlow value={result.at(0)["Value"].toFixed(1)}/>{pick["Unit"]}</div>
                </div>
                <div className='h-fit flex-1 py-3 md:py-1'>
                    <p className='chart-desc text-[14px]'>2nd Place <span className='text-[--primary-text] bg-green-400 rounded-[--primary-radius] p-1 w-fit'>{result.at(1)["Country"]}</span></p>
                    <div className='chart-number  flex-1'><NumberFlow value={result.at(1)["Value"].toFixed(1)}/>{pick["Unit"]}</div>
                </div>
                <div className='h-fit flex-1 py-3 md:py-1'>
                    <p className='chart-desc text-[14px]'>3rd Place <span className='text-[--primary-text] bg-green-400 rounded-[--primary-radius] p-1 w-fit'>{result.at(2)["Country"]}</span></p>
                    <div className='chart-number  flex-1'><NumberFlow value={result.at(2)["Value"].toFixed(1)}/>{pick["Unit"]}</div>
                </div>
            </div>
            <MultiCountry data={chartResults} className='w-full my-10 h-[400px]'/>
            <div className='w-full h-[500px] mt-3 overflow-auto'>
                <LeaderBoards data={result.slice(3, result.length)} unit={pick["Unit"]} className='h-[500vh] w-full' />
            </div>
        </div>
    )
}