"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CO2GDP } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"

export const Percapita = ({className}) => {
    return (
        <div className={`w-1/2 h-[400px] rounded-[30px] border-2 px-3 py-3 border-transparent text-white bg-black ${className}`}>
            <h1 className='text-[17px] uppercase font-a2 px-2'><div className='w-3 h-3 mr-2 bg-red-400 inline-flex'/>
            <Select>
            <SelectTrigger className="ml-0 text-black">
                <SelectValue placeholder="% Change" />
            </SelectTrigger>
            <SelectContent  className="bg-white text-black">
                <SelectItem value="dark">% Change</SelectItem>
                <SelectItem value="light">Abs. Change</SelectItem>
            </SelectContent>
            </Select>
             in CO2 emissions & GDP per capita</h1>
            <p className='text-[14px] mx-2 my-0.5 font-rajdhani-regular'>Historical change in CO2 emissions per capita and GDP per capity</p>
            <CO2GDP className='w-full h-[320px] mt-3'/>
        </div>
    )
}