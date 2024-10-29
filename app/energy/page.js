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

        <div className='w-full px-2 md:px-5 mt-6 md:mt-2 mx-auto'>
          <Tabs defaultValue="mix">
            <TabsList>
              <TabsTrigger value="mix"><div className='w-2.5 h-2.5 bg-red-400 mr-1 inline-flex'/> Energy Mix</TabsTrigger>
              <TabsTrigger value="renewable">Renewables</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              <TabsTrigger value="change">Growth</TabsTrigger>
              <TabsTrigger value="percapita">Per capita</TabsTrigger>
            </TabsList>
            <TabsContent value="mix">
                <div className='text-[30px] leading-10 px-2 font-a2 md:mt-5 text-[#463f3a] h-fit'>
                  The current energy landscape of 
                    <Select>
                      <SelectTrigger className="underline border-none decoration-2 text-[30px] font-a2 decoration-red-400 underline-offset-8">
                          <SelectValue placeholder="France" />
                      </SelectTrigger>
                      <SelectContent>
                          <SelectItem value="dark">India</SelectItem>
                          <SelectItem value="light">France</SelectItem>
                      </SelectContent>
                    </Select>
                </div> 
                <p className='text-[14px] px-3 mb-10 mt-4 font-a1 md:w-[50%] text-[#656565]'>The world is adding renewable capacity faster than ever before</p>
                {/* <div className='text-[#9b9b9b] h-[27px] px-2 mt-10 font-a1 gap-2 flex items-center'>{"{02}"} <hr className='flex-1 bg-[#9b9b9b] h-[1px]'/> {"{03}"}</div> */}

                <EnergyMix className={'mt-5'}/>
                <div className='md:flex gap-2 mt-5'>
                  <RenewableShare className={'flex-1'}/>
                  <AvgHouse className={'flex-1 mt-5 md:mt-0'}/>
                </div>

                <div className='text-[#9b9b9b] h-[27px] px-2 mt-10 font-a1 gap-2 flex items-center'>{"{02}"} <hr className='flex-1 bg-[#9b9b9b] h-[1px]'/> {"{03}"}</div>
                <div className='text-[25px] leading-8 font-a2 px-2 mt-5 mb-10 text-[#463f3a] h-fit'>The world is adding renewable capacity faster than ever before</div>
              
            </TabsContent>
          </Tabs>
        </div>

    </div>
  )
}