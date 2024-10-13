"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import { EnergyMixIcon, CapacityIcon, NuclearPlantIcon, ChangeIcon, HouseIcon, RankingIcon, NuclearWasteIcon } from '@/components/icons';
import {DecryptText} from '@/components/decrypt'

export default function Home() {
  return (
      <div className='absolute w-full min-h-full px-3 py-[50px] bg-[#efefef]'>
  
        <div className='w-full h-fit'> 
          <Fade className='h-[80px] w-full'><TypeAnimation speed={10} cursor={false} sequence={[1000,"Welcome", "Welcome to", 'Welcome to']} className='text-[50px] md:text-[70px] lg:text-[100px] whitespace-nowrap leading-[60px] md:leading-[85px] text-[#463f3a] font-a2'/></Fade>
          <Fade className='h-[80px] w-full flex justify-end md:mt-4'><TypeAnimation speed={20} cursor={false} sequence={[2400,"The Outer Reach"]} className='text-[50px] md:text-[70px] lg:text-[100px] leading-[60px] md:leading-[85px] text-[#463f3a] font-a2'/></Fade>
        
          <div className='w-full mt-10'>
              <div className='flex items-center pb-1 h-[27px]'><div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/><DecryptText className='text-[12px] uppercase font-a2 text-[#463f3a]' text='Description' /></div>
              <div className='text-[20px] w-[90%] lg:w-[60%] text-[#463f3a] font-a1'>Data insights to track the progress of humanity's frontier technologies, highlight their need and impact and demistify societal misconceptions.</div>
              <div className='text-[#9b9b9b] text-[17px] h-[27px] mt-5 font-a1 gap-2 flex items-center'><div className='text-[11px]'>{`{01}`}</div><DecryptText className='text-[15px] text-[#9b9b9b]' text='Accessible & comphrensive.'/></div>
              <div className='text-[#9b9b9b] font-a1 gap-2 h-[27px] mt-1 flex items-center'><div className='text-[11px]'>{`{02}`}</div><DecryptText className='text-[15px] text-[#9b9b9b]' text='Beginner-friendly & visual.' /></div>
              <div className=' text-[#9b9b9b] font-a1 gap-2 h-[27px] mt-1 flex items-center'><div className='text-[11px]'>{`{03}`}</div><DecryptText className='text-[15px] text-[#9b9b9b]' text='Techno-optimistic.' /></div>
          </div>
        
          <div className='gap-3 mt-[100px]'>
            <div className='w-full flex justify-between gap-10 overflow-auto'>
              <div className='flex items-center h-[27px] shrink-0 '><div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/><DecryptText className='text-[12px] uppercase font-a2' text='Road to Energy Abundance' /></div>
              <div className='flex items-center h-[27px] shrink-0 '><div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/><DecryptText className='text-[12px] uppercase font-a2 text-[#9b9b9b]' text="Nuclear's Revenge" /></div>
              <div className='flex items-center h-[27px] shrink-0 '><div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/><DecryptText className='text-[12px] uppercase font-a2 text-[#9b9b9b]' text='Age of AGI' /></div>
              <div className='flex items-center h-[27px] shrink-0 '><div className='w-2 h-2 bg-red-400 mr-2 inline-flex'/><DecryptText className='text-[12px] uppercase font-a2 text-[#9b9b9b]' text='The Space Race' /></div>
            </div>

            <div className='bg-[#1e1715] flex-1 p-4 mt-4 rounded-[10px] h-[600px] text-white'>
              <div className='w-[80%] leading-[60px] font-a2 text-[50px]'>We are on a road that leads to a world of Energy Abundance.</div>
            </div>
          </div> 
        </div>




        <div className="w-full absolute z-[100] top-0 left-0 h-full grid grid-cols-4">
          {Array.from({ length: 20 }).map((_, index) => (
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