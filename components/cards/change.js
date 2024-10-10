"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PercentChange } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"

export const Change = ({className}) => {
    return (
        <div className={`flex-1 min-h-[400px] relative ${className}`}>
            <h1 className='text-[17px] text-[#444444]  font-a2 px-3'><div className='w-3 h-3 bg-red-400 mr-2 inline-flex'/>Change in production</h1>
            <p className='text-[14px] mx-3 mt-2 font-a1 text-[#656565]'>Relavtive increase/decrease from previous year, 2023.</p>
            <div className='py-3 mt-5 border-2 border-[#b3b3b3] rounded-[10px]'>    
                <Tabs2 defaultValue="account">
                    <TabsContent2 value="account">
                        <PercentChange className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                    <TabsContent2 value="password">
                        <PercentChange className='w-full h-[330px] mt-4'/>
                    </TabsContent2>
                    <TabsList2 className="mt-4 ml-3 sm:mt-0">
                        <TabsTrigger2 value="account">Absolute</TabsTrigger2>
                        <TabsTrigger2 value="password">% Share</TabsTrigger2>
                    </TabsList2>
                </Tabs2>
            </div>
        </div>
    )
}