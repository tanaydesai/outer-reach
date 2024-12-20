"use client"
import React, { useRef,useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TextRevealWipe } from '@/components/swipe';
import { InViewFade } from '@/components/fade'
import { Card } from '@/components/card';
import useSWR from 'swr'

import { NuclearMix } from '@/components/energy-cards/nuclear-mix';
import { NuclearCapacities } from '@/components/energy-cards/nuclear-capacity';
import { NuclearReactors } from '@/components/energy-cards/nuclear-units';
import { NuclearSafety }  from '@/components/energy-cards/nuclear-safety';
import { NuclearWasteTypes } from '@/components/energy-cards/nuclear-waste-types';
import { NuclearWaste } from '@/components/energy-cards/nuclear-waste';
import pic from '@/assests/images/d.png'


export default function Home() {
  const router = useRouter()
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  
  const { data, error, isLoading } = useSWR('/api/energy', fetcher)
  const [tab, setTab] = useState('home');
  const [country, setCountry] = useState('World');

  if (error) return <div className='loading-page'>Error</div>
  if (isLoading) return <div className='loading-page'>Loading data...</div>

  return (
    <div className='main'>
        <Tabs defaultValue="home" className='frame' onValueChange={setTab} value={tab}>

          <TabsContent value="home">
              <Card img={pic}/>
              <InViewFade delay={500} className='flex-1 absolute bottom-4 pr-3'>
                <TextRevealWipe className='title'>Nuclear Seeks</TextRevealWipe>
                <TextRevealWipe delay={1.2} className='title'>Vengeance</TextRevealWipe>
                <div className='description'>World's nuclear landscape, reactors, pipeline capacity and the bright side of nuclear waste recycling and safety.</div>
              </InViewFade>
          </TabsContent>

          <TabsContent value="gen">
                <Accordion className='my-10' type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Nuclear energy stands out for its ability to provide <span className='acc-span'>continuous, reliable, low-carbon power on a massive scale</span>. <span className='acc-span'>Decades of nuclear usage</span> by France and South Korea with <span className='acc-span'>minimal-to-no incidents</span> and major strides in <span className='acc-span'>nuclear fuel recycling</span> and long-term waste management is testament to this</AccordionTrigger>
                    <AccordionContent>
                      The rapid increase in China's nuclear energy generation <span className="acc-span">should serve as a wake up call</span> for a ever more power hungry world to follow suit and <span className='acc-span'>accelerate</span> their nuclear energy programs, <span className='acc-span'>undoing the decades worth of damage </span> caused by <span className='acc-span'>nuclear fearmongering</span>.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <InViewFade className='my-10'><NuclearMix className="bg-[--secondary-chart-bg]" data={data.mix} country={country}/></InViewFade>
          </TabsContent>

          <TabsContent value="capacity">
                <Accordion className='my-10' type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger icon={false}>Nuclear energy requires far less land than wind or solar farms, preserving natural habitats. Modern reactors are safer than ever, and advancements in nuclear waste recycling reduce long-term storage concerns.</AccordionTrigger>
                  </AccordionItem>
                </Accordion>

                <InViewFade className='my-10'><NuclearCapacities className="bg-[--secondary-chart-bg]" data={data.nuclearYear} country={country}/></InViewFade>
                  
                <Accordion className='my-10' type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger><span className='acc-span'>China and India</span> are the only countries with significant number of nuclear reactors <span className='acc-span'>under construction</span>. China's unified reactor design and <span className='acc-span'>lack of legal barriers with minimal public opposition</span> allows it to rapidly expand its capacity which will soon exceed that of the U.S</AccordionTrigger>
                      <AccordionContent>
                        Other developed countries are <span className='acc-span'>plagued by their own regulations and policies</span> along with an aversion to risk around nuclear power, have hindered the construction of new nuclear reactors. <span className='acc-span'>Better education around its benifits, safety, economic incentives and reduction in regulations</span> is paramount to the development of new reactors that are in <span className='acc-span'>higher need and demand</span> today than ever before.
                      </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <InViewFade className='my-10'><NuclearReactors className="bg-[--secondary-chart-bg]" data={data.nuclearReactors} data2={data.nuclearYear} country={country} /></InViewFade>
          </TabsContent>

          <TabsContent value="safety">
                <Accordion className='my-10' type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Nuclear energy countinues to be the <span className='acc-span'>safest and cleanest form of energy</span> mankind has ever known, even after <span className='acc-span'>extremely rare accidents</span> like Chernobyl are taken into consideration</AccordionTrigger>
                    <AccordionContent>
                      Since adopting nuclear energy, France has seen <span className='acc-span'>economic growth and reduced carbon emissions.</span> Nuclear power fueled industrial expansion, <span className='acc-span'>provided stable, low-cost energy, and reduced emissions</span>, making <span className='acc-span'>France's per capita CO₂ emissions among the lowest in the developed world.</span>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <InViewFade className='my-10'><NuclearSafety className="bg-[--secondary-chart-bg]" data={data.safety} /></InViewFade>
          </TabsContent>

          <TabsContent value="waste">
                <Accordion className='my-10' type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Nuclear waste is <span className='acc-span'>highly recyclable, with spent fuel containing up to 90% of its energy potential</span>. Countries like France, Russia, and Japan already reprocess nuclear waste. The technology already exists and needs to be <span className='acc-span'>scaled up</span> to be more effective</AccordionTrigger>
                      <AccordionContent>
                          The U.S. stockpile of used nuclear fuel conatins <span className='acc-span'>enough energy to power the nation for 200 years</span>. The untapped potential of nuclear recycling can enhance energy security and sustainability.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                <InViewFade className='my-10'><NuclearWaste className="bg-[--secondary-chart-bg]" data={data.nuclearWaste} country={country}/></InViewFade>          
                
                <Accordion className='my-10' type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>The myth that nuclear waste is an insurmountable problem is exaggerated. It is categorized into four types based on radioactivity and longevity: High-Level Waste (HLW) consists mainly of spent nuclear fuel, Intermediate-Level Waste (ILW) and Low-Level Waste (LLW) which includes items like contaminated clothing, tools, and filters, each type has its own storage requirements</AccordionTrigger>
                    </AccordionItem>
                </Accordion>

                <InViewFade className='my-10'><NuclearWasteTypes className="bg-[--secondary-chart-bg]"/></InViewFade>
          </TabsContent>

          <TabsList>
            <InViewFade initialDelay={600} className='flex-1 overflow-auto h-[80px] md:h-[calc(100%-127px)]'>
              <h1 className='tag mt-2' onClick={() => setTab('home')}><div className='tag-box' />SUB-TOPICS</h1>
              <TabsTrigger value="gen" className='mt-5'><div className='font-mono'>01</div> Generation</TabsTrigger>
              <TabsTrigger value="capacity"><div className='font-mono'>02</div> Capacity</TabsTrigger>
              <TabsTrigger value="safety"><div className='font-mono'>03</div> Safety</TabsTrigger>
              <TabsTrigger value="waste"><div className='font-mono'>04</div> Waste</TabsTrigger>
            </InViewFade>
            <div className='frame-button md:absolute bottom-0' onClick={() => tab === "waste" ? router.push('/space') : setTab(["gen", "capacity", "safety", "waste"][["gen", "capacity", "safety", "waste"].indexOf(tab) + 1])}>Next</div>
          </TabsList>
        
        </Tabs>     
    </div>
  )
}