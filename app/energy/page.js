"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyShare, Capacity, PercentChange } from '@/components/cards/energy';
import { ArrowUp, ChevronDown, Flag } from 'lucide-react';

export default function Home() {
   
  return (
    <div className="absolute w-full min-h-full bg-[#efefef] py-10">
        <div className='w-full flex gap-2 px-3 pt-5 items-start'>
            <div className='w-1/3'>
              <div className='w-full h-[175px] rounded-[30px] border-2 border-[#9b9b9b]'></div>
              <div className='w-full h-[440px] mt-1.5 rounded-[30px] border-2 border-[#9b9b9b]'>
              <div className='px-3 py-3 overflow-auto'>
                <h1 className='text-[17px] uppercase font-a2 flex items-center'><div className='w-3 h-3 bg-red-400 mx-2 inline-flex'/>Renewables Leaderboard</h1>
                <p className='text-[14px] mx-2 my-0.5 font-rajdhani-regular'>Countries leading the way by share of Renewables in the mix.</p>
                  <div className='px-2 mt-4 w-full flex font-rajdhani-regular text-[15px] text-[#9b9b9b] items-center justify-between'>Country <div>% Nuclear<ChevronDown className='inline-flex ml-0.5' size={13} /></div></div>
                  <div className='h-[320px] overflow-auto'>
                    <div className='p-2 h-[40px] w-full flex font-rajdhani-regular text-[20px]  gap-3 items-center justify-between'>United States <div>40%</div></div>
                    <div className='p-2 h-[40px] w-full flex font-rajdhani-regular text-[20px]  gap-3 items-center justify-between'>United Kindom <div>40%</div></div>
                    <div className='p-2 h-[40px] w-full flex font-rajdhani-regular text-[20px]  gap-3 items-center justify-between'>France <div>40%</div></div>
                    <div className='p-2 h-[40px] w-full flex font-rajdhani-regular text-[20px]  gap-3 items-center justify-between'>India <div>40%</div></div>
                    <div className='p-2 h-[40px] w-full flex font-rajdhani-regular text-[20px]  gap-3 items-center justify-between'>Saudi Arabia <div>40%</div></div>
                    <div className='p-2 h-[40px] w-full flex font-rajdhani-regular text-[20px]  gap-3 items-center justify-between'>China <div>40%</div></div>
                    <div className='p-2 h-[40px] w-full flex font-rajdhani-regular text-[20px]  gap-3 items-center justify-between'>Ireland <div>40%</div></div>
                    <div className='p-2 h-[40px] w-full flex font-rajdhani-regular text-[20px]  gap-3 items-center justify-between'>Ireland <div>40%</div></div>
                    <div className='p-2 h-[40px] w-full flex font-rajdhani-regular text-[20px]  gap-3 items-center justify-between'>Ireland <div>40%</div></div>
                    <div className='p-2 h-[40px] w-full flex font-rajdhani-regular text-[20px]  gap-3 items-center justify-between'>Ireland <div>40%</div></div>
                  </div>                  
              </div>
              </div>
            </div>
            <div className='w-2/3'>
              <div className='w-full h-[400px] rounded-[30px] border-2 p-1 border-[#9b9b9b]'>
                <div className='px-3 py-3'>
                    <h1 className='text-[17px] uppercase font-a2 flex items-center'><div className='w-3 h-3 bg-red-400 mx-2 inline-flex'/>Share of Energy production by indivisual source</h1>
                    <p className='text-[14px] mx-2 my-0.5 font-rajdhani-regular'>Measured as a percentage of primary energy.</p>
                </div>
                <EnergyShare className='w-full h-[300px]'/>
                {/* <p className='text-[13px] mx-5 my-0.5 font-rajdhani-regular'>Data source: <span className=' underline'>Ourworldindata</span></p> */}
              </div>
              <div className='flex w-full mt-1.5 gap-1.5 h-[210px] items-end justify-center'>
                <div className='flex-1 px-4 pt-3 h-full rounded-[30px] border-2 border-[#9b9b9b] relative'>
                  <h1 className='text-[17px] uppercase font-a2 flex items-center'><div className='w-3 h-3 bg-red-400 mx-2'/>% change in production, 2023</h1>
                  <p className='text-[14px] mx-2 my-0.5 font-rajdhani-regular'>Relavtive increase/decrease from previous year.</p>
                  <PercentChange className='w-full h-[137px] mt-1.5'/>
                  {/* <div className='absolute text-[95px] bottom-0  font-rajdhani-regular text-[#2eec7d]'>+26%<div className='text-[18px] text-black pl-2 font-rajdhani-regular inline-flex'>since 2023.</div></div> <div className='inline-flex gap-0.5 pl-1 items-center'> Solar <ChevronDown size={18} /></div>*/}
                </div>
                <div className='flex-1 h-2/3 rounded-[30px] border-2 px-3 pb-3 border-[#9b9b9b]'>
                  <div className='text-[50px] pl-1 font-rajdhani-regular'>13,000Kwh<div className='text-[18px] text-black pl-2 font-rajdhani-regular inline-flex items-center gap-1'><ArrowUp size={17} className='text-[#2eec7d]'/>5% YoY</div></div>
                  <h1 className='text-[17px] uppercase font-a2 flex items-center'><div className='w-3 h-3 bg-red-400 mx-2 inline-flex'/>Avg. annual household energy use.</h1>
                </div>
              </div>
            </div>
        </div>
        <div className='w-full flex gap-2 mt-1.5 px-3 items-start'>
          <div className='w-2/3 h-[400px] rounded-[30px] border-2 px-3 py-3 border-[#9b9b9b]'>
            <h1 className='text-[17px] uppercase font-a2 flex items-center'><div className='w-3 h-3 bg-red-400 mx-2 inline-flex'/>Planned Energy Capacity, (GW)</h1>
            <p className='text-[14px] mx-2 my-0.5 font-rajdhani-regular'>Annual planned energy capacity</p>
            <Capacity className='w-full h-[320px]' />
            {/* <p className='text-[13px] mx-5 my-0.5 font-rajdhani-regular'>Data source: <span className=' underline'>Ourworldindata</span></p> */}
          </div>
          <div className='flex-1 h-[400px] rounded-[30px] border-2 p-1 border-[#9b9b9b]'></div>
        </div>
    </div>
  )
}


{/* <div className='w-full flex gap-2 px-2 py-5 items-start'>
  <div className='w-1/3 h-full'>
    <div>
      <div className='h-[170px] w-full rounded-t-[30px] bg-[#EBE3D5]'></div>
      <svg viewBox="0 0 645 120" fill="#EBE3D5" xmlns="http://www.w3.org/2000/svg" data-element="svg"><path d="M1 0L1 2.47077C1.00002 22.5894 15.943 39.5775 35.8973 42.1439L603.897 115.199C627.817 118.276 649 99.6429 649 75.5258L649 0" class="fill-mushroom-50 stroke-mushroom-300" data-element="path"></path></svg>
    </div>
    <div className='-mt-[40px]'>
      <svg viewBox="0 0 645 120" fill="#776B5D" xmlns="http://www.w3.org/2000/svg" className='rotate-180 -mb-1' data-element="svg"><path d="M1 0L1 2.47077C1.00002 22.5894 15.943 39.5775 35.8973 42.1439L603.897 115.199C627.817 118.276 649 99.6429 649 75.5258L649 0" class="fill-mushroom-50 stroke-mushroom-300" data-element="path"></path></svg>
      <div className='h-[400px] w-full rounded-b-[30px] bg-[#776B5D]'></div>
    </div>
  </div>

  <div className='flex-1'>
    <div className='h-[400px] rounded-[30px] bg-[#776B5D]'><EnergyShare className='w-[90%] h-[90%] mx-auto mt-2'/></div>
    <div className='flex gap-2 w-full mt-2'>
      <div className='h-[260px] w-1/2 rounded-[30px] bg-[#EBE3D5]'></div>
      <div className='h-[260px] w-1/2  rounded-[30px] bg-[#EBE3D5]'></div>
    </div>
  </div>
</div> */}