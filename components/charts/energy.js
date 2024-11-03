"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Area, AreaChart,Line, LineChart,  Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList, Cell } from "recharts"
import { ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent} from "@/components/ui/chart"

export const EnergyShare = ({className}) => {
    const chartData = [
      { year: 2000, solar: 26, wind: 10, hydro: 10, fosils: 20 },
      { year: 2001, solar: 35, wind: 20, hydro: 20, fosils: 30 },
      { year: 2002, solar: 37, wind: 40, hydro: 30, fosils: 52 },
      { year: 2013, solar: 53, wind: 45, hydro: 40, fosils: 60 },
      { year: 2015, solar: 53, wind: 45, hydro: 40, fosils: 60 },
      { year: 2023, solar: 60, wind: 50, hydro: 35, fosils: 65 },
      { year: 2024, solar: 70, wind: 70, hydro: 35, fosils: 80 },
    ]
    
    const chartConfig = {
      "Mix": {
        label: "Energy Mix",
      },
      solar: {
        label: "Solar",
        color: "#2ccfff",
      },
      wind: {
        label: "Wind",
        color: "#065374",
      },
      fosils: {
        label: "Fosils",
        color: "#b10fff",
      },
      hydro: {
        label: "Hydro",
        color: "#ff5d83",
      },
    }

  return (
      <ChartContainer config={chartConfig} className={className}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 15,
              left: -15,
              right: 15,
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
              content={<ChartTooltipContent labelKey="Mix" indicator="dot" />}
            />
            <Area
              dataKey="solar"
              // type="monotone"
              fill="#2ccfff"
              stackId='a'
            >
            </Area>
             <Area
              dataKey="wind"
              fill="#065374"
              // type="monotone"
              stackId='a'
              >
            </Area>
            <Area
              dataKey="hydro"
              fill="#ff5d83"
              stackId='a'
              // type="monotone"
            >
            </Area>
            <Area
              dataKey="fosils"
              fill="#b10fff"
              stackId='a'
              // type="monotone"
            >
            </Area>
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
  )
}

export const LeaderBoards = ({className}) => {
  const chartData = [
   {year:"United States", solar: 95},
   {year:"United Kingdom", solar: 80},
   {year:"Germany", solar: 75},
   {year:"France", solar: 65},
   {year:"Japan", solar: 60},
   {year:"China", solar: 55},
   {year:"India", solar: 50},
   {year:"Brazil", solar: 45},
   {year:"Australia", solar: 40},
   {year:"Canada", solar: 35},
   {year:"South Korea", solar: 30},
   {year:"Russia", solar: 25},
   {year:"Mexico", solar: 20},
   {year:"Saudi Arabia", solar: 15},
   {year:"Turkey", solar: 10},
  ]
  const chartConfig = {
    solar: {
      label: "Solar",
      color: "green",
    },
    wind: {
      label: "Wind",
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
              dataKey="year"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="solar" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="solar"
              layout="vertical"
              fill="#2eec7d"
              radius={7}
              barSize={40}
            >
              <LabelList
                dataKey="year"
                position="insideLeft" 
                offset={8}
                className="fill-[--color-label]"
                fontSize={11}
              />
              <LabelList
                dataKey="solar"
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


export const EnergyMixChange = ({className}) => {
 const chartData = [
  { year: 2018, change: 16 },
  { year: 2019, change: 35 },
  { year: 2020, change: 7 },
  { year: 2021, change: 3 },
  { year: 2022, change: 29 },
  { year: 2023, change: 24 },
]
  
  const chartConfig = {
    "Mix": {
      label: "Energy Mix",
    },
    change: {
      label: "Change",
      color: "hsl(var(--chart-1))",
    },
  }

return (
    <ChartContainer config={chartConfig} className={className}>
        <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="change" fill="var(--color-change)" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
    </ChartContainer>
  )
}


export const EnergyMixChange2 = ({className}) => {
  const chartData = [
    { year: 2015, FFchange: 16, Rchange: 26, Nchange: 6 },
    { year: 2016, FFchange: 16, Rchange: 26, Nchange: 6 },
    { year: 2017, FFchange: 16, Rchange: 26, Nchange: 6 },
    { year: 2018, FFchange: 16, Rchange: 26, Nchange: 6 },
   { year: 2019, FFchange: 35, Rchange: 52, Nchange: 15 },
   { year: 2020, FFchange: 7, Rchange: 14, Nchange: 3 },
   { year: 2021, FFchange: 3, Rchange: 6, Nchange: 1 },
   { year: 2022, FFchange: 29, Rchange: 58, Nchange: 19 },
   { year: 2023, FFchange: 24, Rchange: 48, Nchange: 14 },
 ]
   
   const chartConfig = {
     "Mix": {
       label: "Energy Mix",
     },
     FFchange: {
       label: "Fosil Fuels",
       color: "hsl(var(--chart-1))",
     },
     Rchange: {
       label: "Renewables",
       color: "hsl(var(--chart-2))",
     },
     Nchange: {
       label: "Nuclear",
       color: "hsl(var(--chart-3))",
     },
   }
 
 return (
     <ChartContainer config={chartConfig} className={className}>
         <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="FFchange"
              stackId="a"
              fill="#ef7020"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="Rchange"
              stackId="a"
              fill="#3aee7a"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="Nchange"
              stackId="a"
              fill="#ec7ad7"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
     </ChartContainer>
   )
 }

export const CapacityChange = ({className}) => {
  const chartData = [
    { year: 2000, solar: 26, wind: 10, hydro: 10, fosils: 20 },
    { year: 2001, solar: 35, wind: 20, hydro: 20, fosils: 30 },
    { year: 2002, solar: 37, wind: 40, hydro: 30, fosils: 52 },
    { year: 2013, solar: 53, wind: 45, hydro: 40, fosils: 60 },
    { year: 2015, solar: 53, wind: 45, hydro: 40, fosils: 60 },
    { year: 2023, solar: 60, wind: 50, hydro: 35, fosils: 65 },
    { year: 2024, solar: 70, wind: 70, hydro: 35, fosils: 80 },
  ]
  
  const chartConfig = {
    "Mix": {
      label: "Energy Mix",
    },
    solar: {
      label: "Solar",
      color: "#2ccfff",
    },
    wind: {
      label: "Wind",
      color: "#065374",
    },
    fosils: {
      label: "Fosils",
      color: "#b10fff",
    },
    hydro: {
      label: "Hydro",
      color: "#ff5d83",
    },
  }

return (
    <ChartContainer config={chartConfig} className={className}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 15,
            left: -15,
            right: 15,
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
            content={<ChartTooltipContent labelKey="Mix" indicator="dot" />}
          />
          <Line
            dataKey="solar"
            // type="monotone"
            stroke="#2ccfff"
          >
          </Line>
           <Line
            dataKey="wind"
            stroke="#065374"
            // type="monotone"
            >
          </Line>
          <Line
            dataKey="hydro"
            stroke="#ff5d83"
            // type="monotone"
          >
          </Line>
          <Line
            dataKey="fosils"
            stroke="#b10fff"
            // type="monotone"
          >
          </Line>
          <ChartLegend content={<ChartLegendContent />} />
        </LineChart>
      </ChartContainer>
  )
}

export const CapacityChange2 = ({className}) => {
  const chartData = [
    { year: "Wind", solar: 2 },
    { year: "Wind", solar: 5 },
    { year: "Nuclear", solar: 30 },
    { year: "Hydro", solar: 15 },
    { year: "Coal", solar: -5 },
    { year: "Gas", solar: -0.5 },
  ]
  const chartConfig = {
    solar: {
      label: "Change +/-",
      color: "hsl(var(--chart-1))",
    },
  } 

  return (
    <ChartContainer config={chartConfig} className={className}>
      <BarChart className=' ' accessibilityLayer data={chartData} margin={{
            bottom: 0,
            top: 0,
            left: 0,
            right: 0
          }}>
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent />}
      />
      <XAxis dataKey="year" tickMargin={8} minTickGap={5} axisLine={false} type="category" tickLine={false} />
        <Bar dataKey="solar" fill="var(--color-solar)" radius={8} >
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
    { year: 2024, solar: 24, wind: 90, nuclear: 100 },
    { year: 2023, solar: 209, wind: 10, nuclear: 60 },
    { year: 2018, solar: 73, wind: 10, nuclear: 30 },
    { year: 2017, solar: 27, wind: 120, nuclear: 45 },
    { year: 2016, solar: 25, wind: 20, nuclear: 60 },
    { year: 2015, solar: 86, wind: 40, nuclear: 40 },
    { year: 2014, solar: 86, wind: 80, nuclear: 30 },
  ]

  const chartConfig = {
    capacity: {
      label: "Capacity",
    },
    solar: {
      label: "Solar",
      color: "#ff670a",
    },
    wind: {
      label: "Wind",
      color: "#009185",
    },
    nuclear: {
      label: "Nuclear",
      color: "#ff58df",
    },
  } 

  return (
        <ChartContainer config={chartConfig} className={className}>
           <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -5,
              right: 5,
            }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="year"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent labelKey="capacity"/>}
            />
            <ChartLegend content={<ChartLegendContent/>} />
            <Bar dataKey="solar" stackId="a" fill="#2ccfff" radius={[5, 0, 0, 5]}>
              <LabelList
                dataKey="solar"
                position="insideLeft"
                offset={8}
                fontSize={12}
              />
            </Bar>
            <Bar dataKey="wind" stackId="a" fill="#70ffc3" radius={[0, 0, 0, 0]}>
              <LabelList
                dataKey="wind"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
            </Bar>
            <Bar dataKey="nuclear" stackId="a" fill="#ffc6f7" radius={[0, 5, 5, 0]}>
              <LabelList
                dataKey="nuclear"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
  )
}


export const CO2GDPPC = ({className}) => {
  const chartData = [
    { year: 2000, gdp: 5, co2: -10 },
    { year: 2001, gdp: 20, co2: -10 },
    { year: 2002, gdp: 37, co2: -20 },
    { year: 2014, gdp: 103, co2: -50 },
    { year: 2015, gdp: 153, co2: -50 },
    { year: 2018, gdp: 353, co2: -150 },
    { year: 2019, gdp: 453, co2: -150 },
    { year: 2020, gdp: 553, co2: -150 },
    { year: 2023, gdp: 609, co2: -260 },
    { year: 2024, gdp: 814, co2: -300 },
  ]
  
  const chartConfig = {
    year: {
      label: "Year",
    },
    gdp: {
      label: "GDP",
      color: "#440706",
    },
    co2: {
      label: "CO2",
      color: "#fe4311",
    },
  }

return (
    <ChartContainer config={chartConfig} className={className}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: -10,
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
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickCount={5}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent labelKey="year" />}
          />
          <Area
            dataKey="gdp"
            fill='#000000'
            stroke='none'
            >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Area>
          <Area
            dataKey="co2"
            fill='#fe4311'
            stroke="none"
          >
            <LabelList
              position="bottom"
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

export const CO2GDP = ({className}) => {
  const chartData = [
    { year: 2000, gdp: 5, co2: -10 },
    { year: 2001, gdp: 20, co2: -10 },
    { year: 2002, gdp: 37, co2: -20 },
    { year: 2014, gdp: 103, co2: -50 },
    { year: 2015, gdp: 153, co2: -50 },
    { year: 2018, gdp: 353, co2: -150 },
    { year: 2019, gdp: 453, co2: -150 },
    { year: 2020, gdp: 553, co2: -150 },
    { year: 2023, gdp: 609, co2: -260 },
    { year: 2024, gdp: 814, co2: -300 },
  ]
  
  const chartConfig = {
    year: {
      label: "Year",
    },
    gdp: {
      label: "GDP",
      color: "#440706",
    },
    co2: {
      label: "CO2",
      color: "#fe4311",
    },
  }

return (
    <ChartContainer config={chartConfig} className={className}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: -10,
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
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickCount={5}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent labelKey="year" />}
          />
          <Area
            dataKey="gdp"
            fill='#000000'
            stroke='none'
            >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Area>
          <Area
            dataKey="co2"
            fill='#fe4311'
            stroke="none"
          >
            <LabelList
              position="bottom"
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
    { year: 2012, solar: 1236 },
    { year: 2014, solar: 2235 },
    { year: 2015, solar: 3447 },
    { year: 2016, solar: 3550 },
    { year: 2017, solar: 6053 },
    { year: 2018, solar: 6263 },
    { year: 2019, solar: 7275 },
    { year: 2024, solar: 8389 },
  ]
    const chartConfig = {
      solar: {
        label: "Solar",
        color: "#b10fff",
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
              dataKey="solar"
              type="natural"
              fill="#b10fff"
              // dot={true}
              radius={2}
              stroke="#b10fff"
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
    { year: 2012, renewables: 36 },
    { year: 2014, renewables: 35 },
    { year: 2015, renewables: 47 },
    { year: 2016, renewables: 50 },
    { year: 2017, renewables: 53 },
    { year: 2018, renewables: 63 },
    { year: 2019, renewables: 75 },
    { year: 2024, renewables: 89 },
  ]
  const chartConfig = {
    share: {
      label: "% Renewables in the mix",
    },
    renewables: {
      label: "Renewables",
      color: "#00ff9d",
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
            content={<ChartTooltipContent className="text-black" labelKey="share"/>}
          />
          <Area
            dataKey="renewables"
            type="natural"
            fill="#2bfdac"
            // dot={true}
            radius={2}
            stroke="#00ff9d"
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


export const ShareFossils = ({className}) => {
  const chartData = [
    { year: 2012, ff: 89 },
    { year: 2014, ff: 85 },
    { year: 2015, ff: 77 },
    { year: 2016, ff: 60 },
    { year: 2017, ff: 53 },
    { year: 2018, ff: 50 },
    { year: 2019, ff: 47 },
    { year: 2024, ff: 35 },
  ]
  const chartConfig = {
    share: {
      label: "% Fossil Fuels in the mix",
    },
    ff: {
      label: "Fossil Fuels",
      color: "#ff0000",
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
            content={<ChartTooltipContent className="text-black" labelKey="share"/>}
          />
          <Area
            dataKey="ff"
            type="natural"
            fill="#ff0000"
            // dot={true}
            radius={2}
            stroke="#ff0000"
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