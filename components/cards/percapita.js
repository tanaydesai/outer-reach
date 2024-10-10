"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CO2GDP } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"

export const Percapita = ({className}) => {
    return (
        <div className={`w-full min-h-[400px] ${className}`}>
            <h1 className='text-[17px] text-[#444444]  font-a2 px-3'><div className='w-3 h-3 mr-2 bg-red-400 inline-flex'/>Change in CO2 emissions & GDP per capita</h1>
            <p className='text-[14px] mx-3 my-2 font-a1 text-[#656565] '>Historical change in CO2 emissions per capita and GDP per capita </p>
            <div className='py-3 mt-5 border-2 bg-black text-white border-transparent rounded-[10px]'>    
                <Tabs2 defaultValue="account">
                    <TabsContent2 value="account">
                        <CO2GDP className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                    <TabsContent2 value="password">
                        <CO2GDP className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                    <TabsList2 className="mt-4 ml-3 sm:mt-0">
                        <TabsTrigger2 value="account" className='data-[state=active]:bg-white  data-[state=active]:text-[#0f0f0f]'>Absolute</TabsTrigger2>
                        <TabsTrigger2 value="password" className='data-[state=active]:bg-white  data-[state=active]:text-[#0f0f0f]'>% Share</TabsTrigger2>
                    </TabsList2>
                </Tabs2>
            </div>
        </div>
    )
}