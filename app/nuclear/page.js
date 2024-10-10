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

export default function Home() {
   
  return (
    <div className="absolute w-full min-h-full bg-black text-white py-[50px]">

        <div className='w-[95%] mt-5 mx-auto'>
          <Tabs defaultValue="mix">
            <TabsList className='stroke-purple-700'>
              <TabsTrigger value="mix" className='bg-purple-600 text-white stroke-white border-transparent'><EnergyMixIcon className="group-hover:scale-110 duration-300"/>Energy Mix</TabsTrigger>
              <TabsTrigger value="renewable" className='bg-purple-600 text-white stroke-white border-transparent'><CapacityIcon className="group-hover:scale-110 duration-300"/>Renewables</TabsTrigger>
              <TabsTrigger value="leaderboard" className='bg-purple-600 text-white stroke-white border-transparent'><RankingIcon className="group-hover:scale-110 duration-300"/>Leaderboard</TabsTrigger>
              <TabsTrigger value="change" className='bg-purple-600 text-white stroke-white border-transparent'><ChangeIcon className="group-hover:scale-110 duration-300"/>Growth</TabsTrigger>
              <TabsTrigger value="percapita" className='bg-purple-600 text-white stroke-white border-transparent'><HouseIcon className="group-hover:scale-110 duration-300"/>Per capita</TabsTrigger>
            </TabsList>
        </Tabs>
        </div>
        
    </div>
  )
}