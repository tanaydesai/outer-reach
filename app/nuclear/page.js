"use client"
import React, { useRef,useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TextRevealWipe } from '@/components/text';
import { InViewFade } from '@/components/fade'
import useSWR from 'swr'

import { NuclearMix } from '@/components/energy-cards/nuclear-mix';
import { NuclearCapacities } from '@/components/energy-cards/nuclear-capacity';
import { NuclearReactors } from '@/components/energy-cards/nuclear-units';
import { NuclearSafety }  from '@/components/energy-cards/nuclear-safety';
import { NuclearWasteTypes } from '@/components/energy-cards/nuclear-waste-types';
import { NuclearWaste } from '@/components/energy-cards/nuclear-waste';


export default function Home() {
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
              <InViewFade delay={500} className='flex-1 absolute bottom-4 pr-3'>
                <TextRevealWipe className='title'>Nuclear Seeks</TextRevealWipe>
                <TextRevealWipe delay={1.2} className='title'>Vengeance</TextRevealWipe>
                <div className='description'><div>World's nuclear landscape, return to glory, truth about safety and {"\n"} recycling metrics.</div></div>
              </InViewFade>
          </TabsContent>

          <TabsContent value="gen">
                <Accordion className='my-10' type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                    <AccordionContent>
                      The world already gets almost <span className="acc-span">40% of its electricity </span> from <span className="acc-span">clean energy sources</span> while adopting even more at a <span className="acc-span">rapid pace</span> with <span className="acc-span">nuclear energy</span> making a big comeback.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <InViewFade className='my-10'><NuclearMix className="bg-[--secondary-chart-bg]" data={data.mix} country={country}/></InViewFade>
          </TabsContent>

          <TabsContent value="capacity">
                <Accordion className='my-10' type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                  </AccordionItem>
                </Accordion>

                <InViewFade className='my-10'><NuclearCapacities className="bg-[--secondary-chart-bg]" data={data.nuclearYear} country={country}/></InViewFade>
                  
                <Accordion className='my-10' type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                    </AccordionItem>
                </Accordion>

                <InViewFade className='my-10'><NuclearReactors className="bg-[--secondary-chart-bg]" data={data.nuclearReactors} data2={data.nuclearYear} country={country} /></InViewFade>
          </TabsContent>

          <TabsContent value="safety">
                <Accordion className='my-10' type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                  </AccordionItem>
                </Accordion>

                <InViewFade className='my-10'><NuclearSafety className="bg-[--secondary-chart-bg]" data={data.safety} /></InViewFade>
          </TabsContent>

          <TabsContent value="waste">
                <Accordion className='my-10' type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                    </AccordionItem>
                  </Accordion>

                <InViewFade className='my-10'><NuclearWaste className="bg-[--secondary-chart-bg]" data={data.nuclearWaste} country={country}/></InViewFade>          
                
                <Accordion className='my-10' type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
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
            <div className='frame-button md:absolute bottom-0'>Next</div>
          </TabsList>
        
        </Tabs>     
    </div>
  )
}