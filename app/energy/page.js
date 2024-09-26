"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LeaderBoard } from '@/components/cards/leaderboard';
import { EnergyMix } from '@/components/cards/energymix';
import { Change } from '@/components/cards/change';
import { AvgHouse } from '@/components/cards/avghouse';
import { Capacities } from '@/components/cards/capacity';
import { Percapita } from '@/components/cards/percapita';
import { Map } from '@/components/cards/map';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
   
  return (
    <div className="fixed md:absolute w-full min-h-full bg-[#efefef] py-10">
        
        <div className='hidden lg:block w-[94%] mx-auto'>
          <div className='w-full flex gap-3 mt-5 items-start '>
              <div className='flex-1/3'>
                <Map />
                <LeaderBoard />
              </div>
              <div className='flex-1'>
                <EnergyMix />
                <div className='grid grid-cols-2 w-full mt-3 gap-3 items-start justify-center'>
                  <Change />
                  <AvgHouse />
                </div>
              </div>
          </div>
          <div className='w-full flex gap-3 mt-3 items-start'>
            <Capacities />
            <Percapita />
          </div>
        </div>

        <div className='block h-full pt-[100px] lg:hidden w-[100%] mx-auto'>
            <Tabs defaultValue="energy">
                <TabsList>
                    <div className='flex gap-3 m-4 justify-center'>
                      <TabsTrigger value="energy">EnergyMix</TabsTrigger>
                      <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
                    </div>
                    <div className='flex gap-3 m-4 justify-center'>
                      <TabsTrigger value="capacity">Capacity</TabsTrigger>
                      <TabsTrigger value="percapita">PerCapita</TabsTrigger>
                    </div>
                    <TabsTrigger value="avg">Avg. Houseold</TabsTrigger>
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
          <div className='w-full mt-4 px-3'>
              {/* <Map /> */}
              {/* <EnergyMix /> */}
              {/* <LeaderBoard className='mt-0'/> */}
              {/* <Change className='h-[400px]'/> */}
              {/* <AvgHouse className='h-[400px]' /> */}
              {/* <Capacities className='w-full'/> */}
              {/* <Percapita className='w-full' /> */}
              {/* <div className='h-fit md:flex w-full mt-3 gap-3 items-start justify-center'>
                <LeaderBoard className='mt-0'/>
                <div className='mt-3 md:mt-0 md:h-auto'>
                  <Change />
                  <AvgHouse className='h-[200px] mt-3' />
                </div>
              </div>
              <div className='mt-3'>
                <Capacities className='w-full'/>
                <Percapita className='mt-3 w-full' />
              </div> */}
          </div>
        </div>

    </div>
  )
}