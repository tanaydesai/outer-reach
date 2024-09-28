"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Capacity } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"

export const Capacities = ({className}) => {
    return (
        <div className={`w-1/2  min-h-[410px] ${className}`}>
            <h1 className='text-[14px] text-[#444444] uppercase font-a2 px-3'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/>
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
            <p className='text-[13px] mx-3 my-2 font-rajdhani-regular'>Annual planned energy capacity</p>
            <div className='px-3 py-3 my-5 border-2 border-[#b3b3b3] rounded-[15px]'>    
                <Capacity className='w-full h-[350px]' />
            </div>
            {/* <p className='text-[13px] mx-5 my-0.5 font-rajdhani-regular'>Data source: <span className=' underline'>Ourworldindata</span></p> */}
        </div>
    )
}