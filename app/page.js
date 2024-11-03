"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TestDModel } from '@/components/models/test';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import {DecryptText} from '@/components/decrypt'


export default function Home() {
  return (
      <div className='main bg-[#efefef] py-[70px]'>
  
        <div className='w-full h-fit'> 
          <Fade className='h-[70px] sm:h-[80px] w-full'><TypeAnimation speed={10} cursor={false} sequence={[1000,"Welcome", "Welcome to", 'Welcome to']} className='title leading-[85px] md:leading-[85px]'/></Fade>
          <Fade className='min-h-[90px] w-full flex justify-end md:mt-6 lg:mt-10'><TypeAnimation speed={20} cursor={false} sequence={[2400,"Outer Reach"]} className='title leading-[70px] md:leading-[85px]'/></Fade>
         
          <div className='w-full mt-10 sm:mt-[100px]'>
              <div className='tag'><div className='tag-box '/><DecryptText text='Description' /></div>
              <div className='description mt-2'>Providing data and insights tracking the progress of humanity's frontier technologies that are leading us to a world of abundance. <span className='hidden lg:inline'>While demystifying negative misconceptions and highlighting how they contribute to humanity's prosperity.</span></div>
              <div className='description lg:hidden mt-3'>While demystifying negative misconceptions and highlighting how they contribute to humanity's prosperity.</div>
              <div className='lg:flex gap-4 mt-7'>
                <div className='description-tag'><div className='text-[12px]'>{`{01}`}</div><DecryptText text='We need more energy.'/></div>
                <div className='description-tag'><div className='text-[12px]'>{`{02}`}</div><DecryptText text='We need more nuclear.'/></div>
                <div className='description-tag lg:mt-0'><div className='text-[12px]'>{`{03}`}</div><DecryptText text='We need more intelligence.' /></div>
                <div className='description-tag lg:mt-0 '><div className='text-[12px]'>{`{04}`}</div><DecryptText text="We need more space." /></div>
              </div>
          </div>

          <div className='mt-[120px] tag'><div className='tag-box bg-teal-400'/><DecryptText text='Topics' /></div>

          <div className='mt-5 w-full grid gap-2 grid-flow-row md:grid-cols-2 lg:grid-cols-4'>
              <div className='box'>
                  <div className='box-title'><DecryptText text='>_ Road to Energy Abundance' /></div>                
                  <div className='box-desc'>Global energy mix, renewables growth and capacity, winners & losers, per capita and more.</div>
              </div>

              <div className='box'>
                  <div className='box-title'><DecryptText text=">_ Nuclear's Revenge" /></div>    
                  <div className='box-desc'>Global nuclear capacity, rapid expansion, truth about safety and reuseable waste metrics.</div>
              </div>

              <div className='box'>
                  <div className='box-title'><DecryptText text='>_ Age of AGI' /></div>
                  <div className='box-desc'>World's largest GPU clusters, rapid global data center rollout, increasing energy demand and AGI's promise.</div>
              </div>

              <div className='box'>
                  <div className='box-title'><DecryptText text='>_ The Space Race' /></div>      
                  <div className='box-desc'>The blessing that is SpaceX, the economics, impact and need for space exploitation.</div>
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