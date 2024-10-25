"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import { EnergyMixIcon, CapacityIcon, NuclearPlantIcon, ChangeIcon, HouseIcon, RankingIcon, NuclearWasteIcon } from '@/components/icons';
import {DecryptText} from '@/components/decrypt'


export default function Home() {
  return (
      <div className='absolute w-full min-h-full z-10 px-3 py-[70px] bg-[#efefef]'>
  
        <div className='w-full h-fit'> 
          <Fade className='h-[70px] sm:h-[80px] w-full'><TypeAnimation speed={10} cursor={false} sequence={[1000,"Welcome", "Welcome to", 'Welcome to']} className='text-[60px] sm:text-[90px] lg:text-[120px] whitespace-nowrap leading-[85px] md:leading-[85px] text-[#463f3a] font-a2'/></Fade>
          <Fade className='min-h-[90px] w-full flex justify-end md:mt-6 lg:mt-10'><TypeAnimation speed={20} cursor={false} sequence={[2400,"Outer Reach"]} className='text-[60px] sm:text-[90px] lg:text-[120px] leading-[70px] md:leading-[85px] text-[#463f3a] font-a2'/></Fade>
         
          <div className='w-full mt-10 sm:mt-[100px]'>
              <div className='flex items-center h-[27px]'><div className='w-2.5 h-2.5 bg-red-400 mr-2 inline-flex'/><DecryptText className='text-[13px] uppercase font-a2 text-[#463f3a]' text='Description' /></div>
              <div className='text-[16px] sm:text-[22px] mt-2 lg:text-[24px] w-full md:w-[85%] lg:w-[70%] leading-6 sm:leading-8 font-semibold text-[#463f3a] font-a1'>Data and insights tracking the progress of humanity's frontier technologies that are leading us to a world of abundance.</div>
              <div className='md:flex gap-4 mt-5'>
                <div className='text-[#9b9b9b] h-[27px] font-a1 gap-2 flex items-center'><div className='text-[12px]'>{`{01}`}</div><DecryptText className='text-[15px] sm:text-[17px] text-[#9b9b9b]' text='We need more energy.'/></div>
                <div className='text-[#9b9b9b] md:mt-0  font-a1 gap-2 h-[27px] flex items-center'><div className='text-[12px]'>{`{02}`}</div><DecryptText className='text-[145x] sm:text-[17px] text-[#9b9b9b]' text='They lied about nuclear.' /></div>
                <div className='text-[#9b9b9b] h-[27px] font-a1 gap-2 flex items-center'><div className='text-[12px]'>{`{03}`}</div><DecryptText className='text-[15px] sm:text-[17px] text-[#9b9b9b]' text='We need more compute.'/></div>
                <div className=' text-[#9b9b9b] md:mt-0  font-a1 gap-2 h-[27px] flex items-center'><div className='text-[12px]'>{`{04}`}</div><DecryptText className='text-[15px] sm:text-[17px] text-[#9b9b9b]' text="We're passing the Great Filter." /></div>
              </div>
          </div>

          <div className='mt-[150px] flex items-center h-[27px]'><div className='w-2.5 h-2.5 bg-teal-400 mr-2 inline-flex'/><DecryptText className='text-[13px] uppercase font-a2 text-[#463f3a]' text='Topics' /></div>
          
          <div className='mt-5 w-full grid gap-10 md:grid-cols-2 grid-cols-1 grid-rows-4 md:grid-rows-2 min-h-[600px]'>
            <div className='md:flex gap-5 justify-between h-fit md:h-[300px]'>
              <div className='border-[2px] border-t-[12px] h-[300px] border-[#b3b3b3] rounded-[10px] flex-1'></div>
              <div className='flex-1 relative'>
                <div className='text-[30px] mt-2 md:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text='Road to Energy Abundance' /></div>
                <div className='text-[17px] mt-2 md:mt-0 md:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>World's energy mix, renewables capacity, leaderboards, CO2 emissions, per capita and more.</div>
              </div>
            </div>
            <div className='md:flex gap-5 justify-between h-fit md:h-[300px]'>
              <div className='border-[2px] border-t-[12px] border-[#b3b3b3] h-[300px] rounded-[10px] flex-1'></div>
              <div className='flex-1 relative'>
                <div className='text-[30px] mt-2 md:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text="Nuclear's Revenge" /></div>
                <div className='text-[17px] mt-2 md:mt-0 md:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>Nuclear's increasing capacity, it's forgotten promise, truth about safety and reusing waste.</div>
              </div>
            </div>
            <div className='md:flex gap-5 justify-between h-fit md:h-[300px]'>
              <div className='md:block hidden flex-1 relative'>
                <div className='text-[30px] mt-2 md:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text='Age of AGI' /></div>
                <div className='text-[17px] mt-2 md:mt-0 md:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>The largest GPU clusters, rapid global data center rollout, increasing energy demand and AGI's promise.</div>
              </div>
              <div className='border-[2px] border-t-[12px] border-[#b3b3b3] h-[300px] rounded-[10px] flex-1'></div>
              <div className='md:hidden flex-1 relative'>
                <div className='text-[30px] mt-2 md:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text='Age of AGI' /></div>
                <div className='text-[17px] mt-2 md:mt-0 md:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>The largest GPU clusters, rapid global data center rollout, increasing energy demand and AGI's promise.</div>
              </div>
            </div>
            <div className='md:flex gap-5 justify-between h-fit md:h-[300px]'>
              <div className='md:block hidden flex-1 relative'>
                <div className='text-[30px] mt-2 md:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text='The Space Race' /></div>
                <div className='text-[17px] mt-2 md:mt-0 md:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>The magic of SpaceX and Starship and the economics, impact and need for space exploitation.</div>
              </div>
              <div className='border-[2px] border-t-[12px] border-[#b3b3b3] h-[300px] rounded-[10px] flex-1'></div>
              <div className='md:hidden flex-1 relative'>
                <div className='text-[30px] mt-2 md:mt-0 h-fit leading-[40px] text-[#463f3a] font-a2'><DecryptText text='The Space Race' /></div>
                <div className='text-[17px] mt-2 md:mt-0 md:absolute bottom-2 h-fit font-a1 text-[#463f3a]'>The magic of SpaceX and Starship and the economics, impact and need for space exploitation.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full absolute pointer-events-none -z-1 top-0 left-0 h-[110vh] grid grid-cols-4">
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