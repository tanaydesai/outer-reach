"use client"
import React, { useRef,useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TextRevealWipe } from '@/components/text';
import { InViewFade } from '@/components/fade'
import useSWR from 'swr'

import { SpaceLaunches } from '@/components/space-cards/country-launches';
import { RocketLaunches } from '@/components/space-cards/rocket-laucnhes';
import { RocketCosts } from '@/components/space-cards/rocket-costs';

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  
  const { data, error, isLoading } = useSWR('/api/space', fetcher)
  const [tab, setTab] = useState('home');

  if (error) return <div className='loading-page'>Error</div>
  if (isLoading) return <div className='loading-page'>Loading data...</div>

  return (
    <div className='main'>
        <Tabs defaultValue="home" className='frame' onValueChange={setTab} value={tab}>

          <TabsContent value="home">
              <InViewFade delay={500} className='flex-1 absolute bottom-3 pr-3'>
                <TextRevealWipe className='title'>The Space Race</TextRevealWipe>
                <div className='description'><div>The blessing of SpaceX, reducing launch costs, impact and need for space exploration.</div></div>
              </InViewFade>
          </TabsContent>

          <TabsContent value="launch">
                <Accordion className='my-10' type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                    <AccordionContent>
                        The world already gets almost <span className="acc-span">40% of its electricity </span> from <span className="acc-span">clean energy sources</span> while adopting even more at a <span className="acc-span">rapid pace</span> with <span className="acc-span">nuclear energy</span> making a big comeback.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>
            
                <InViewFade initialDelay={600} className='my-10'><SpaceLaunches className='bg-[--tertiary-chart-bg]' data={data.country} /></InViewFade>

                <Accordion className='my-10' type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                    <AccordionContent>
                        The world already gets almost <span className="acc-span">40% of its electricity </span> from <span className="acc-span">clean energy sources</span> while adopting even more at a <span className="acc-span">rapid pace</span> with <span className="acc-span">nuclear energy</span> making a big comeback.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <InViewFade initialDelay={600} className='my-10'><RocketLaunches className='bg-[--tertiary-chart-bg]' data={data.rocket} /></InViewFade>
          </TabsContent>

          <TabsContent value="cost">
                <Accordion className='my-10' type="single" collapsible>
                    <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                    <AccordionContent>
                        The world already gets almost <span className="acc-span">40% of its electricity </span> from <span className="acc-span">clean energy sources</span> while adopting even more at a <span className="acc-span">rapid pace</span> with <span className="acc-span">nuclear energy</span> making a big comeback.
                    </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <InViewFade initialDelay={600} className='my-10'><RocketCosts className='bg-[--tertiary-chart-bg]' data={data.cost}/></InViewFade>
            
          </TabsContent>

          <TabsContent value="mass">Mass to Orbit</TabsContent>

          <TabsList>
            <InViewFade initialDelay={600} className='flex-1 overflow-auto h-[80px] md:h-[calc(100%-127px)]'>
              <h1 className='tag mt-2' onClick={() => setTab('home')}><div className='tag-box' />SUB-TOPICS</h1>
              <TabsTrigger value="launch" className='mt-5'><div className='font-mono'>01</div> Launches</TabsTrigger>
              <TabsTrigger value="cost"><div className='font-mono'>02</div> Costs</TabsTrigger>
              <TabsTrigger value="mass"><div className='font-mono'>03</div> Mass to Orbit</TabsTrigger>
            </InViewFade>
            <div className='frame-button md:absolute bottom-0'>Next</div>
          </TabsList>
        
        </Tabs>     
    </div>
  )
}