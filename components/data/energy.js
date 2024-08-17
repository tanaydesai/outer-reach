"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import { motion } from 'framer-motion';
import { Mix } from '../charts/mix';

export const EnergyData = ({children}) => {
  return (
    <Drawer>
    <DrawerTrigger>{children}</DrawerTrigger>
    <DrawerContent>
        <div className='w-full h-full mb-5 rounded-[11px] bg-white/[.80] backdrop-blur-[5px] p-3 overflow-auto'>
            <div className="mx-auto h-1 w-[100px] rounded-full bg-stone-300" />
            <DrawerTitle className="font-planer-m text-[#706e6e] text-center text-[19px] mt-3 mb-2 uppercase">Solar</DrawerTitle>
            <Mix/>
        </div>
    </DrawerContent>
    </Drawer>
  );
}