"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import { motion } from 'framer-motion';
import { Area, AreaChart,Line, LineChart,  Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent} from "@/components/ui/chart"
import { Tabs,TabsContent,TabsList,TabsTrigger,} from "@/components/ui/tabs"
import { SunMediumIcon, AtomIcon, FanIcon, DamIcon, FuelIcon } from 'lucide-react';


export const EnergyData = ({children}) => {
  let tabs = [
    { id: "world", label: "Consumption" },
    { id: "business", label: "Production" },
  ];

  let [activeTab, setActiveTab] = useState(tabs[0].id);
  
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className='w-full md:w-[400px] min-h-[70%] md:right-2 h-fit md:bottom-2 rounded-t-[25px] md:rounded-[15px] bg-[#030202] text-white pb-3'> 
          {/* <DrawerTitle className="font-rajdhani-regular text-left flex gap-2 items-center text-[24px] px-4 py-3"><SunMediumIcon /> Energy Mix</DrawerTitle> */}
          <Tabs defaultValue="solar">
            <TabsList className="px-5 mt-3 relative w-full overflow-auto">
              <TabsTrigger value="solar"><SunMediumIcon size={16} /> Solar</TabsTrigger>
              <TabsTrigger value="wind"><FanIcon size={16} /> Wind</TabsTrigger>
              <TabsTrigger value="hydro"><DamIcon size={16} /> Hydro</TabsTrigger>
              <TabsTrigger value="nuclear"><AtomIcon size={16} /> Nuclear</TabsTrigger>
              <TabsTrigger value="nr"><FuelIcon size={16} /> Non-renewables</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="my-5 mx-auto w-fit rounded-[8px] bg-[#d6d6d6] py-1 px-1.5 flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id ? "" : "hover:text-[#686868]"
                } relative flex-1/2 rounded-[6px] px-2 py-1 text-[9px] font-semibold font-planer-m uppercase text-black transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-[#424343] mix-blend-difference"
                    style={{ borderRadius: "6px" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
          <Mix className="w-full h-[300px] mt-5"/>
      </DrawerContent>
    </Drawer>
  );
}

const MixchartData = [
  { month: "January", desktop: 186, mobile: 80, app: 100 },
  { month: "February", desktop: 305, mobile: 200, app: 200 },
  { month: "March", desktop: 237, mobile: 120, app: 90 },
  { month: "April", desktop: 73, mobile: 190, app: 160 },
  { month: "May", desktop: 209, mobile: 130, app: 210 },
  { month: "June", desktop: 214, mobile: 140, app: 250 },
]

const MixchartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
  app: {
    label: "App",
    color: "hsl(var(--chart-3))",
  },
} 

export const Mix = ({className}) =>{
  return (
        <ChartContainer config={MixchartConfig} className={className}>
          <LineChart accessibilityLayer data={MixchartData} margin={{right:0, left:0}}>
          <XAxis dataKey="month" tickLine={false} />
          {/* <ChartLegend content={<ChartLegendContent />} /> */}
            <ChartTooltip
              cursor={false}
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Average
                        </span>
                        <span className="font-bold text-muted-foreground">
                          {payload[0].value}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">
                          Today
                        </span>
                        <span className="font-bold">
                          {payload[1].value}
                        </span>
                      </div>
                    </div>
                  </div>
                  )
                }
              }}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              strokeWidth={2}
              activeDot={{
                r: 6,
                style: { fill: "#fffffff", opacity: 0.25 },
              }}
              stroke="blue"
            />
            <Line
              dataKey="desktop"
              type="monotone"
              strokeWidth={2}
              activeDot={{
                r: 6,
                style: { fill: "#fffffff", opacity: 0.25 },
              }}
              stroke="turquoise"
              opacity={0.5}
            />
            <Line
              dataKey="app"
              type="monotone"
              strokeWidth={2}
              activeDot={{
                r: 6,
                style: { fill: "#fffffff", opacity: 0.25 },
              }}
              stroke="teal"
              opacity={0.25}
            />
          </LineChart>
        </ChartContainer>
  )
}

const BarchartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const BarchartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} 

export const BarBoi = ({className}) => {
  return (
        <ChartContainer config={BarchartConfig} className={className}>
         <BarChart accessibilityLayer data={BarchartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} spacing={0} />
          </BarChart>
        </ChartContainer>
  )
}
