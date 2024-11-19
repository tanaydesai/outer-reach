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
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue, } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CornerDownRight, Earth } from 'lucide-react';
import useSWR from 'swr'
import { ComboboxDemo } from '@/components/ui/combobox';

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
            {/* <Select onValueChange={setCountry}>
              <SelectTrigger>
                  <SelectValue placeholder={<Earth size={22} />}/>
              </SelectTrigger>
              <SelectContent>
                {data.countries.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select> */}
            <ComboboxDemo values={data.countries} value={country} setValue={setCountry}/>
            </div>
            <TabsContent value="mix">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>The world's energy mix is rapidly adopting <span className="acc-span">clean energy</span> with <span className="acc-span">nuclear energy</span> making a big comeback</AccordionTrigger>
                    <AccordionContent>
                      Countries like <span className="acc-span">Norway, France and Denmark</span> get {">"}80% of their energy from <span className="acc-span">renewables, nuclear and wind</span> respectively.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <EnergyMix data={data.mix} country={country} className={'mt-10'}/>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="mt-7">What's the progress of Renewables and Nuclear energy?</AccordionTrigger>
                    <AccordionContent>
                      Installations <span className="acc-span">increasingly Renewable and Nuclear energy</span> which is <span className="acc-span">speeding up</span>.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className='md:flex gap-2 mt-5'>
                  <EnergyChange data={data.mix} country={country} className={'flex-1'}/>
                  <Energy3Share data={data.mix} country={country} className={'flex-1 mt-5 md:mt-0'}/>
                </div>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger><span className="acc-span">Clean energy</span> consumption is <span className="acc-span">rising</span> while fossil fuels remain either <span className="acc-span">stagnant or falling.</span></AccordionTrigger>
                    <AccordionContent>
                      Countries like <span className="acc-span">Norway, France and Denmark</span> get {">"}80% of their energy from <span className="acc-span">renewables, nuclear and wind</span> respectively.
                    </AccordionContent>
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
                    <AccordionTrigger>Capacity installations of <span className="acc-span">solar and wind</span> are through the moon and <span className="acc-span">accelerating</span> while countries race to get <span className="acc-span">more nuclear online</span>.</AccordionTrigger>
                    <AccordionContent>
                      While solar and wind energy's benifits are <span className="acc-span">well understood,</span> it required <span className="acc-span">an AI arms race</span> for the world's eyes to open for <span className="acc-span">nuclear energy</span> again.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className='md:flex gap-2 mt-10'>
                  <EnergyCapacities data={data.capacity} country={country} className={'flex-1'}/>
                  <EnergyCapacityAdditions data={data.capacity} country={country} className={'flex-1 mt-5 md:mt-0'}/>
                </div>
            </TabsContent>
            <TabsContent value="economics">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>There is <span className="acc-span">no energy rich poor country.</span> The <span className="acc-span">more energy</span> a country consumes the more <span className="acc-span">prosperous it's citezens are.</span></AccordionTrigger>
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
                    <AccordionTrigger>Pin the countries together. Find out the ones that are doing it right and the ones that have more work to do.</AccordionTrigger>
                    <AccordionContent>
                      Countries like <span className="acc-span">Norway, France and Denmark</span> get {">"}80% of their energy from <span className="acc-span">renewables, nuclear and wind</span> respectively.
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