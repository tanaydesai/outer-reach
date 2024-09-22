"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import { motion } from 'framer-motion';
import { Area, AreaChart,Line, LineChart,  Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent} from "@/components/ui/chart"
import { Tabs,TabsContent,TabsList,TabsTrigger,} from "@/components/ui/tabs"
import { SunMediumIcon, AtomIcon, FanIcon, DamIcon, FuelIcon } from 'lucide-react';


export const EnergyShare = ({className}) => {
    const chartData = [
      { year: 2000, desktop: 186, mobile: 80 },
      { year: 2001, desktop: 305, mobile: 200 },
      { year: 2002, desktop: 237, mobile: 120 },
      { year: 2003, desktop: 73, mobile: 190 },
      { year: 2023, desktop: 209, mobile: 130 },
      { year: 2024, desktop: 214, mobile: 140 },
    ]
    
    const chartConfig = {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
      mobile: {
        label: "Mobile",
        color: "hsl(var(--chart-2))",
      },
    }

  return (
      <ChartContainer config={chartConfig} className={className}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 5,
              right: 5,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={3}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={5}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="black"
              strokeWidth={2}
            />
            <Line
              dataKey="desktop"
              type="monotone"
              strokeWidth={2}
              stroke="black"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
        </ChartContainer>
  )
}

export const PercentChange = ({className}) => {
  const chartData = [
    { month: "January", desktop: 2 },
    { month: "February", desktop: 5 },
    { month: "March", desktop: 30 },
    { month: "April", desktop: 15 },
    { month: "May", desktop: -5 },
    { month: "June", desktop: -0.5 },
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } 

  return (
    <ChartContainer config={chartConfig} className={className}>
    <BarChart accessibilityLayer data={chartData} margin={{
              bottom: 0,
              top: 0,
            }}>
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel />}
      />
      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
    </BarChart>
    </ChartContainer>
  )
}


export const Capacity = ({className}) => {
  
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 25, mobile: 200 },
    { month: "March", desktop: 27, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 10 },
    { month: "June", desktop: 24, mobile: 140 },
  ]

  const chartConfig = {
    running: {
      label: "Running",
      color: "hsl(var(--chart-1))",
    },
    swimming: {
      label: "Swimming",
      color: "hsl(var(--chart-2))",
    },
  } 

  return (
        <ChartContainer config={chartConfig} className={className}>
           <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -20,
            }}
          >
            <XAxis type="number" dataKey="desktop" hide />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" stackId="a" fill="var(--color-desktop)" radius={[5, 0, 0, 5]}  />
            <Bar dataKey="mobile" stackId="a" fill="var(--color-swimming)" radius={[0, 5, 5, 0]}  />
          </BarChart>
        </ChartContainer>
  )
}