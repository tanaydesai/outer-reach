"use client"
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyData } from '@/components/cards/energy';

export default function Home() {
  const divRef = useRef(null);

  useEffect(() => {
      if (divRef.current) {
        divRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center', // Optional, for horizontal centering
        });
      }
    }, []);
   
  return (
    <div className="fixed w-full h-full bg-black overflow-auto overflow-y-hidden">
        <div ref={divRef} class="min-w-full min-h-full overflow-hidden w-[1468.8px] h-[918px]" >
          <div className="w-full bg-energy bg-center bg-cover relative h-full">

              <div class="absolute top-[50%] left-[20%] flex h-5 min-w-10">
                  <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200"></div>
                  <EnergyData><motion.div whileTap={{scale: 0.9}} class="relative cursor-default px-1 flex items-center justify-center text-[9px] text-black font-semibold font-planer-m uppercase rounded-full h-5 min-w-10 bg-[#d6d6d6] opacity-85">
                      Bio
                  </motion.div></EnergyData>
              </div>

              <div class="absolute bottom-[35%] left-[45%] flex h-5 min-w-10">
                  <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200"></div>
                  <EnergyData><motion.div whileTap={{scale: 0.9}} class="relative cursor-default px-2 flex items-center justify-center text-[9px] text-black font-semibold font-planer-m uppercase rounded-full h-5 min-w-10 bg-[#d6d6d6] opacity-85">
                      Solar
                  </motion.div></EnergyData>
              </div>

              <div class="absolute top-[20%] left-[37%] flex h-5 min-w-10">
                  <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200"></div>
                  <EnergyData><motion.div whileTap={{scale: 0.9}} class="relative cursor-default px-2 flex items-center justify-center text-[9px] text-black font-semibold font-planer-m uppercase rounded-full h-5 min-w-10 bg-[#d6d6d6] opacity-85">
                      Wind
                  </motion.div></EnergyData>
              </div>

              <div class="absolute top-[47%] left-[40%] flex h-5 min-w-10">
                  <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200"></div>
                  <EnergyData><motion.div whileTap={{scale: 0.9}} class="relative cursor-default px-2 flex items-center justify-center text-[9px] text-black font-semibold font-planer-m uppercase rounded-full h-5 min-w-10 bg-[#d6d6d6] opacity-85">
                      Storage
                  </motion.div></EnergyData>
              </div>

              <div class="absolute top-[35%] right-[40%] flex h-5 min-w-10">
                  <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200"></div>
                  <EnergyData><motion.div whileTap={{scale: 0.9}} class="relative cursor-default px-2 flex items-center justify-center text-[9px] text-black font-semibold font-planer-m uppercase rounded-full h-5 min-w-10 bg-[#d6d6d6] opacity-85">
                      Nuclear
                  </motion.div></EnergyData>
              </div>

              <div class="absolute bottom-[35%] right-[15%] flex h-5 min-w-10">
                  <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200"></div>
                  <EnergyData><motion.div whileTap={{scale: 0.9}} class="relative cursor-default px-1 flex items-center justify-center text-[9px] text-black font-semibold font-planer-m uppercase rounded-full h-5 min-w-10 bg-[#d6d6d6] opacity-85">
                      Oil
                  </motion.div></EnergyData>
              </div>

              <div class="absolute bottom-[13%] right-[22%] flex h-5 min-w-10">
                  <div class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-200"></div>
                  <EnergyData><motion.div whileTap={{scale: 0.9}} class="relative cursor-default px-1 flex items-center justify-center text-[9px] text-black font-semibold font-planer-m uppercase rounded-full h-5 min-w-10 bg-[#d6d6d6] opacity-85">
                      Hydro
                  </motion.div></EnergyData>
              </div>
          </div>
        </div>
    </div>
  )
}