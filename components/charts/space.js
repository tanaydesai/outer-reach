"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Area, AreaChart,Line, LineChart,  Bar, Sector, Pie, PieChart, BarChart, CartesianGrid, XAxis, YAxis, LabelList, Cell } from "recharts"
import { ChartConfig, ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent} from "@/components/ui/chart"
import { fill } from 'three/src/extras/TextureUtils'

export const SpaceLunchesCountry = ({className, data}) => {

    const chartData = data.reduce((acc, { Year, Country, Launches }) => {
        const existingYear = acc.find(item => item.Year === Year)
        if (existingYear) {
          existingYear[Country] = Launches
        } else {
          acc.push({ Year, [Country]: Launches })
        }
        return acc
      }, [])
    
    const countries = Array.from(new Set(data.map(item => item.Country)))
    
    const colors = ["#ef7020", "#1e4fa2", "#3aee7a", "#ec7ad7", "#fe4ad6"]

    const chartConfig = Object.fromEntries(
          countries.map((Country, index) => [
            Country,
            { label: Country, color: colors[index] }
          ])
        )
      
 
  return (
      <ChartContainer config={chartConfig} className={className}>
          <LineChart accessibilityLayer data={chartData}
             margin={{
               left: -20,
               right: 20
             }}
             >
             {/* <CartesianGrid vertical={false} /> */}
             <XAxis
               dataKey="Year"
               tickLine={false}
               tickMargin={10}
               axisLine={false}
             />
             <YAxis
               tickLine={false}
               tickMargin={10}
               axisLine={false}
             />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                {countries.map((Country, index) => (
                    <Line
                        key={Country}
                        type="monotone"
                        dot={false}
                        dataKey={Country}
                        stroke={colors[index]}
                        name={Country}
                        />
                    ))}
              <ChartLegend content={<ChartLegendContent className='w-[85%] text-[--primary-text] flex-wrap mx-auto' />} />
            </LineChart>
      </ChartContainer>
    )
  }

export const SpaceLunchesRocket = ({className, data}) => {

    const chartData = data.reduce((acc, { Year, Rocket, Launches }) => {
        const existingYear = acc.find(item => item.Year === Year)
        if (existingYear) {
          existingYear[Rocket] = Launches
        } else {
          acc.push({ Year, [Rocket]: Launches })
        }
        return acc
      }, [])
    
    const countries = ["Starship", "Falcon", "Vulcan", "Long March", "Firefly", "Electron", "Delta", "Ariane", "PSLV"]
    
    const colors = ["#ef7020", "#1e4fa2", "#3aee7a", "#ec7ad7", "#fe4ad6", "#a3a3a3", "--primary-text", "#b3acf2", "#e4e4e4", "#f2f2f2"]

    const chartConfig = Object.fromEntries(
          countries.map((Rocket, index) => [
            Rocket,
            { label: Rocket, color: colors[index] }
          ])
        )
      
 
  return (
      <ChartContainer config={chartConfig} className={className}>
          <LineChart accessibilityLayer data={chartData}
             margin={{
               left: -20,
               right: 20
             }}
             >
             {/* <CartesianGrid vertical={false} /> */}
             <XAxis
               dataKey="Year"
               tickLine={false}
               tickMargin={10}
               axisLine={false}
             />
             <YAxis
               tickLine={false}
               tickMargin={10}
               axisLine={false}
             />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                {countries.map((Rocket, index) => (
                    <Line
                        key={Rocket}
                        type="monotone"
                        dot={false}
                        dataKey={Rocket}
                        stroke={colors[index]}
                        name={Rocket}
                        />
                    ))}
              <ChartLegend content={<ChartLegendContent className='w-[85%] text-[--primary-text] flex-wrap mx-auto' />} />
            </LineChart>
      </ChartContainer>
    )
  }

  export const SpaceRockeCost = ({className, data}) => {

    const chartData = data.reduce((acc, { Year, Entity, cost_per_kg }) => {
        const existingYear = acc.find(item => item.Year === Year)
        if (existingYear) {
          existingYear[Entity] = cost_per_kg
        } else {
          acc.push({ Year, [Entity]: cost_per_kg })
        }
        return acc
      }, [])
    
    const countries = ["Starship", "Falcon 1", "Falcon 9", "Falcon Heavy", "Saturn V", "Long March 11", "Electron","GSLV", "PSLV"]
    
    const colors = ["#ef7020", "#1e4fa2", "#3aee7a", "#ec7ad7", "#fe4ad6", "#a3a3a3", "--primary-text", "#b3acf2", "#e4e4e4", "#f2f2f2"]

    const chartConfig = Object.fromEntries(
          countries.map((Entity, index) => [
            Entity,
            { label: Entity, color: colors[index] }
          ])
        )
      
 
  return (
      <ChartContainer config={chartConfig} className={className}>
          <LineChart accessibilityLayer data={chartData}
             margin={{
               left: 10,
               right: 30,
               top: 10
             }}
             >
             {/* <CartesianGrid vertical={false} /> */}
             <XAxis
               dataKey="Year"
               tickLine={false}
               tickMargin={10}
               axisLine={false}
             />
             <YAxis
               tickLine={false}
               tickMargin={10}
               axisLine={false}
             />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                {countries.map((Entity, index) => (
                    <Line
                        key={Entity}
                        type="monotone"
                        dot
                        dataKey={Entity}
                        stroke={colors[index]}
                        name={Entity}>
                            <LabelList dataKey={Entity} position="top" fill={colors[index]} offset={10} formatter={(value) => Entity}/>
                    </Line>
                    ))}
              <ChartLegend content={<ChartLegendContent className='w-[85%] text-[--primary-text] flex-wrap mx-auto' />} />
            </LineChart>
      </ChartContainer>
    )
  }