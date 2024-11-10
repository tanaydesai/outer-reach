"use client"
import React, { useRef,useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EnergyLeaderBoard } from '@/components/energy-cards/energy-leaderboard';
import { EnergyMix } from '@/components/energy-cards/energy-mix';
import { EnergyChange } from '@/components/energy-cards/energy-change';
import { EnergyChange2 } from '@/components/energy-cards/energy-change2';
import { EnergyCapacities } from '@/components/energy-cards/energy-capacity';
import { EnergyCapacityChange } from '@/components/energy-cards/capacity-change';
import { EnergyCapacityChange2 } from '@/components/energy-cards/capacity-change2';
import { AvgHouse } from '@/components/energy-cards/annual-avg-house';
import { EnergyUse } from '@/components/energy-cards/anuual-energy-pc';
import { RenewableShare } from '@/components/energy-cards/renewable-share';
import { FossilShare } from '@/components/energy-cards/fossils-share';
import { EnergyGDP } from '@/components/energy-cards/energy-gdp';
import { EnergyGDPPC } from '@/components/energy-cards/energy-gdp-pc';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CornerDownRight, Earth } from 'lucide-react';
import { DecryptText } from '@/components/decrypt'

export default function Home() {
  const [tab, setTab] = useState('mix');
   
  return (
    <div className="main">

        <div className='main-body'>
          <Tabs defaultValue="mix" onValueChange={setTab} value={tab}>
            <div className='flex gap-2 justify-start items-center'>
            <TabsList>
              <TabsTrigger value="mix"><div className={`${tab == "mix" ? "" : "hidden"} tag-box  mr-1 `}/> Energy Mix</TabsTrigger>
              <TabsTrigger value="capacity"><div className={`${tab == "capacity" ? "" : "hidden"} tag-box  mr-1 `}/> Capacity</TabsTrigger>
              <TabsTrigger value="percapita"><div className={`${tab == "percapita" ? "" : "hidden"} tag-box  mr-1 `}/> Economics</TabsTrigger>
              <TabsTrigger value="leaderboard"><div className={`${tab == "leaderboard" ? "" : "hidden"} tag-box  mr-1 `}/> Leaderboards</TabsTrigger>
            </TabsList>
            <Select>
              <SelectTrigger className="font-a1 flex bg-transparent group p-2 mx-0 text-[#aaaaaa] hover:text-[#1e1f2b] text-[14px] no-underline rounded-[10px] border border-[#d9d9d9]">
                  <div className='hidden sm:block'><SelectValue placeholder="Country"/></div>
                  <div className='sm:hidden'><SelectValue placeholder={<Earth />} /></div>
              </SelectTrigger>
              <SelectContent>
                  <SelectItem value="dark">India</SelectItem>
                  <SelectItem value="light">France</SelectItem>
              </SelectContent>
            </Select>
            </div>
            <TabsContent value="mix">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>The world's energy mix is rapidly adopting <span className='text-black'>clean energy</span> with <span className='text-black'>nuclear energy</span> making a big comeback</AccordionTrigger>
                    <AccordionContent>
                      Countries like <span className='text-black'>Norway, France and Denmark</span> get {">"}80% of their energy from <span className='text-black'>renewables, nuclear and wind</span> respectively.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <EnergyMix className={'mt-10'}/>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="mt-7">What's the progress of Renewables and Nuclear energy?</AccordionTrigger>
                    <AccordionContent>
                      Installations <span className='text-black'>increasingly Renewable and Nuclear energy</span> which is <span className='text-black'>speeding up</span>.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className='md:flex gap-2 mt-5'>
                  <EnergyChange className={'flex-1'}/>
                  <EnergyChange2 className={'flex-1 mt-5 md:mt-0'}/>
                </div>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Clean energy consumption is <span className='text-black'>rising</span> while fossil fuels remain either <span className='text-black'>stagnant or falling.</span></AccordionTrigger>
                    <AccordionContent>
                      Countries like <span className='text-black'>Norway, France and Denmark</span> get {">"}80% of their energy from <span className='text-black'>renewables, nuclear and wind</span> respectively.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className='md:flex gap-2 mt-5'>
                  <RenewableShare className={'flex-1'}/>
                  <FossilShare className={'flex-1 mt-5 md:mt-0'}/>
                </div>
            </TabsContent>
            <TabsContent value="capacity">  
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Capacity installations of <span className='text-black'>solar and wind</span> are through the moon and <span className='text-black'>accelerating</span> while countries race to get <span className='text-black'>more nuclear online</span>.</AccordionTrigger>
                    <AccordionContent>
                      While solar and wind energy's benifits are <span className='text-black'>well understood,</span> it required <span className='text-black'>an AI arms race</span> for the world's eyes to open for <span className='text-black'>nuclear energy</span> again.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className='md:flex gap-2 mt-10'>
                  <EnergyCapacities className={'flex-1'}/>
                  <EnergyCapacityChange className={'flex-1 mt-5 md:mt-0'}/>
                </div>

                <EnergyCapacityChange2 className={'mt-10'}/>
            </TabsContent>
            <TabsContent value="percapita">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>There is <span className='text-black'>no energy rich poor country.</span> The <span className='text-black'>more energy</span> a country consumes the more <span className='text-black'>prosperous it's citezens are.</span></AccordionTrigger>
                    <AccordionContent>
                      Countries like <span className='text-black'>France</span> have subsequently grew their <span className='text-black'>nuclear capacity,</span> grew their <span className='text-black'>economy</span> and <span className='text-black'>reduced carbom emissions.</span>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className='md:flex gap-2 mt-10'>            
                  <EnergyGDP className={'flex-1'}/>
                  <EnergyGDPPC className={'flex-1 mt-5 md:mt-0'}/>
                </div>  
                
                <div className='md:flex gap-2 mt-10'>
                    <EnergyUse className={'flex-1'}/>
                    <AvgHouse className={'flex-1 mt-5 md:mt-0'}/>
                </div>
            </TabsContent>
            <TabsContent value="leaderboard">          
                <EnergyLeaderBoard className={'mt-[100px]'}/>
            </TabsContent>
          </Tabs>
        </div>

    </div>
  )
}