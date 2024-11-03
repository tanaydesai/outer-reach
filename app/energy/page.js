"use client"
import React, { useRef,useState, useEffect } from 'react';
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
  const [tab, setTab] = useState('mix');
   
  return (
    <div className="main bg-slate-50">

        <div className='main-body'>
          <Tabs defaultValue="mix" onValueChange={setTab} value={tab}>
            <TabsList>
              <TabsTrigger value="mix"><div className={`${tab == "mix" ? "" : "hidden"} tag-box bg-red-400 mr-1 `}/> Energy Mix</TabsTrigger>
              <TabsTrigger value="renewable"><div className={`${tab == "renewable" ? "" : "hidden"} tag-box bg-red-400 mr-1 `}/> Renewables</TabsTrigger>
              <TabsTrigger value="leaderboard"><div className={`${tab == "leaderboard" ? "" : "hidden"} tag-box bg-red-400 mr-1 `}/> Leaderboards</TabsTrigger>
              <TabsTrigger value="percapita"><div className={`${tab == "percapita" ? "" : "hidden"} tag-box bg-red-400 mr-1 `}/> Economics</TabsTrigger>
            </TabsList>
            <div className='page-headers text-center'>
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
        
                <div className='page-line'>{"{02}"} <hr className='page-line-hr'/> {"{03}"}</div>
                <div className='page-headers mb-10'>The world is adding renewable capacity faster than ever before</div>
                <div className='page-line'>{"{02}"} <hr className='page-line-hr'/> {"{03}"}</div>              

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