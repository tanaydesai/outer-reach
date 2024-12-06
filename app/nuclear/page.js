"use client"
import React, { useState } from 'react';
import { NuclearMix } from '@/components/energy-cards/nuclear-mix';
import { NuclearCapacities } from '@/components/energy-cards/nuclear-capacity';
import { NuclearReactors } from '@/components/energy-cards/nuclear-units';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "@/components/ui/accordion"
import { Combobox } from '@/components/ui/combobox'
import useSWR from 'swr'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  
  const { data, error, isLoading } = useSWR('/api/energy', fetcher)
  const [tab, setTab] = useState('gen');
  const [country, setCountry] = useState('World');

  if (error) return <div className='third-page'>Error</div>
  if (isLoading) return <div className='third-page'>Loading data...</div>

  return (
    <div className="main pb-0">
      <div className='main-body overflow-x-hidden'>
        <Tabs defaultValue="gen" onValueChange={setTab} value={tab}>
          <div className='flex gap-2 justify-start items-center'>
            <TabsList>
              <TabsTrigger value="gen"><div data-value={tab} className="data-[value=gen]:inline-flex hidden tag-box mr-1"/> Generation</TabsTrigger>
              <TabsTrigger value="capacity"><div data-value={tab} className="data-[value=capacity]:inline-flex hidden tag-box mr-1"/> Capacity</TabsTrigger>
              <TabsTrigger value="safety"><div data-value={tab} className="data-[value=safety]:inline-flex hidden tag-box mr-1"/> Safety</TabsTrigger>
              <TabsTrigger value="waste"><div data-value={tab} className="data-[value=waste]:inline-flex hidden tag-box mr-1"/> Waste</TabsTrigger>
            </TabsList>
            <Combobox values={data.countries} value={country} setValue={setCountry}/>
          </div>
          <TabsContent value="gen">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                    <AccordionContent>
                      The world already gets almost <span className="acc-span">40% of its electricity </span> from <span className="acc-span">clean energy sources</span> while adopting even more at a <span className="acc-span">rapid pace</span> with <span className="acc-span">nuclear energy</span> making a big comeback.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                <NuclearMix data={data.mix} country={country} className={'mt-10'}/>
          </TabsContent>
          <TabsContent value="capacity">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                  </AccordionItem>
                </Accordion>

                  <NuclearCapacities data={data.capacity} country={country} className={'mt-10'}/>
                  
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Countries like <span className="acc-span">Norway, France and Iceland</span> get {">"} 90% of their electricity from <span className="acc-span">Renewables and Nuclear</span></AccordionTrigger>
                    </AccordionItem>
                  </Accordion>

                  <NuclearReactors data={data.nuclearReactors} data2={data.nuclearYear} country={country} className={'mt-5'}/>
            </TabsContent>
          <TabsContent value="safety"><div className='third-page'>Safety</div></TabsContent>
          <TabsContent value="waste"><div className='third-page'>Waste</div></TabsContent>
        </Tabs>
      </div>
    </div>
  )
}