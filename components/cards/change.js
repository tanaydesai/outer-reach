"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PercentChange } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"


export const Change = ({className}) => {
    return (
        <div className={`flex-1 h-full relative ${className}`}>
            <h1 className='text-[17px] text-[#444444]  font-a2 px-3'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/>
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
            <p className='text-[14px] mx-3 mt-2 font-a1 text-[#656565]'>Relavtive increase/decrease from previous year, 2023.</p>
            <div className='px-3 py-3 mt-5 border-2 border-[#b3b3b3] rounded-[15px]'>    
                <PercentChange className='w-full h-[220px]'/>
            </div>
        </div>
    )
}