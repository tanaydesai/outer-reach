"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Fade } from 'react-awesome-reveal';
import {DecryptText} from '@/components/decrypt'
import { WindIcon, NuclearPlantIcon, RoverIcon, AIIcon, RocketIcon , FlaskIcon} from '@/components/icons';
import Marquee from "react-fast-marquee";
import ReactCurvedText from 'react-curved-text';

export default function Home() {
  return (
      <div className='main py-[60px]'>
  
          <Fade className='h-[70px] sm:h-[80px] w-full'><TypeAnimation speed={10} cursor={false} sequence={[200,"Welcome", "Welcome to", 'Welcome to']} className='title leading-[85px] md:leading-[85px]'/></Fade>
          <Fade className='min-h-[80px] w-full'><TypeAnimation speed={20} cursor={false} sequence={[1600,"Outer Reach"]} className='title leading-[70px] md:leading-[85px]'/></Fade>
          
          <div className='font-a1 hidden lg:block absolute top-[85px] right-10'>
            <div className='relative'>
                <div className='absolute -top-[25px] -left-[25px]'>
                  <ReactCurvedText width={150} height={150} cx={75} cy={75} rx={75} ry={75} reversed={false} textProps={{ style: { fontSize: 17 } }} text="WE NEED MORE ENERGY • WE NEED MORE NUCLEAR •" />
                </div>
                <ReactCurvedText width={100} height={100} cx={50} cy={50} rx={50} ry={50} reversed={false} textProps={{ style: { fontSize: 11 } }} text="WE NEED MORE INTELLIGENCE • WE NEED MORE SPACE •"/>
            </div>
          </div>

          <Marquee className='min-h-[350px] overflow-hidden' autoFill speed={50}>
            <div className='w-full grid grid-cols-4'>
              <WindIcon className="group-hover:rotate-12 transition-all duration-300"/>   
              <NuclearPlantIcon className="group-hover:-rotate-12 transition-all duration-300"/>
              <AIIcon className="group-hover:rotate-12 transition-all duration-300"/>
              <RocketIcon className="group-hover:-rotate-12 transition-all duration-300"/>     
            </div>
          </Marquee>

          <div className='tag'><div className='tag-box'/><DecryptText text='Description' /></div>
          <div className='description mt-2'>Data and insights tracking the progress of humanity's frontier technologies that are leading us to a world of abundance</div>
          <div className='description mr-0 ml-auto text-right mt-5'>Highlighting how they contribute to humanity's prosperity while demystifying some negative misconceptions</div>

          <div className='mt-10 tag'><div className='tag-box bg-teal-400'/><DecryptText text='Topics' /></div>
          <div className='mt-5 w-full grid gap-2 grid-flow-row md:grid-cols-2 lg:grid-cols-4'>
              <Link href={'/energy'}>
              <div className='box group'>
                  <div className='box-title'><FlaskIcon size={20}/>Road to Energy Abundance</div>    
                  <WindIcon size={220} className="group-hover:rotate-12 transition-all duration-300"/>   
                  <div className='box-desc'>Global energy mix, renewables and capacity growth, leaderboards, per capita and more.</div>
              </div>
              </Link>

              <Link href={'/nuclear'}>
              <div className='box group'>
                  <div className='box-title'><FlaskIcon size={20}/>Nuclear's Revenge</div>    
                  <NuclearPlantIcon size={220} className="group-hover:-rotate-12 transition-all duration-300"/>
                  <div className='box-desc'>World's nuclear landscape, return to glory, truth about safety and recycling metrics.</div>
              </div>
              </Link>

              <Link href={'/agi'}>
              <div className='box group'>
                  <div className='box-title'><FlaskIcon size={20}/>Age of AGI</div>
                  <AIIcon  size={200} className="group-hover:rotate-12 transition-all duration-300"/>
                  <div className='box-desc'>World's largest GPU clusters, global data center rollout, increasing energy demand and AGI's promise.</div>
              </div>
              </Link>

              <Link href={'/space'}>
              <div className='box group'>
                  <div className='box-title'><FlaskIcon size={20}/>The Space Race</div> 
                  <RocketIcon  size={200} className="group-hover:-rotate-12 transition-all duration-300"/>     
                  <div className='box-desc'>The blessing of SpaceX, reducing launch costs, impact and need for space exploitation.</div>
              </div>
              </Link>
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