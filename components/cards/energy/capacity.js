"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Capacity } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"

export const Capacities = ({className}) => {
    return (
        <div className={`w-1/2  h-[400px] rounded-[30px] border-2 px-3 py-3 border-[#9b9b9b] ${className}`}>
            <h1 className='text-[17px] uppercase font-a2 px-2'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/>
            <Select>
            <SelectTrigger className="ml-0">
                <SelectValue placeholder="Planned" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Current</SelectItem>
                <SelectItem value="dark">Planned</SelectItem>
            </SelectContent>
            </Select>
             Energy Capacity, (GW)</h1>
            <p className='text-[14px] mx-2 my-0.5 font-rajdhani-regular'>Annual planned energy capacity</p>
            <Capacity className='w-full h-[320px]' />
            {/* <p className='text-[13px] mx-5 my-0.5 font-rajdhani-regular'>Data source: <span className=' underline'>Ourworldindata</span></p> */}
        </div>
    )
}