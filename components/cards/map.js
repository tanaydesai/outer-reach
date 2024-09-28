"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapChart } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"

export const Map = ({className}) => {
    return (
        <div className={`w-full relative ${className}`}>
            <h1 className='text-[14px] text-[#444444] uppercase font-a2'><div className='w-3 h-3 bg-red-400 mx-2 inline-flex'/>Select Region:  
            <Select>
            <SelectTrigger>
                <SelectValue placeholder="France" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="dark">% Change</SelectItem>
                <SelectItem value="light">Abs. Change</SelectItem>
            </SelectContent>
            </Select>
            </h1>
            <p className='text-[13px] mx-3 mt-2 font-rajdhani-regular'>Measured as a percentage of primary energy.</p>   

            <div className='overflow-auto border-2 border-[#b3b3b3] px-3 py-3 rounded-[15px] w-full mt-5 h-[200px]'>
                <MapChart className="w-[150%] h-[150%]" />
            </div>
        </div>
    )
}