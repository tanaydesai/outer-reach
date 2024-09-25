"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PercentChange } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"

export const Change = ({className}) => {
    return (
        <div className={`flex-1 px-4 pt-3 h-full rounded-[30px] border-2 border-[#9b9b9b] relative ${className}`}>
            <h1 className='text-[17px] uppercase font-a2 px-2'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/>
            <Select>
            <SelectTrigger className="ml-0">
                <SelectValue placeholder="% Change" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="dark">% Change</SelectItem>
                <SelectItem value="light">Abs. Change</SelectItem>
            </SelectContent>
            </Select>
             in production</h1>
            <p className='text-[14px] mx-2 my-0.5 font-rajdhani-regular'>Relavtive increase/decrease from previous year, 2023.</p>
            <PercentChange className='w-full h-[137px] mt-1.5'/>
        </div>
    )
}