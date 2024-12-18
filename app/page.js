"use client"
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import { InViewFade } from '@/components/fade'
import { TextRevealWipe } from '@/components/text';
import { EarthIcon } from '@/components/icons';
import img from "@/assests/images/c.png"
import img2 from "@/assests/images/a.png"
import img3 from "@/assests/images/d.png"

export default function Home() {

  return (
      <div className='main'>
        <div className='frame'>

         <div className='frame-content'>
            <Marquee delay={3} className='h-[260px] md:h-[450px] mt-6 sm:mt-5 lg:mt-6 overflow-hidden' autoFill speed={50}>
              <InViewFade delay={600} className='w-full px-5 gap-10 grid grid-cols-3'>
                <Image src={img} className='w-[250px] md:w-[300px] h-auto'/>
                <Image src={img2} className='w-[270px] md:w-[315px] h-auto'/>
                <Image src={img3} className='w-[250px] md:w-[300px] h-auto'/>
              </InViewFade>
            </Marquee>
            <InViewFade initialDelay={500}><TextRevealWipe className='title mt-7'>Welcome to,</TextRevealWipe></InViewFade>
            <div className='h-[100px] items-center flex w-full'>
                <InViewFade initialDelay={1000}><TextRevealWipe delay={1} className='title'>Outer</TextRevealWipe></InViewFade>
                <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay: 2, duration: 0.6}}}><EarthIcon className='stroke-[#837e77] hover:stroke-[--primary-text] mt-4 w-fit' size={65}/></motion.div>
                <TextRevealWipe delay={1.3} className='title'>Reach</TextRevealWipe>
            </div>
            <InViewFade initialDelay={2500} className='description'>Data and insights tracking the progress and contribution of humanity's frontier technologies that are leading us to a world of abundance</InViewFade>
          </div>

          <div className='frame-bar'>
            <div className='md:absolute bottom-0 flex md:block w-full'>
              <InViewFade initialDelay={600} className='flex-1 py-3'>
                <h1 className='tag justify-between flex-1'>EST <h1>06/2024</h1></h1>
                <h1 className='tag justify-between flex-1 my-3'>BY <Link href={'https://tanaydesai.com'} className='hover:text-[--primary-text]'>Tanay Desai</Link></h1>
              </InViewFade>
              <div className='frame-button'>Next</div>
            </div>
          </div>
        
        </div>     
      </div>
  )
}