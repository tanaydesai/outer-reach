"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import Image from 'next/image'
import bag from "@/assests/images/bag.jpg"
import blue from "@/assests/images/blue.jpg"
import space from "@/assests/images/space.jpg"


export const Menu = ({children}) => {
  return (
    <Drawer>
    <DrawerTrigger>{children}</DrawerTrigger>
    <DrawerContent>
        <div className='w-full h-full mb-5 rounded-[11px] bg-white/[.80] backdrop-blur-[100px] p-3 overflow-auto'>
            {/* <div className="mx-auto h-1 w-[100px] rounded-full bg-stone-300 mb-7" /> */}

            <DrawerTitle className="font-planer-m text-[#706e6e] text-center text-[19px] mb-1 uppercase">Select Domain</DrawerTitle>

            <div className='grid w-full mb-2 max-w-[800px] place-items-center mx-auto grid-flow-row grid-cols-2 md:grid-cols-3 gap-3 md:gap-2'>
                <div className='group min-w-[50px] hover:opacity-85  max-w-[250px] h-auto rounded-[9px] overflow-auto'>
                    <Image src={bag} alt="image" className='w-full h-auto' />
                </div>
                <div className='min-w-[50px] hover:opacity-85  max-w-[250px] h-auto rounded-[9px] overflow-auto'>
                    <Image src={blue} alt="image" className='w-full h-full' />
                </div>
                <div className='min-w-[50px] hover:opacity-85  max-w-[250px] h-auto rounded-[9px] overflow-auto'>
                    <Image src={space} alt="image" className='w-full h-auto' />
                </div>
                <div className='min-w-[50px] hover:opacity-85  max-w-[250px] h-auto rounded-[9px] overflow-auto'>
                    <Image src={blue} alt="image" className='w-full h-full' />
                </div>
                <div className='min-w-[50px] hover:opacity-85  max-w-[250px] h-auto rounded-[9px] overflow-auto'>
                    <Image src={space} alt="image" className='w-full h-auto' />
                </div>
                <div className='min-w-[50px] hover:opacity-85  max-w-[250px] h-auto rounded-[9px] overflow-auto'>
                    <Image src={bag} alt="image" className='w-full h-auto' />
                </div>
            </div>

        </div>
    </DrawerContent>
    </Drawer>
  );
}