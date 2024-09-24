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
    <div className="absolute w-full min-h-full bg-[#efefef] py-10">
        <div className='w-full flex gap-2 px-3 pt-5 items-start'>
            <div className='w-1/3'>
              <Map />
              <LeaderBoard />
            </div>
            <div className='w-2/3'>
              <EnergyMix />
              <div className='flex w-full mt-1.5 gap-1.5 h-[210px] items-end justify-center'>
                <Change />
                <AvgHouse />
              </div>
            </div>
        </div>
        <div className='w-full flex gap-2 mt-1.5 px-3 items-start'>
          <Capacities />
          <Percapita />
        </div>
    </div>
  )
}