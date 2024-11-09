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
import { CornerDownRight, Earth } from 'lucide-react';
import { DecryptText } from '@/components/decrypt'


export default function Home() {
  const [tab, setTab] = useState('mix');
   
  return (
    <div className="main">

        <div className='main-body'>
          <Tabs defaultValue="mix" onValueChange={setTab} value={tab}>
            <div className='flex gap-2 justify-start items-center'>
            <TabsList>
              <TabsTrigger value="mix"><div className={`${tab == "mix" ? "" : "hidden"} tag-box  mr-1 `}/> Energy Mix</TabsTrigger>
              <TabsTrigger value="capacity"><div className={`${tab == "capacity" ? "" : "hidden"} tag-box  mr-1 `}/> Capacity</TabsTrigger>
              <TabsTrigger value="percapita"><div className={`${tab == "percapita" ? "" : "hidden"} tag-box  mr-1 `}/> Economics</TabsTrigger>
              <TabsTrigger value="leaderboard"><div className={`${tab == "leaderboard" ? "" : "hidden"} tag-box  mr-1 `}/> Leaderboards</TabsTrigger>
            </TabsList>
            <Select>
              <SelectTrigger className="font-a1 sm:hidden bg-transparent group p-2 mx-0 text-[#aaaaaa] hover:text-[#1e1f2b] text-[14px] no-underline rounded-[10px] flex border border-[#d9d9d9]">
                  <SelectValue placeholder={<Earth />} />
              </SelectTrigger>
              <SelectTrigger className="font-a1 hidden sm:flex bg-transparent group p-2 mx-0 text-[#aaaaaa] hover:text-[#1e1f2b] text-[14px] no-underline rounded-[10px] border border-[#d9d9d9]">
                  <SelectValue placeholder="Country"/>
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="dark">India</SelectItem>
                  <SelectItem value="light">France</SelectItem>
              </SelectContent>
            </Select>
            </div>
            <TabsContent value="mix">
                <h1 className='page-headers'>Countries leading the <span className='text-[#463f3a]'>way by share of Renewables</span> in the mix in the mix in the mix.</h1>

                <EnergyMix className={'mt-10'}/>

                <h1 className='page-headers mt-10'>Countries leading the <span className='text-[#463f3a]'>way by share of Renewables</span> in the mix in the mix in the mix.</h1>

                <div className='md:flex gap-2 mt-10'>
                  <EnergyChange className={'flex-1'}/>
                  <EnergyChange2 className={'flex-1 mt-5 md:mt-0'}/>
                </div>

                <div className='md:flex gap-2 mt-10'>
                  <RenewableShare className={'flex-1'}/>
                  <FossilShare className={'flex-1 mt-5 md:mt-0'}/>
                </div>
            </TabsContent>
            <TabsContent value="capacity">  
                <h1 className='page-headers'>Countries leading the <span className='text-[#463f3a]'>way by share of Renewables</span> in the mix in the mix in the mix.</h1>
  
                <div className='md:flex gap-2 mt-10'>
                  <EnergyCapacities className={'flex-1'}/>
                  <EnergyCapacityChange className={'flex-1 mt-5 md:mt-0'}/>
                </div>

                <EnergyCapacityChange2 className={'mt-10'}/>
            </TabsContent>
            <TabsContent value="percapita">
                <h1 className='page-headers'>Countries leading the <span className='text-[#463f3a]'>way by share of Renewables</span> in the mix in the mix in the mix.</h1>

                <div className='md:flex gap-2 mt-10'>            
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