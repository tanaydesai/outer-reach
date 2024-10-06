"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LeaderBoard } from '@/components/cards/leaderboard';
import { EnergyMix } from '@/components/cards/energymix';
import { Change } from '@/components/cards/change';
import { AvgHouse } from '@/components/cards/avghouse';
import { Capacities } from '@/components/cards/capacity';
import { Percapita } from '@/components/cards/percapita';
import { RenewableShare } from '@/components/cards/renewableshare';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CornerDownRight } from 'lucide-react';

export default function Home() {
   
  return (
    <div className="absolute w-full min-h-full bg-[#efefef] py-[55px]">
        
        <div className='w-[94%] mt-5 mx-auto'>
          <div className='md:text-[40px] text-[25px] font-a2 w-full flex gap-2 items-center'><CornerDownRight className='shrink-0' strokeWidth={1.5} size={30}/><div>The current energy landscape of 
            {/* <span className='inline-flex underline decoration-2 decoration-red-400 underline-offset-8'>France</span> */}
            <Select>
            <SelectTrigger icon={false} className="underline decoration-2 md:text-[40px] text-[25px] font-a2 bg-transparent decoration-red-400 underline-offset-8">
                <SelectValue placeholder="France" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="dark">India</SelectItem>
                <SelectItem value="light">France</SelectItem>
            </SelectContent>
            </Select>
            </div></div>
          <div className='w-full lg:flex gap-5 mt-10 items-start '>
              <div className='w-7/20'>
                <RenewableShare/>
                <LeaderBoard />
              </div>
              <div className='flex-1'>
                <EnergyMix className='mt-10 lg:mt-0'/>
                <div className='lg:grid grid-cols-2 w-full mt-10 gap-5 items-start justify-center'>
                  <Change />
                  <AvgHouse className='mt-7 lg:mt-0'/>
                </div>
              </div>
          </div>
          <div className='md:text-[40px] text-[25px] font-a2 w-full mt-10 flex gap-2 items-center'><CornerDownRight className='shrink-0' strokeWidth={1.5} size={30}/><div><span className='inline-flex underline decoration-2 decoration-red-400 underline-offset-8'>France's</span> story in terms of per capita</div></div>
          <div className='w-full lg:flex gap-5 mt-10 items-start'>
            <Capacities className='w-full lg:w-1/2'/>
            <Percapita className={'w-full lg:w-1/2'}/>
          </div>
        </div>

        {/* <div className='block h-full lg:hidden w-[100%] mx-auto'>
            <Tabs defaultValue="energy">
                <TabsList>
                  <div className='flex gap-3 m-3.5 justify-center'>
                    <TabsTrigger value="energy">EnergyMix</TabsTrigger>
                    <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                  </div>
                  <div className='flex gap-3 m-3.5 justify-center'>
                    <TabsTrigger value="capacity">Capacity</TabsTrigger>
                    <TabsTrigger value="percapita">PerCapita</TabsTrigger>
                  </div>
                  <div className='flex justify-center'>
                    <TabsTrigger value="avg">Avg. Houseold</TabsTrigger>
                  </div>
                  <div className='w-full flex'>
                    <Select>
                      <SelectTrigger className="mx-auto my-5">
                          <SelectValue placeholder="World" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="dark">India</SelectItem>
                          <SelectItem value="light">France</SelectItem>
                      </SelectContent>
                      </Select>
                  </div>
                </TabsList>
                <TabsContent value="energy">
                  <EnergyMix className='h-[450px]' />
                </TabsContent>
                <TabsContent value="leaderboard">
                  <LeaderBoard className='mt-0'/>
                </TabsContent>
                <TabsContent value="capacity">
                  <Capacities className='w-full h-[450px]'/>
                </TabsContent>
                <TabsContent value="avg">
                  <AvgHouse className='h-[450px] mt-3' />
                </TabsContent>
                <TabsContent value="percapita">
                  <Percapita className='w-full h-[450px]' />
                </TabsContent>
            </Tabs> 
        </div> */}

    </div>
  )
}