"use client"
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Combobox } from '@/components/ui/combobox'
import useSWR from 'swr'

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  
  // const { data, error, isLoading } = useSWR('/api/energy', fetcher)
  const [tab, setTab] = useState('launches');

  // if (error) return <div className='third-page'>Error</div>
  // if (isLoading) return <div className='third-page'>Loading data...</div>

  return (
    <div className="main pb-0">
      <div className='main-body overflow-x-hidden'>
        <Tabs defaultValue="launches" onValueChange={setTab} value={tab}>
          <div className='flex gap-2 justify-start items-center'>
            <TabsList>
              <TabsTrigger value="launches"><div data-value={tab} className="data-[value=launches]:inline-flex hidden tag-box mr-1"/> Launches</TabsTrigger>
              <TabsTrigger value="providers"><div data-value={tab} className="data-[value=providers]:inline-flex hidden tag-box mr-1"/> Providers</TabsTrigger>
              <TabsTrigger value="sats"><div data-value={tab} className="data-[value=sats]:inline-flex hidden tag-box mr-1"/> Satellites</TabsTrigger>
              <TabsTrigger value="mars"><div data-value={tab} className="data-[value=mars]:inline-flex hidden tag-box mr-1"/>Mars</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>
    </div>
  )
}