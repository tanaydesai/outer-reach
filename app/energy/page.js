"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyData } from '@/components/cards/energy';

 {/* <div className='text-[30px] text-white w-full text-center font-planer-m uppercase'>{">_"}Outer <span className="italic">Reach</span></div> */}
      {/* <div className='w-[400px] h-[250px]'>
        <div className='bg-[#ff7d7d] w-full h-full rounded-t-[34px] relative'></div>
        <svg viewBox="0 0 645 120" fill="#ff7d7d" xmlns="http://www.w3.org/2000/svg"  data-element="svg"><path d="M1 0L1 2.47077C1.00002 22.5894 15.943 39.5775 35.8973 42.1439L603.897 115.199C627.817 118.276 649 99.6429 649 75.5258L649 0" class="fill-mushroom-50 stroke-mushroom-300" data-element="path"></path></svg>
      </div>

      <div className='w-[400px] h-[250px] mt-10'>
        <svg viewBox="0 0 645 120" fill="#ff7d7d" xmlns="http://www.w3.org/2000/svg" className='rotate-180'  data-element="svg"><path d="M1 0L1 2.47077C1.00002 22.5894 15.943 39.5775 36.8973 42.1439L603.897 115.199C627.817 118.276 649 99.6429 649 75.5258L649 0" class="fill-mushroom-50 stroke-mushroom-300" data-element="path"></path></svg>
        <div className='bg-[#ff7d7d] w-full h-full rounded-b-[34px] relative'></div>
      </div> */}

      {/* <div className='w-[500px] bg-red-400 rounded-[34px] overflow-hidden h-[350px] mt-10'>
        <div className='w-full flex items-center justify-center'>
          <div className='bg-white z-[100] h-[30px] w-[25%] relative flex items-center justify-between'>
            <div className='bg-white z-0  absolute rounded-br-[34px] -left-[55px] -top-[76px] rotate-[45deg] w-[100px] h-[100px]'></div>
            <div className='bg-white z-0 absolute rounded-bl-[34px] -right-[54px] -top-[76px] -rotate-[45deg] w-[100px] h-[100px]'></div>
          </div>
        </div>
      </div> */}



export default function Home() {
   
  return (
    <div className="w-full min-h-screen bg-[#efefef] pt-10">
        <div className='w-full flex gap-2 px-2 py-5 items-start'>
          <div className='w-1/3 h-full'>
            <div className='h-[170px] w-full rounded-[30px] bg-[#EBE3D5] relative'>
              <svg viewBox="0 0 645 120" fill="#EBE3D5" xmlns="http://www.w3.org/2000/svg" className='absolute -bottom-[50px]' data-element="svg"><path d="M1 0L1 2.47077C1.00002 22.5894 15.943 39.5775 35.8973 42.1439L603.897 115.199C627.817 118.276 649 99.6429 649 75.5258L649 0" class="fill-mushroom-50 stroke-mushroom-300" data-element="path"></path></svg>
            </div>
            <div className='h-[450px] w-full mt-[60px] rounded-[30px] bg-[#776B5D] relative'>
              <svg viewBox="0 0 645 120" fill="#776B5D" xmlns="http://www.w3.org/2000/svg" className='absolute rotate-180 -top-[50px]' data-element="svg"><path d="M1 0L1 2.47077C1.00002 22.5894 15.943 39.5775 35.8973 42.1439L603.897 115.199C627.817 118.276 649 99.6429 649 75.5258L649 0" class="fill-mushroom-50 stroke-mushroom-300" data-element="path"></path></svg>
            </div>
          </div>

          <div className='flex-1'>
            <div className='h-[400px] rounded-[30px] bg-[#776B5D]'></div>
            <div className='flex gap-2 w-full mt-2'>
              <div className='h-[260px] w-1/2 rounded-[30px] bg-[#EBE3D5]'></div>
              <div className='h-[260px] w-1/2  rounded-[30px] bg-[#EBE3D5]'></div>
            </div>
          </div>
        </div>
    </div>
  )
}