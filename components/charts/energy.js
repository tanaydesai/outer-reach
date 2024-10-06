"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Drawer,DrawerClose,DrawerContent,DrawerDescription,DrawerFooter,DrawerHeader,DrawerTitle,DrawerTrigger,} from "@/components/ui/drawer"
import { motion } from 'framer-motion';
import { Area, AreaChart,Line, LineChart,  Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList } from "recharts"
import { ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent} from "@/components/ui/chart"
import { Tabs,TabsContent,TabsList,TabsTrigger,} from "@/components/ui/tabs"
import { SunMediumIcon, AtomIcon, FanIcon, DamIcon, FuelIcon } from 'lucide-react';
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {ComposableMap,Geographies,Geography,Sphere,Graticule} from "react-simple-maps";

export const MapChart = ({className}) => {
  const [data, setData] = useState([]);
  const geoUrl = "/map/features.json";

    const colorScale = scaleLinear()
      .domain([0.29, 0.68])
      .range(["#ffedea", "#ff5233"]);


  useEffect(() => {
    csv(`/map/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
   <div className={className}>
     <ComposableMap
      projectionConfig={{
        rotate: [0, 0, 0],
        scale: 230
      }}
      className='w-full h-full'
    >
      {/* <Sphere stroke="#E4E5E6" strokeWidth={0.5} /> */}
      {/* <Graticule stroke="#E4E5E6" strokeWidth={0.5} /> */}
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const d = data.find((s) => s.ISO3 === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["2017"]) : "#F5F4F6"}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
   </div>
  );
};


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
              left: 0,
              right: 5,
            }}
          >
            <ChartLegend content={<ChartLegendContent />} />
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
              className='bg-red-300'
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
          </LineChart>
        </ChartContainer>
  )
}

export const LeaderBoards = ({className}) => {
  const chartData = [
   {month:"United States", desktop: 95},
   {month:"United Kingdom", desktop: 80},
   {month:"Germany", desktop: 75},
   {month:"France", desktop: 65},
   {month:"Japan", desktop: 60},
   {month:"China", desktop: 55},
   {month:"India", desktop: 50},
   {month:"Brazil", desktop: 45},
   {month:"Australia", desktop: 40},
   {month:"Canada", desktop: 35},
   {month:"South Korea", desktop: 30},
   {month:"Russia", desktop: 25},
   {month:"Mexico", desktop: 20},
   {month:"Saudi Arabia", desktop: 15},
   {month:"Turkey", desktop: 10},
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "green",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
    label: {
      color: "hsl(var(--background))",
    },
  } 

  return (
        <ChartContainer config={chartConfig} className={className}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
              right: 5,
            }}
          >
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="desktop" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="desktop"
              layout="vertical"
              fill="#2eec7d"
              radius={7}
              barSize={35}
            >
              <LabelList
                dataKey="month"
                position="insideLeft" 
                offset={8}
                className="fill-[--color-label]"
                fontSize={11}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={8}
                className="fill-[#ffffff]"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
  )
}


export const PercentChange = ({className}) => {
  const chartData = [
    { month: "Solar", desktop: 2 },
    { month: "Wind", desktop: 5 },
    { month: "Nuclear", desktop: 30 },
    { month: "Hydro", desktop: 15 },
    { month: "Coal", desktop: -5 },
    { month: "Gas", desktop: -0.5 },
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
      <XAxis dataKey="month"  axisLine={false} type="category" tickLine={false} />
      <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} >
        <LabelList
          position="top"
          offset={6}
          fontSize={12}
            /></Bar>
    </BarChart>
    </ChartContainer>
  )
}


export const Capacity = ({className}) => {
  
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "January", desktop: 86, mobile: 40 },
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
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" stackId="a" fill="var(--color-desktop)" radius={[5, 0, 0, 5]}  />
            <Bar dataKey="mobile" stackId="a" fill="var(--color-swimming)" radius={[0, 5, 5, 0]}  />
          </BarChart>
        </ChartContainer>
  )
}


export const CO2GDP = ({className}) => {
  const chartData = [
    { year: 2000, gdp: 5, co2: -10 },
    { year: 2001, gdp: 20, co2: -10 },
    { year: 2002, gdp: 37, co2: -20 },
    { year: 2003, gdp: 103, co2: -50 },
    { year: 2023, gdp: 209, co2: -60 },
    { year: 2024, gdp: 514, co2: -100 },
  ]
  
  const chartConfig = {
    gdp: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    co2: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  }

return (
    <ChartContainer config={chartConfig} className={className}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 20,
            right:20,
          }}
        >
          {/* <CartesianGrid vertical={false} /> */}
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={3}
          />
          {/* <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickCount={5}
          /> */}
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Area
            dataKey="co2"
            type="monotone"
            stroke="white"
            fill='white'
            dot
            opacity={0.5}
            strokeWidth={2}
          >
            <LabelList
              position="bottom"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Area>
          <Area
            dataKey="gdp"
            type="monotone"
            stroke="white"
            fill='white'
            dot
            opacity={0.9}
            strokeWidth={2}
            >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Area>
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
)
}

export const AnnualHouse = ({className}) => {
    const chartData = [
      { month: "January", desktop: 3006 },
      { month: "February", desktop: 3205 },
      { month: "March", desktop: 3407 },
      { month: "April", desktop: 3803 },
      { month: "May", desktop: 4200 },
      { month: "June", desktop: 4699 },
    ]
    const chartConfig = {
      desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
      },
    }

  return (
        <ChartContainer config={chartConfig} className={className}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              dot={true}
              radius={2}
              stroke="var(--color-desktop)"
            >
              <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
            </Area>
          </AreaChart>
        </ChartContainer>
  )
}

export const ShareRenewables = ({className}) => {
  const chartData = [
    { month: "January", desktop: 30 },
    { month: "February", desktop: 35 },
    { month: "March", desktop: 37 },
    { month: "April", desktop: 40 },
    { month: "May", desktop: 42 },
    { month: "June", desktop: 45 },
  ]
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-2))",
    },
  }

return (
      <ChartContainer config={chartConfig} className={className}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0,
          }}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="line" />}
          />
          <Area
            dataKey="desktop"
            type="natural"
            fill="hsl(var(--chart-2))"
            fillOpacity={0.6}
            dot={true}
            radius={2}
            stroke="hsl(var(--chart-2))"
          >
            <LabelList
            position="top"
            offset={12}
            className="fill-foreground"
            fontSize={12}
          />
          </Area>
        </AreaChart>
      </ChartContainer>
)
}