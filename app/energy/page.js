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
import { EnergyMixIcon, CapacityIcon, NuclearPlantIcon, ChangeIcon, HouseIcon, RankingIcon, NuclearWasteIcon } from '@/components/icons';
import { TestDModel } from '@/components/models/test';
import {DecryptText} from '@/components/decrypt'


export default function Home() {
   
  return (
    <div className="absolute w-full min-h-full bg-[#efefef] py-[50px]">

        <div className='w-[95%] mt-5 mx-auto'>
          <Tabs defaultValue="mix">
            <TabsList>
              <TabsTrigger value="mix"><EnergyMixIcon className="group-hover:scale-110 duration-300"/>Energy Mix</TabsTrigger>
              <TabsTrigger value="renewable"><CapacityIcon className="group-hover:scale-110 duration-300"/>Renewables</TabsTrigger>
              <TabsTrigger value="leaderboard"><RankingIcon className="group-hover:scale-110 duration-300"/>Leaderboard</TabsTrigger>
              <TabsTrigger value="change"><ChangeIcon className="group-hover:scale-110 duration-300"/>Growth</TabsTrigger>
              <TabsTrigger value="percapita"><HouseIcon className="group-hover:scale-110 duration-300"/>Per capita</TabsTrigger>
            </TabsList>
            <TabsContent value="mix">
              <div className='lg:flex gap-5'>
                <div className='lg:w-1/3'>
                  <div className="flex items-center text-[13px] w-full text-[#9b9b9b] h-[27px] font-a2 uppercase"><div className='w-2 h-2 bg-red-400 mr-2'/><DecryptText text='Road to Energy Abundance' /></div>
                  <div className='text-[25px] leading-8 font-a2 w-full mt-4 flex gap-2 h-fit items-center'>
                    {/* <CornerDownRight className='shrink-0' strokeWidth={1.5} size={30}/> */}
                    <div>The current energy landscape of 
                      <Select>
                      <SelectTrigger  className="underline border-none decoration-2 text-[25px] font-a2 p-0 m-0  decoration-red-400 underline-offset-8">
                          <SelectValue placeholder="France" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="dark">India</SelectItem>
                          <SelectItem value="light">France</SelectItem>
                      </SelectContent>
                      </Select>
                    </div>
                  </div> 
                </div>
                <EnergyMix className={'flex-1 mt-10 lg:mt-0'}/>
              </div>
              <div className='lg:flex gap-5 mt-10'>
                  <div className='text-[25px] lg:w-1/3 leading-8 font-a2 w-full mt-4 flex gap-2 h-fit items-center'>
                    {/* <CornerDownRight className='shrink-0' strokeWidth={1.5} size={30}/> */}
                    <div>The current energy landscape of 
                      <Select>
                      <SelectTrigger className="underline border-none decoration-2 text-[25px] font-a2 p-0 m-0  decoration-red-400 underline-offset-8">
                          <SelectValue placeholder="France" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="dark">India</SelectItem>
                          <SelectItem value="light">France</SelectItem>
                      </SelectContent>
                      </Select>
                    </div>
                  </div> 
                  <RenewableShare className={'flex-1'}/>
              </div>
            </TabsContent>
            <TabsContent value="renewable">
              <div className='lg:flex gap-5'>
                <Capacities className={'flex-1'}/>
                {/* <TestDModel /> */}
                <div className='lg:w-1/3 mt-10 lg:mt-0'>
                  <div className="flex items-center text-[13px] w-full text-[#9b9b9b] h-[27px] font-a2 uppercase"><div className='w-2 h-2 bg-red-400 mr-2'/><DecryptText text='Road to Energy Abundance' /></div>
                  <div className='text-[25px] leading-8 font-a2 w-full mt-4 flex gap-2 h-fit items-center'>
                    <div>The current energy landscape of 
                      <Select>
                      <SelectTrigger  className="underline border-none decoration-2 text-[25px] font-a2 p-0 m-0  decoration-red-400 underline-offset-8">
                          <SelectValue placeholder="France" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="dark">India</SelectItem>
                          <SelectItem value="light">France</SelectItem>
                      </SelectContent>
                      </Select>
                    </div>
                  </div> 
                </div>
              </div>
            </TabsContent>
            <TabsContent value="leaderboard">
              <LeaderBoard />
            </TabsContent>
            <TabsContent value="change">
              <Change />
            </TabsContent>
            <TabsContent value="percapita">
              <div className='lg:flex gap-5'>
                <AvgHouse className={'lg:w-1/3'}/>
                <Percapita className={'flex-1 mt-5 lg:mt-0'}/>
              </div>
            </TabsContent>
          </Tabs>
        </div>

    </div>
  )
}