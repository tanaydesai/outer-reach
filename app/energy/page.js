"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyLeaderBoard } from '@/components/cards/energy-leaderboard';
import { EnergyMix } from '@/components/cards/energy-mix';
import { RenewableCapacityChange } from '@/components/cards/capacity-change';
import { AvgHouse } from '@/components/cards/annual-avg-house';
import { RenewableCapacities } from '@/components/cards/renewable-capacity';
import { CO2GDPPercapita } from '@/components/cards/co2-gdp-percapita';
import { RenewableShare } from '@/components/cards/renewable-share';
import { FossilShare } from '@/components/cards/fossils-share';
import { EnergyUseCO2Percapita } from '@/components/cards/energyuse-co2-percapita';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CornerDownRight } from 'lucide-react';
import {DecryptText} from '@/components/decrypt'


export default function Home() {
   
  return (
    <div className="absolute w-full min-h-full bg-slate-50 py-[50px]">

        <div className='w-full px-3 mt-6 md:mt-2 mx-auto'>
          <Tabs defaultValue="mix">
            <TabsList>
              <TabsTrigger value="mix"><div className='w-2.5 h-2.5 bg-red-400 mr-1 inline-flex'/> Energy Mix</TabsTrigger>
              <TabsTrigger value="renewable">Renewables</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboards</TabsTrigger>
              <TabsTrigger value="percapita">Economics</TabsTrigger>
            </TabsList>
            <div className='text-[25px] text-center leading-10 px-2 mt-5 font-a2 text-[#463f3a] h-fit'>
              Energy landscape:  
                <Select>
                  <SelectTrigger className="text-[25px]">
                      <SelectValue placeholder="France" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="dark">India</SelectItem>
                      <SelectItem value="light">France</SelectItem>
                  </SelectContent>
                </Select>
            </div> 
            <TabsContent value="mix">
                <EnergyMix className={'mt-[100px]'}/>
        
                <div className='text-[#9b9b9b] h-[27px] px-2 mt-10 font-a1 gap-2 flex items-center'>{"{02}"} <hr className='flex-1 bg-[#9b9b9b] h-[1px]'/> {"{03}"}</div>
                <div className='text-[25px] leading-8 font-a2 px-2 mt-5 mb-10 text-[#463f3a] h-fit'>The world is adding renewable capacity faster than ever before</div>
                <div className='text-[#9b9b9b] h-[27px] px-2 mt-10 font-a1 gap-2 flex items-center'>{"{02}"} <hr className='flex-1 bg-[#9b9b9b] h-[1px]'/> {"{03}"}</div>              

                <div className='md:flex gap-2 mt-10'>
                  <RenewableShare className={'flex-1'}/>
                  <FossilShare className={'flex-1 mt-5 md:mt-0'}/>
                </div>
            </TabsContent>
            <TabsContent value="renewable">          
                <div className='md:flex gap-2 mt-[100px]'>
                  <RenewableCapacities className={'flex-1'}/>
                  <RenewableCapacityChange className={'flex-1 mt-5 md:mt-0'}/>
                </div>
            </TabsContent>
            <TabsContent value="leaderboard">          
                <EnergyLeaderBoard className={'mt-[100px]'}/>
            </TabsContent>
            <TabsContent value="percapita">
                <div className='md:flex gap-2 mt-[100px]'>                        
                  <EnergyUseCO2Percapita className={'flex-1'}/>
                  <CO2GDPPercapita className={'flex-1 mt-5 md:mt-0'}/>
                </div>
                <div className='md:flex gap-2 mt-10'>
                  <AvgHouse className={'flex-1'}/>
                </div>
            </TabsContent>
          </Tabs>
        </div>

    </div>
  )
}