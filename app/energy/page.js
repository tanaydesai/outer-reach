"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LeaderBoard } from '@/components/cards/energy/leaderboard';
import { EnergyMix } from '@/components/cards/energy/energymix';
import { Change } from '@/components/cards/energy/change';
import { AvgHouse } from '@/components/cards/energy/avghouse';
import { Capacities } from '@/components/cards/energy/capacity';
import { Percapita } from '@/components/cards/energy/percapita';
import { Map } from '@/components/cards/energy/map';

export default function Home() {
   
  return (
    <div className="absolute w-full min-h-screen h-auto bg-[#efefef] py-10">
        
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

        <div className='block lg:hidden w-[94%] mx-auto'>
          <div className='w-full mt-5'>
              <Map />
              <EnergyMix className='mt-3' />
              <div className='h-fit md:flex w-full mt-3 gap-3 items-start justify-center'>
                <LeaderBoard className='mt-0'/>
                <div className='mt-3 md:mt-0 md:h-auto'>
                  <Change />
                  <AvgHouse className='h-[225px] md:h-[200px] mt-3' />
                </div>
              </div>
              <div className='mt-3'>
                <Capacities className='w-full'/>
                <Percapita className='mt-3 w-full' />
              </div>
          </div>
        </div>

    </div>
  )
}