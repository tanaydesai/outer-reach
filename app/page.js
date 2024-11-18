"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import {DecryptText} from '@/components/decrypt'
import { WindIcon, NuclearPlantIcon, RoverIcon, AIIcon, RocketIcon , FlaskIcon} from '@/components/icons';
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
      <div className='main py-[80px]'>
  
        <div className='w-full h-fit'> 
          <Fade className='h-[70px] sm:h-[80px] w-full'><TypeAnimation speed={10} cursor={false} sequence={[200,"Welcome", "Welcome to", 'Welcome to']} className='title leading-[85px] md:leading-[85px]'/></Fade>
          <Fade className='min-h-[120px] w-full text-right mt-4 md:mt-6 lg:mt-10'><TypeAnimation speed={20} cursor={false} sequence={[1600,"Outer Reach"]} className='title leading-[70px] md:leading-[85px]'/></Fade>
         
          <div className='w-full mt-5'>
              <div className='tag'><div className='tag-box'/><DecryptText text='Description' /></div>
              <div className='description mt-2'>Data and insights tracking the progress of humanity's frontier technologies that are leading us to a world of abundance</div>
              <div className='description mr-0 ml-auto text-right mt-5'>Highlighting how they contribute to humanity's prosperity while demystifying some negative misconceptions</div>
              <Marquee className='min-h-[100px]' autoFill speed={100}>
                <div className='flex justify-between gap-[100px] mr-[100px] cursor-default mt-10'>
                  <div className='description-tag'>We need more energy</div>
                  <div className='description-tag'>We need more nuclear</div>
                  <div className='description-tag'>We need more intelligence</div>
                  <div className='description-tag'>We need more space</div>
                </div>
              </Marquee>
          </div>

          <div className='mt-10 tag'><div className='tag-box bg-teal-400'/><DecryptText text='Topics' /></div>

          <div className='mt-5 w-full grid gap-2 grid-flow-row md:grid-cols-2 lg:grid-cols-4'>
              <Link href={'/energy'}>
              <div className='box group'>
                  <div className='box-title'><FlaskIcon size={20}/>Road to Energy Abundance</div>    
                  <WindIcon className="group-hover:rotate-12 transition-all duration-300"/>   
                  <div className='box-desc'>Global energy mix, renewables and capacity growth, leaderboards, per capita and more.</div>
              </div>
              </Link>

              <Link href={'/nuclear'}>
              <div className='box group'>
                  <div className='box-title'><FlaskIcon size={20}/>Nuclear's Revenge</div>    
                  <NuclearPlantIcon className="group-hover:-rotate-12 transition-all duration-300"/>
                  <div className='box-desc'>World's nuclear landscape, return to glory, truth about safety and recycling metrics.</div>
              </div>
              </Link>

              <Link href={'/agi'}>
              <div className='box group'>
                  <div className='box-title'><FlaskIcon size={20}/>Age of AGI</div>
                  <AIIcon className="group-hover:rotate-12 transition-all duration-300"/>
                  <div className='box-desc'>World's largest GPU clusters, global data center rollout, increasing energy demand and AGI's promise.</div>
              </div>
              </Link>

              <Link href={'/space'}>
              <div className='box group'>
                  <div className='box-title'><FlaskIcon size={20}/>The Space Race</div> 
                  <RocketIcon className="group-hover:-rotate-12 transition-all duration-300"/>     
                  <div className='box-desc'>The blessing of SpaceX, reducing launch costs, impact and need for space exploitation.</div>
              </div>
              </Link>
          </div>

        </div>

        <div className="w-full absolute pointer-events-none -z-1 top-0 left-0 h-[85vh] sm:h-[100vh] grid grid-cols-3">
          {Array.from({ length: 3*3 }).map((_, index) => (
            <div key={index} className="relative">
              <div className="absolute inset-0 rotate-45 flex items-center justify-center">
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