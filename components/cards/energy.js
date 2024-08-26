"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import { motion } from 'framer-motion';
import { Area, AreaChart,Line, LineChart,  Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent} from "@/components/ui/chart"


export const EnergyData = ({children}) => {
  return (
    <Drawer>
    <DrawerTrigger>{children}</DrawerTrigger>
    <DrawerContent className='w-fit right-[calc(50%-200px)] min-h-[400px] md:right-2 h-fit bottom-2 rounded-[5px] bg-[#231a0f] text-white pb-3'> 
        <DrawerTitle className="font-planer-m text-left text-[24px] p-5 uppercase">Solar</DrawerTitle>
        <Mix className="w-[400px] h-[250px]"/>
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
          <XAxis dataKey="month"  tickLine={false} tickMargin={10} axisLine={false} />
          <ChartLegend content={<ChartLegendContent />} />
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
