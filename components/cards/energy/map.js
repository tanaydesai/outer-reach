"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapChart } from '@/components/charts/energy';

export const Map = ({className}) => {
    return (
        <div className='w-full h-[175px] rounded-[30px] px-4 py-3 border-2 border-transparent overflow-auto bg-black relative '>
            <h1 className='text-[17px] uppercase font-a2 text-white flex items-center'><div className='w-3 h-3 bg-red-400 mx-2 inline-flex'/>Select Region: France</h1>
            <div className='overflow-auto absolute top-10 left-0 w-full mt-1 h-[150px]'>
                <MapChart className="w-[150%] h-[150%]" />
            </div>
        </div>
    )
}