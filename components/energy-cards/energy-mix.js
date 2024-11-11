"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare } from '@/components/charts/energy';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import NumberFlow from '@number-flow/react'
import { Earth } from 'lucide-react';

export const EnergyMix = ({className}) => {
    const [value, setValue] = useState('20000');

    return (
        <div className={`chart ${className}`}>
            <Tabs2 defaultValue="ec">
                <h1 className='chart-title'>Primary consumption by individual sources</h1>
                <div className='flex gap-2 my-3'>
                    <TabsList2>
                        <TabsTrigger2 value="ec"> Energy</TabsTrigger2>
                        <TabsTrigger2 value="elc">Electricity</TabsTrigger2>
                    </TabsList2>
                    <Select>
                    <SelectTrigger>
                        <div className='hidden sm:block'><SelectValue placeholder="Sources"/></div>
                        <div className='sm:hidden'><SelectValue placeholder={<Earth size={19} />} /></div>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="dark">India</SelectItem>
                        <SelectItem value="light">France</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                <TabsContent2 value="ec">
                    <EnergyShare className='w-full h-[350px]'/>
                </TabsContent2>
                <TabsContent2 value="elc">
                    <EnergyShare className='w-full h-[350px]'/>
                </TabsContent2>
                <ToggleGroup type="single" defaultValue="a">
                        <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                        <ToggleGroupItem value="b">%</ToggleGroupItem>
                </ToggleGroup>
                <div className='cursor-default sm:flex' onClick={() => setValue((Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000))}>
                    <div className='chart-number'><NumberFlow value={value}/>Kwh </div>{/* format={{ style: 'percent' }} */}
                    <div className='chart-desc'>of france's energy comes from renewable and nuclear energy sources thus ranking 20th in the world in clean energy consumption.</div>
                </div>
            </Tabs2>
        </div>
    )
}