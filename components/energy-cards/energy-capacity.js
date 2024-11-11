"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CurrentCapacity, PlannedCapacity } from '@/components/charts/energy';
import { Tabs2, TabsContent2, TabsList2, TabsTrigger2 } from "@/components/ui/tabs"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import NumberFlow from '@number-flow/react'

export const EnergyCapacities = ({className}) => {
    const [value, setValue] = useState('600');
    return (
        <div className={`chart ${className}`}>
            <h1 className='chart-title'>Energy capacity composition by sources</h1>
            <Tabs2 defaultValue="cc">
                <TabsList2 className="my-3">
                    <TabsTrigger2 value="cc">Current Capacity</TabsTrigger2>
                    <TabsTrigger2 value="pc">Planned Capacity</TabsTrigger2>
                </TabsList2>
                <TabsContent2 value="cc">
                    <CurrentCapacity className='w-full h-[330px] mt-4'/>
                </TabsContent2>
                <TabsContent2 value="pc">
                    <PlannedCapacity className='w-full h-[330px] mt-4'/>
                </TabsContent2>
            </Tabs2>
            <ToggleGroup type="single" defaultValue="a">
                    <ToggleGroupItem value="a">ABS</ToggleGroupItem>
                    <ToggleGroupItem value="b">%</ToggleGroupItem>
            </ToggleGroup>
            <div className='cursor-default sm:flex' onClick={() => setValue((Math.floor(Math.random() * (500 - 100 + 1)) + 100))}>
                <div className='chart-number'><NumberFlow value={value}/>Kwh </div>{/* format={{ style: 'percent' }} */}
                <div className='chart-desc'>Current comulative clean energy capacity, ranking 5th in the world.</div>
            </div>
        </div>
    )
}