"use client"
import React, { useRef,useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Combobox } from '@/components/ui/combobox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import { TextRevealWipe } from '@/components/swipe';
import { InViewFade } from '@/components/fade'
import { Card } from '@/components/card';
import useSWR from 'swr'

import { EnergyLeaderBoard } from '@/components/energy-cards/energy-leaderboard';
import { EnergyMix } from '@/components/energy-cards/energy-mix';
import { EnergyChange } from '@/components/energy-cards/annual-energy-change';
import { Energy3Share } from '@/components/energy-cards/energy3-share';
import { EnergyCapacities } from '@/components/energy-cards/energy-capacity';
import { EnergyCapacityAdditions } from '@/components/energy-cards/capacity-additions';
import { EnergyUse } from '@/components/energy-cards/annual-energy-pc';
import { RenewableShare } from '@/components/energy-cards/renewable-share';
import { FossilShare } from '@/components/energy-cards/fossils-share';
import { EnergyGDPPC } from '@/components/energy-cards/energy-gdp-pc';
import pic from '@/assests/images/c.png'

export default function Home() {
  const router = useRouter()
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
              <Card img={pic} />
              <InViewFade delay={500} className='absolute bottom-4 pr-3'>
                <TextRevealWipe className='title'>Road to Energy</TextRevealWipe>
                <TextRevealWipe delay={1.2} className='title'>Abundance</TextRevealWipe>
                <div className='description'>Global energy mix, renewables and installed capacity growth, country leaderboards, per capita and more.</div>
              </InViewFade>
          </TabsContent>

          <TabsContent value="mix">
                <Accordion className='my-10' type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland get {">"} 90%</span> of their electricity from <span className="acc-span">Renewables and Nuclear</span>, strengthening their <span className="acc-span">energy security</span>, lowering their <span className="acc-span">carbon emissions</span> and growing their <span className="acc-span">economies</span></AccordionTrigger>
                    <AccordionContent>
                      While the world already gets almost <span className="acc-span">40% of its electricity </span> from <span className="acc-span">clean energy sources</span>, it is racing to get more capacity online especially <span className="acc-span">Nuclear</span> given it's reliability and energy output to power major <span className="acc-span">power hungry developing nations</span> and industries particularly in <span className="acc-span">artificial intelligence and data centers</span>.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
               <InViewFade initialDelay={600} className='my-10'><EnergyMix data={data.mix} country={country}/></InViewFade>
               
               <Accordion className="my-10" type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>The more energy a nation consumes, the <span className="acc-span">more prosperous</span> it becomes. Countries like <span className="acc-span">India</span> are increasing their energy consumption rapidly  while some like <span className="acc-span">the UK</span> are <span className="acc-span">losing</span> ground. Global share of <span className="acc-span">renewables and nuclear</span> in the mix is <span className="acc-span">continues to rise at an evolving pace</span></AccordionTrigger>
                  <AccordionContent>
                   France is one of the few developed countries that has realised the <span className="acc-span">full potential of nuclear energy</span>. While the fateful decision of <span className="acc-span">Germany</span>-a country already heavily reliant on <span className="acc-span">energy imports</span>-<span className="acc-span">to phase out its</span> nuclear reactors after caving into <span className="acc-span">anti-nuclear sentiment</span> amoung <span className="acc-span">misinformed</span> environmentalists is only just being realised as a <span className="acc-span">grave mistake</span> amid the <span className="acc-span">2022 Russia-Ukraine war</span>, rising <span className="acc-span">fossil fuel emissions</span> and <span className="acc-span">economic instability</span>.
                  </AccordionContent>
                </AccordionItem>
               </Accordion>

                <InViewFade initialDelay={600}>
                  <div className='md:flex gap-5 my-10'>
                    <EnergyChange data={data.mix} country={country} className={'flex-1'}/>
                    <Energy3Share data={data.mix} country={country} className={'flex-1 mt-10 md:mt-0'}/>
                  </div>
                </InViewFade>

                <Accordion className="my-10" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="my-10" icon={false}><span className="acc-span">Clean energy</span> consumption is <span className="acc-span">rising</span> while fossil fuels remain either <span className="acc-span">stagnant or falling.</span></AccordionTrigger>
                  </AccordionItem>
                </Accordion>

                <InViewFade initialDelay={600} className='md:flex gap-5 mt-10'>
                  <RenewableShare data={data.mix} country={country} className={'flex-1'}/>
                  <FossilShare data={data.mix} country={country} className={'flex-1 mt-10 md:mt-0'}/>
                </InViewFade>
          </TabsContent>

          <TabsContent value="capacity">
                <Accordion className="my-10" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Capacity additions of <span className="acc-span">solar and wind</span> are through the moon and <span className="acc-span">accelerating</span> further. The projected 2030 clean energy capacity is <span className="acc-span">six times</span> the current levels and becoming <span className="acc-span">more plausible</span> everyday</AccordionTrigger>
                    <AccordionContent>
                    Countries like <span className="acc-span">China lead</span> the world in <span className="acc-span">solar and wind</span> capacity and upcoming nuclear installations. While the <span className="acc-span">United States</span> leads in <span className="acc-span">nuclear</span> capacity.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <InViewFade initialDelay={600}>
                  <div className='md:flex gap-2 my-10'>
                    <EnergyCapacities data={data.capacity} country={country} className={'flex-1'}/>
                    <EnergyCapacityAdditions data={data.capacity} country={country} className={'flex-1 mt-10 md:mt-0'}/>
                  </div>
                </InViewFade>

                <Accordion className="my-10" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger icon={false}>Asia leads the world in <span className="acc-span">solar capacity additions</span> roughly at a growth of 46% year-on-year in the last 5 years. While Europe grew its solar additions by <span className="acc-span">9% every year</span> for the last 5 years.</AccordionTrigger>
                  </AccordionItem>
                </Accordion>
          </TabsContent>
        
          <TabsContent value="economics">
                <Accordion className="my-10" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>There is <span className="acc-span">no energy rich poor country.</span> Nations like Norway, Qatar, and the U.S. have leveraged energy abundance into becoming economic powerhouses</AccordionTrigger>
                    <AccordionContent>
                      The <span className='acc-span'>direct corelation</span> between energy consumption and prosperity can perfectly be seen in developing economies like <span className="acc-span">India and Indonesia</span> where the <span className="acc-span">rise in energy consumption</span> has resulted in an <span className="acc-span">simultaneous increase in GDP per capita </span> in the past decade.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <InViewFade initialDelay={600} className='my-10'><EnergyGDPPC data={data.mix} country={country} /></InViewFade>
                
                <InViewFade initialDelay={600} className='my-10'><EnergyUse data={data.mix} country={country} /></InViewFade>
          </TabsContent>
          
          <TabsContent value="leaderboards" className="overflow-none">
                <Accordion className="my-10" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger><span className="acc-span">Iceland, Norway and Luxembourg</span> lead the world in share of <span className="acc-span">renewables</span> in the electricity mix. With the former two having the <span className="acc-span">largest energy consumption per capitas</span> in the world</AccordionTrigger>
                    <AccordionContent>
                      Where as <span className="acc-span">France and Denmark</span> have the highest <span className="acc-span">share of nuclear and wind energy</span> in their electricity mix, respectively. <span className='acc-span'>Norway</span> is the global leader in <span className="acc-span">hydro power</span> with a share of 65% of the energy mix.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <InViewFade initialDelay={600} className='my-10'><EnergyLeaderBoard data={data}/></InViewFade>
          </TabsContent>

          <TabsList>
            <InViewFade initialDelay={600} className='flex-1 overflow-auto h-[80px] md:h-[calc(100%-118px)]'>
              <h1 className='tag mt-2' onClick={() => setTab('home')}><div className='tag-box' />SUB-TOPICS</h1>
              <TabsTrigger value="mix" className='mt-5'><div className='font-mono'>01</div> Energy Mix</TabsTrigger>
              <TabsTrigger value="capacity"><div className='font-mono'>02</div> Capacity</TabsTrigger>
              <TabsTrigger value="economics"><div className='font-mono'>03</div> Economics</TabsTrigger>
              <TabsTrigger value="leaderboards"><div className='font-mono'>04</div> Leaderboards</TabsTrigger>
            </InViewFade>
            <InViewFade initialDelay={600}><Combobox values={data.countries} value={country} setValue={setCountry}/></InViewFade>        
            <div className='frame-button' onClick={() => tab === "leaderboards" ? router.push('/nuclear') : setTab(["mix", "capacity", "economics", "leaderboards"][["mix", "capacity", "economics", "leaderboards"].indexOf(tab) + 1])}>Next</div>
          </TabsList>
        
        </Tabs>     
    </div>
  )
}