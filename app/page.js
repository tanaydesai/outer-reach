"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import { EnergyMixIcon, CapacityIcon, NuclearPlantIcon, ChangeIcon, HouseIcon, RankingIcon, NuclearWasteIcon } from '@/components/icons';
import {DecryptText} from '@/components/decrypt'
import { Tabs3, TabsContent3, TabsList3, TabsTrigger3 } from "@/components/ui/tabs"



export default function Home() {
  return (
      <div className='absolute w-full min-h-full z-10 px-3 py-[70px] bg-[#efefef]'>
  
        <div className='w-full h-fit'> 
          <Fade className='h-[70px] sm:h-[80px] w-full'><TypeAnimation speed={10} cursor={false} sequence={[1000,"Welcome", "Welcome to", 'Welcome to']} className='text-[65px] md:text-[90px] lg:text-[120px] whitespace-nowrap leading-[85px] md:leading-[85px] text-[#463f3a] font-a2'/></Fade>
          <Fade className='min-h-[90px] w-full flex justify-end md:mt-6 lg:mt-10'><TypeAnimation speed={20} cursor={false} sequence={[2400,"Outer Reach"]} className='text-[65px] md:text-[90px] lg:text-[120px] leading-[70px] md:leading-[85px] text-[#463f3a] font-a2'/></Fade>
         
          <div className='w-full mt-10 sm:mt-[100px]'>
              <div className='flex items-center h-[27px]'><div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/><DecryptText className='text-[13px] uppercase font-a2 text-[#463f3a]' text='Description' /></div>
              <div className='text-[16px] sm:text-[22px] mt-2 lg:text-[24px] w-full md:w-[85%] lg:w-[70%] leading-6 sm:leading-8 font-semibold text-[#463f3a] font-a1'>Data insights to track the progress of humanity's frontier technologies, highlight their need and impact and demistify societal misconceptions.</div>
              <div className='md:flex gap-4 mt-5'>
                <div className='text-[#9b9b9b] h-[27px] font-a1 gap-2 flex items-center'><div className='text-[12px]'>{`{01}`}</div><DecryptText className='text-[15px] sm:text-[17px] text-[#9b9b9b]' text='Accessible & comphrensive'/></div>
                <div className='text-[#9b9b9b] md:mt-0  font-a1 gap-2 h-[27px] flex items-center'><div className='text-[12px]'>{`{02}`}</div><DecryptText className='text-[145x] sm:text-[17px] text-[#9b9b9b]' text='Beginner-friendly & visual' /></div>
                <div className=' text-[#9b9b9b] md:mt-0  font-a1 gap-2 h-[27px] flex items-center'><div className='text-[12px]'>{`{03}`}</div><DecryptText className='text-[15px] sm:text-[17px] text-[#9b9b9b]' text='Techno-optimistic' /></div>
              </div>
          </div>
        
          <div className='mt-[100px]'>
            <Tabs3 defaultValue='energy'>
              <TabsList3>
                <TabsTrigger3 value='energy'><DecryptText text='Road to Energy Abundance' /></TabsTrigger3>
                <TabsTrigger3 value='nuclear'><DecryptText text="Nuclear's Revenge" /></TabsTrigger3>
                <TabsTrigger3 value='ai'><DecryptText text="Age of AGI" /></TabsTrigger3>
                <TabsTrigger3 value='space'><DecryptText text='The Space Race' /></TabsTrigger3>
              </TabsList3>
              <TabsContent3 value='energy'>
                <div className='w-[80%] leading-[60px] font-a2 text-[50px]'>We are on a road that leads to a world of Energy Abundance.</div>
              </TabsContent3>
            </Tabs3>
          </div> 

        </div>

        <div className="w-full absolute pointer-events-none -z-1 top-0 left-0 h-screen grid grid-cols-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" className="text-[#463f3a]">
                  <path d="M5 0v10M0 5h10" stroke="#1b1919" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
  )
}