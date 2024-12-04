"use client"
import React, { useRef,useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
import { Combobox } from '@/components/ui/combobox';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import useSWR from 'swr'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  
  const { data, error, isLoading } = useSWR('/api/energy',fetcher)
  const [tab, setTab] = useState('mix');
  const [country, setCountry] = useState('World');

  if (error) return <div className='third-page'>Error</div>
  if (isLoading) return <div className='third-page'>Loading...</div>

  return (
    <div className="main pb-0">

        <div className='main-body overflow-x-hidden'>
          <Tabs defaultValue="mix" onValueChange={setTab} value={tab}>
            <div className='flex gap-2 justify-start items-center'>
              <TabsList>
                <TabsTrigger value="mix"><div data-value={tab} className="data-[value=mix]:inline-flex hidden tag-box mr-1"/> Energy Mix</TabsTrigger>
                <TabsTrigger value="capacity"><div data-value={tab} className="data-[value=capacity]:inline-flex hidden tag-box mr-1"/> Capacity</TabsTrigger>
                <TabsTrigger value="economics"><div data-value={tab} className="data-[value=economics]:inline-flex hidden tag-box mr-1"/> Economics</TabsTrigger>
                <TabsTrigger value="leaderboard"><div data-value={tab} className="data-[value=leaderboard]:inline-flex hidden tag-box mr-1"/> Leaderboards</TabsTrigger>
              </TabsList>
              <Combobox values={data.countries} value={country} setValue={setCountry}/>
            </div>
            <TabsContent value="mix">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                    <AccordionContent>
                      The world already gets almost <span className="acc-span">40% of its electricity </span> from <span className="acc-span">clean energy sources</span> while adopting even more at a <span className="acc-span">rapid pace</span> with <span className="acc-span">nuclear energy</span> making a big comeback.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <EnergyMix data={data.mix} country={country} className={'mt-10'}/>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="mt-7">Countries like India and is increasing its energy consumption rapidly. While the UK is <span className="acc-span">losing</span> ground. Global share of <span className="acc-span">renewables and nuclear</span> in the mix is <span className="acc-span">evolving at a steady pace</span></AccordionTrigger>
                    <AccordionContent>
                      More the <span className="acc-span">increase</span> in primary energy consumption, the <span className="acc-span">more prosperous</span> the world becomes.
                      <br /><br />
                      Governments are realizing the <span className="acc-span">grave mistake</span> of slowing or shutting down Nuclear reactors and are rushing to rectify their mistake by <span className="acc-span">increasing its capacity</span>.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className='md:flex gap-2 mt-5'>
                  <EnergyChange data={data.mix} country={country} className={'flex-1'}/>
                  <Energy3Share data={data.mix} country={country} className={'flex-1 mt-5 md:mt-0'}/>
                </div>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger icon={false}><span className="acc-span">Clean energy</span> consumption is <span className="acc-span">rising</span> while fossil fuels remain either <span className="acc-span">stagnant or falling.</span></AccordionTrigger>
                  </AccordionItem>
                </Accordion>

                <div className='md:flex gap-2 mt-5'>
                  <RenewableShare data={data.mix} country={country} className={'flex-1'}/>
                  <FossilShare data={data.mix} country={country} className={'flex-1 mt-5 md:mt-0'}/>
                </div>
            </TabsContent>
            <TabsContent value="capacity">  
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Capacity installations of <span className="acc-span">solar and wind</span> are through the moon and <span className="acc-span">accelerating</span> further</AccordionTrigger>
                    <AccordionContent>
                    Countries like <span className="acc-span">China lead</span> the world in having the largest <span className="acc-span">solar and wind</span> capacity. While the <span className="acc-span">United States</span> leads in <span className="acc-span">nuclear</span> capacity.
                    <br /><br />
                    The Projected 2030 clean energy capacity is <span className="acc-span">six times</span> the current levels and becoming <span className="acc-span">more plausible</span> everyday.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className='md:flex gap-2 mt-10'>
                  <EnergyCapacities data={data.capacity} country={country} className={'flex-1'}/>
                  <EnergyCapacityAdditions data={data.capacity} country={country} className={'flex-1 mt-5 md:mt-0'}/>
                </div>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger icon={false}>Asia leads the world in <span className="acc-span">solar capacity additions</span> at a 46% year-on-year growth. While Europe grew their solar additions by <span className="acc-span">9% every year</span> for the last 5 years.</AccordionTrigger>
                  </AccordionItem>
                </Accordion>
            </TabsContent>
            <TabsContent value="economics">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>There is <span className="acc-span">no energy rich poor country.</span> The <span className="acc-span">more energy</span> a country consumes the more <span className="acc-span">prosperous it's citezens are</span></AccordionTrigger>
                    <AccordionContent>
                      Countries like <span className="acc-span">France</span> have subsequently grew their <span className="acc-span">nuclear capacity,</span> grew their <span className="acc-span">economy</span> and <span className="acc-span">reduced carbom emissions.</span>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <div className='md:flex gap-2 mt-10'>            
                  <EnergyGDP className={'flex-1'}/>
                  <EnergyGDPPC data={data.mix} country={country} className={'flex-1 mt-5 md:mt-0'}/>
                </div>  
                
                <div className='md:flex gap-2 mt-5'>
                    <EnergyUse data={data.mix} country={country} className={'flex-1'}/>
                    <AvgHouse className={'flex-1 mt-5 md:mt-0'}/>
                </div>
            </TabsContent>
            <TabsContent value="leaderboard">      
              <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Find out the countries that are doing it right and the ones that have more work to do</AccordionTrigger>
                    <AccordionContent>
                    <span className="acc-span">Iceland, Norway and Luxembourg</span> lead the world in renewables % in their electricity mix. With the former two having the <span className="acc-span">largest energy consumption per capita</span> in the world due to their extreme weather and smaller populations.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <EnergyLeaderBoard data={data} className={'mt-10'}/>
            </TabsContent>
          </Tabs>
        </div>

    </div>
  )
}