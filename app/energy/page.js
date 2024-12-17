"use client"
import React, { useRef,useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Combobox } from '@/components/ui/combobox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import { TextRevealWipe } from '@/components/text';
import { InViewFade } from '@/components/fade'
import useSWR from 'swr'

import { EnergyLeaderBoard } from '@/components/energy-cards/energy-leaderboard';
import { EnergyMix } from '@/components/energy-cards/energy-mix';
import { EnergyChange } from '@/components/energy-cards/annual-energy-change';
import { Energy3Share } from '@/components/energy-cards/energy3-share';
import { EnergyCapacities } from '@/components/energy-cards/energy-capacity';
import { EnergyCapacityAdditions } from '@/components/energy-cards/capacity-additions';
import { AvgHouse } from '@/components/energy-cards/annual-avg-house';
import { EnergyUse } from '@/components/energy-cards/annual-energy-pc';
import { RenewableShare } from '@/components/energy-cards/renewable-share';
import { FossilShare } from '@/components/energy-cards/fossils-share';
import { EnergyGDP } from '@/components/energy-cards/energy-gdp';
import { EnergyGDPPC } from '@/components/energy-cards/energy-gdp-pc';


export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  
  const { data, error, isLoading } = useSWR('/api/energy',fetcher)
  const [tab, setTab] = useState('home');
  const [country, setCountry] = useState('World');

  if (error) return <div className='loading-page'>Error</div>
  if (isLoading) return <div className='loading-page'>Loading data...</div>

  return (
    <div className='main'>
        <Tabs defaultValue="home" className='frame' onValueChange={setTab} value={tab}>

          <TabsContent value="home">
              <InViewFade delay={500} className='absolute bottom-3'>
                <TextRevealWipe className='title'>Road to Energy</TextRevealWipe>
                <TextRevealWipe delay={1.2} className='title'>Abundance</TextRevealWipe>
                <div className='description'>Global energy mix, renewables and capacity growth, leaderboards, per capita and more.</div>
              </InViewFade>
          </TabsContent>

          <TabsContent value="mix">
                <Accordion className='my-10' type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                    <AccordionContent>
                      The world already gets almost <span className="acc-span">40% of its electricity </span> from <span className="acc-span">clean energy sources</span> while adopting even more at a <span className="acc-span">rapid pace</span> with <span className="acc-span">nuclear energy</span> making a big comeback.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
               <InViewFade initialDelay={600} className='my-10'><EnergyMix data={data.mix} country={country}/></InViewFade>
               
               <Accordion className="my-10" type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Countries like India and is increasing its energy consumption rapidly. While the UK is <span className="acc-span">losing</span> ground. Global share of <span className="acc-span">renewables and nuclear</span> in the mix is <span className="acc-span">evolving at a steady pace</span></AccordionTrigger>
                  <AccordionContent>
                    More the <span className="acc-span">increase</span> in primary energy consumption, the <span className="acc-span">more prosperous</span> the world becomes.
                    <br /><br />
                    Governments are realizing the <span className="acc-span">grave mistake</span> of slowing or shutting down Nuclear reactors and are rushing to rectify their mistake by <span className="acc-span">increasing its capacity</span>.
                  </AccordionContent>
                </AccordionItem>
               </Accordion>

                <InViewFade initialDelay={600}>
                  <div className='md:flex gap-5 my-10'>
                    <EnergyChange data={data.mix} country={country} className={'flex-1'}/>
                    <Energy3Share data={data.mix} country={country} className={'flex-1 mt-5 md:mt-0'}/>
                  </div>
                </InViewFade>

                <Accordion className="my-10" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="my-10" icon={false}><span className="acc-span">Clean energy</span> consumption is <span className="acc-span">rising</span> while fossil fuels remain either <span className="acc-span">stagnant or falling.</span></AccordionTrigger>
                  </AccordionItem>
                </Accordion>

                <InViewFade initialDelay={600} className='md:flex gap-5 mt-10'>
                  <RenewableShare data={data.mix} country={country} className={'flex-1'}/>
                  <FossilShare data={data.mix} country={country} className={'flex-1 mt-5 md:mt-0'}/>
                </InViewFade>
          </TabsContent>

          <TabsContent value="capacity">
                <Accordion className="my-10" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Capacity installations of <span className="acc-span">solar and wind</span> are through the moon and <span className="acc-span">accelerating</span> further</AccordionTrigger>
                    <AccordionContent>
                    Countries like <span className="acc-span">China lead</span> the world in having the largest <span className="acc-span">solar and wind</span> capacity. While the <span className="acc-span">United States</span> leads in <span className="acc-span">nuclear</span> capacity.
                    <br /><br />
                    The Projected 2030 clean energy capacity is <span className="acc-span">six times</span> the current levels and becoming <span className="acc-span">more plausible</span> everyday.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <InViewFade initialDelay={600}>
                  <div className='md:flex gap-2 my-10'>
                    <EnergyCapacities data={data.capacity} country={country} className={'flex-1'}/>
                    <EnergyCapacityAdditions data={data.capacity} country={country} className={'flex-1 mt-5 md:mt-0'}/>
                  </div>
                </InViewFade>

                <Accordion className="my-10" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger icon={false}>Asia leads the world in <span className="acc-span">solar capacity additions</span> at a 46% year-on-year growth. While Europe grew their solar additions by <span className="acc-span">9% every year</span> for the last 5 years.</AccordionTrigger>
                  </AccordionItem>
                </Accordion>
          </TabsContent>
        
          <TabsContent value="economics">
                <Accordion className="my-10" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>There is <span className="acc-span">no energy rich poor country.</span> The <span className="acc-span">more energy</span> a country consumes the more <span className="acc-span">prosperous it's citezens are</span></AccordionTrigger>
                    <AccordionContent>
                      Countries like <span className="acc-span">France</span> have subsequently grew their <span className="acc-span">nuclear capacity,</span> grew their <span className="acc-span">economy</span> and <span className="acc-span">reduced carbom emissions.</span>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <InViewFade initialDelay={600}>
                  <div className='md:flex gap-2 my-10'>            
                    <EnergyGDP className={'flex-1'}/>
                    <EnergyGDPPC data={data.mix} country={country} className={'flex-1 mt-5 md:mt-0'}/>
                  </div>  
                </InViewFade>
                
                <InViewFade initialDelay={600} className='md:flex gap-2 my-10'>
                  <EnergyUse data={data.mix} country={country} className={'flex-1'}/>
                  <AvgHouse className={'flex-1 mt-5 md:mt-0'}/>
                </InViewFade>
          </TabsContent>
          
          <TabsContent value="leaderboards">
                <Accordion className="my-10" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Find out the countries that are doing it right and the ones that have more work to do</AccordionTrigger>
                    <AccordionContent>
                    <span className="acc-span">Iceland, Norway and Luxembourg</span> lead the world in renewables % in their electricity mix. With the former two having the <span className="acc-span">largest energy consumption per capita</span> in the world due to their extreme weather and smaller populations.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <InViewFade initialDelay={600} className='my-10'><EnergyLeaderBoard data={data}/></InViewFade>
          </TabsContent>

          <TabsList>
            <InViewFade initialDelay={600} className='flex-1 overflow-auto h-[80px] md:h-[calc(100%-118px)]'>
              <h1 className='tag mt-2'><div className='tag-box' />SUB-TOPICS</h1>
              <TabsTrigger value="mix" className='mt-5'><div className='font-mono'>01</div> Energy Mix</TabsTrigger>
              <TabsTrigger value="capacity"><div className='font-mono'>02</div> Capacity</TabsTrigger>
              <TabsTrigger value="economics"><div className='font-mono'>03</div> Economics</TabsTrigger>
              <TabsTrigger value="leaderboards"><div className='font-mono'>04</div> Leaderboards</TabsTrigger>
            </InViewFade>
            <InViewFade initialDelay={600}><Combobox values={data.countries} value={country} setValue={setCountry}/></InViewFade>        
            <div className='frame-button'>Next</div>
          </TabsList>
        
        </Tabs>     
    </div>
  )
}