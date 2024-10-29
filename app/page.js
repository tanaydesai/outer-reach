"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TestDModel } from '@/components/models/test';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import {DecryptText} from '@/components/decrypt'


export default function Home() {
  return (
      <div className='absolute w-full min-h-full z-10 px-3 py-[70px] bg-[#efefef]'>
  
        <div className='w-full h-fit'> 
          <Fade className='h-[70px] sm:h-[80px] w-full'><TypeAnimation speed={10} cursor={false} sequence={[1000,"Welcome", "Welcome to", 'Welcome to']} className='text-[60px] sm:text-[90px] lg:text-[120px] whitespace-nowrap leading-[85px] md:leading-[85px] text-[#463f3a] font-a2'/></Fade>
          <Fade className='min-h-[90px] w-full flex justify-end md:mt-6 lg:mt-10'><TypeAnimation speed={20} cursor={false} sequence={[2400,"Outer Reach"]} className='text-[60px] sm:text-[90px] lg:text-[120px] leading-[70px] md:leading-[85px] text-[#463f3a] font-a2'/></Fade>
         
          <div className='w-full mt-10 sm:mt-[100px]'>
              <div className='flex items-center h-[27px] font-semibold'><div className='w-2.5 h-2.5 bg-red-400 mr-2 inline-flex'/><DecryptText className='text-[13px] uppercase font-a2 text-[#463f3a]' text='Description' /></div>
              <div className='text-[16px] sm:text-[20px] mt-2 w-full md:w-[85%] lg:w-[70%] leading-6 sm:leading-8 font-semibold text-[#463f3a] font-a1'> Providing data and insights tracking the progress of humanity's frontier technologies that are leading us to a world of abundance. <span className='hidden lg:inline'>While demystifying negative misconceptions and highlighting how they contribute to humanity's prosperity.</span></div>
              <div className='text-[16px] lg:hidden sm:text-[20px] mt-3 w-full md:w-[85%] lg:w-[70%] leading-6 sm:leading-8 font-semibold text-[#463f3a] font-a1'>While demystifying negative misconceptions and highlighting how they contribute to humanity's prosperity.</div>
              <div className='lg:flex gap-4 mt-7'>
                <div className='text-[#9b9b9b] h-[27px] font-a1 gap-2 flex items-center'><div className='text-[12px]'>{`{01}`}</div><DecryptText className='text-[15px] sm:text-[17px] text-[#9b9b9b]' text='We need more energy.'/></div>
                <div className='text-[#9b9b9b] h-[27px] font-a1 gap-2 flex items-center'><div className='text-[12px]'>{`{02}`}</div><DecryptText className='text-[15px] sm:text-[17px] text-[#9b9b9b]' text='We need more nuclear.'/></div>
                <div className='text-[#9b9b9b] lg:mt-0  font-a1 gap-2 h-[27px] flex items-center'><div className='text-[12px]'>{`{03}`}</div><DecryptText className='text-[145x] sm:text-[17px] text-[#9b9b9b]' text='We need more intelligence.' /></div>
                <div className=' text-[#9b9b9b] lg:mt-0  font-a1 gap-2 h-[27px] flex items-center'><div className='text-[12px]'>{`{04}`}</div><DecryptText className='text-[15px] sm:text-[17px] text-[#9b9b9b]' text="We need more space." /></div>
              </div>
          </div>

          <div className='mt-[120px] flex items-center h-[27px] font-semibold'><div className='w-2.5 h-2.5 bg-teal-400 mr-2 inline-flex'/><DecryptText className='text-[13px] uppercase font-a2 text-[#463f3a]' text='Topics' /></div>

          <div className='mt-5 w-full grid gap-2 grid-flow-row md:grid-cols-2 lg:grid-cols-4'>
              <div className='h-[350px] border-[3px] border-t-0 border-[#463f3a] relative flex-1'>
                  <div className='text-[15px] h-[30px] flex justify-start px-2 items-center bg-[#463f3a] text-white font-a2'><DecryptText text='>_ Road to Energy Abundance' /></div>
                  {/* <TestDModel/> */}
                  <div className='text-[13px] px-2 mt-2 absolute bottom-0 h-[65px] font-a1 text-[#463f3a]'>Global energy mix, renewables growth and capacity, winners & losers, per capita and more.</div>
              </div>

              <div className='h-[350px] border-[3px] border-t-0  border-[#463f3a] relative overflow-auto flex-1'>
                  <div className='text-[15px] h-[30px] flex justify-start px-2  items-center bg-[#463f3a] text-white font-a2'><DecryptText text=">_ Nuclear's Revenge" /></div>
                  {/* <TestDModel/> */}
                  <div className='text-[13px] px-2 mt-2 absolute bottom-0 h-[65px] font-a1 text-[#463f3a]'>Global nuclear capacity, rapid expansion, truth about safety and reuseable waste metrics.</div>
              </div>

              <div className='h-[350px] border-[3px] border-t-0  border-[#463f3a] relative overflow-auto flex-1'>
                  <div className='text-[15px] h-[30px] flex justify-start px-2  items-center bg-[#463f3a] text-white font-a2'><DecryptText text='>_ Age of AGI' /></div>
                  {/* <TestDModel/> */}
                  <div className='text-[13px] px-2 mt-2 absolute bottom-0 h-[65px] font-a1 text-[#463f3a]'>World's largest GPU clusters, rapid global data center rollout, increasing energy demand and AGI's promise.</div>
              </div>

              <div className='h-[350px] border-[3px] border-t-0  border-[#463f3a] relative overflow-auto flex-1'>
                  <div className='text-[15px] h-[30px] flex justify-start px-2  items-center bg-[#463f3a] text-white font-a2'><DecryptText text='>_ The Space Race' /></div>
                    {/* <TestDModel/> */}
                  <div className='text-[13px] px-2 mt-2 absolute bottom-0 h-[65px] font-a1 text-[#463f3a]'>The blessing that is SpaceX, the economics, impact and need for space exploitation.</div>
              </div>
          </div>

        </div>

        <div className="w-full absolute pointer-events-none -z-1 top-0 left-0 h-[100vh] grid grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
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