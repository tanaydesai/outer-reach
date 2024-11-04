"use client"
import React, { useRef,useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyLeaderBoard } from '@/components/energy-cards/energy-leaderboard';
import { EnergyMix } from '@/components/energy-cards/energy-mix';
import { EnergyChange } from '@/components/energy-cards/energy-change';
import { EnergyChange2 } from '@/components/energy-cards/energy-change2';
import { EnergyCapacities } from '@/components/energy-cards/energy-capacity';
import { EnergyCapacityChange } from '@/components/energy-cards/capacity-change';
import { EnergyCapacityChange2 } from '@/components/energy-cards/capacity-change2';
import { AvgHouse } from '@/components/energy-cards/annual-avg-house';
import { EnergyUse } from '@/components/energy-cards/anuual-energy-pc';
import { RenewableShare } from '@/components/energy-cards/renewable-share';
import { FossilShare } from '@/components/energy-cards/fossils-share';
import { EnergyGDP } from '@/components/energy-cards/energy-gdp';
import { EnergyGDPPC } from '@/components/energy-cards/energy-gdp-pc';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CornerDownRight } from 'lucide-react';
import {DecryptText} from '@/components/decrypt'


export default function Home() {
  const [tab, setTab] = useState('mix');
   
  return (
    <div className="main">

        <div className='main-body'>
          <Tabs defaultValue="mix" onValueChange={setTab} value={tab}>
            <TabsList>
              <TabsTrigger value="mix"><div className={`${tab == "mix" ? "" : "hidden"} tag-box  mr-1 `}/> Energy Mix</TabsTrigger>
              <TabsTrigger value="capacity"><div className={`${tab == "capacity" ? "" : "hidden"} tag-box  mr-1 `}/> Capacity</TabsTrigger>
              <TabsTrigger value="percapita"><div className={`${tab == "percapita" ? "" : "hidden"} tag-box  mr-1 `}/> Economics</TabsTrigger>
              <TabsTrigger value="leaderboard"><div className={`${tab == "leaderboard" ? "" : "hidden"} tag-box  mr-1 `}/> Leaderboards</TabsTrigger>
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

                <div className='md:flex gap-2 mt-10'>
                  <EnergyChange className={'flex-1'}/>
                  <EnergyChange2 className={'flex-1 mt-5 md:mt-0'}/>
                </div>
        
                <div className='page-line'>{"{02}"} <hr className='page-line-hr'/> {"{03}"}</div>
                <div className='page-headers mb-10'>The world is adding renewable capacity faster than ever before</div>
                <div className='page-line'>{"{02}"} <hr className='page-line-hr'/> {"{03}"}</div>              

                <div className='md:flex gap-2 mt-10'>
                  <RenewableShare className={'flex-1'}/>
                  <FossilShare className={'flex-1 mt-5 md:mt-0'}/>
                </div>
            </TabsContent>
            <TabsContent value="capacity">          
                <div className='md:flex gap-2 mt-[100px]'>
                  <EnergyCapacities className={'flex-1'}/>
                  <EnergyCapacityChange className={'flex-1 mt-5 md:mt-0'}/>
                </div>

                <EnergyCapacityChange2 className={'mt-10'}/>
            </TabsContent>
            <TabsContent value="percapita">
                <div className='md:flex gap-2 mt-[100px]'>            
                  <EnergyGDP className={'flex-1'}/>
                  <EnergyGDPPC className={'flex-1 mt-5 md:mt-0'}/>
                </div>  
                
                <div className='md:flex gap-2 mt-10'>
                    <EnergyUse className={'flex-1'}/>
                    <AvgHouse className={'flex-1 mt-5 md:mt-0'}/>
                </div>
            </TabsContent>
            <TabsContent value="leaderboard">          
                <EnergyLeaderBoard className={'mt-[100px]'}/>
            </TabsContent>
          </Tabs>
        </div>

    </div>
  )
}