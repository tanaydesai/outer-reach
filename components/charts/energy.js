"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Area, AreaChart,Line, LineChart,  Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList, Cell } from "recharts"
import { ChartConfig,ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent} from "@/components/ui/chart"
import { FossilShare } from '../energy-cards/fossils-share'

export const EnergyShare = ({className, data}) => {
    const chartData = data ? data : []
    
    const chartConfig = {
      "Year": {
        label: "Year",
      },
      "Solar (TWh)": {
        label: "Solar",
        color: "#2ccfff",
      },
      "Wind (TWh)": {
        label: "Wind",
        color: "#065374",
      },
      "Nuclear (TWh)": {
        label: "Nuclear",
        color: "#ff58df",
      },
      "Hydro (TWh)": {
        label: "Hydro",
        color: "#ff5d83",
      },
      "Gas (TWh)": {
        label: "Gas",
        color: "#ff5d83",
      },
      "Coal (TWh)": {
        label: "Fosils",
        color: "#b10fff",
      },
      "Oil (TWh)": {
        label: "Oil",
        color: "#ff58df",
      },
    }

  return (
      <ChartContainer config={chartConfig} className={className}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 15,
              left: -5,
              right: 15,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Year"
              tickLine={false}
              axisLine={false}
              tickMargin={3}
              tickFormatter={(value) => `${String(value).slice(2, 4)}'`}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={5}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent labelKey="Year" indicator="dot" />}
            />
            <Area
              type="monotone"
              dataKey="Solar (TWh)"
              stroke="#2ccfff"
              strokeWidth={2}
              fill="#2ccfff"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Wind (TWh)"
              stroke="#065374"
              strokeWidth={2}
              fill="#065374"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Nuclear (TWh)"
              stroke="#ff58df"
              strokeWidth={2}
              fill="#ff58df"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Hydro (TWh)"
              stroke="#ff5d83"
              strokeWidth={2}
              fill="#ff5d83"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Gas (TWh)"
              stroke="#ff5d83"
              strokeWidth={2}
              fill="#ff5d83"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Coal (TWh)"
              stroke="#b10fff"
              strokeWidth={2}
              fill="#b10fff"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Oil (TWh)"
              stroke="#ff58df"
              strokeWidth={2}
              fill="#ff58df"
              fillOpacity={0.2}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
  )
}

export const LeaderBoards = ({className}) => {
  const chartData = [
   {country:"United States", data: 95},
   {country:"United Kingdom", data: 80},
   {country:"Germany", data: 75},
   {country:"France", data: 65},
   {country:"Japan", data: 60},
   {country:"China", data: 55},
   {country:"India", data: 50},
   {country:"Brazil", data: 45},
   {country:"Australia", data: 40},
   {country:"Canada", data: 35},
   {country:"South Korea", data: 30},
   {country:"Russia", data: 25},
   {country:"Mexico", data: 20},
   {country:"Saudi Arabia", data: 15},
   {country:"Turkey", data: 10},
  ]
  const chartConfig = {
    country: {
      label: "Country",
      color: "green",
    },
    data: {
      label: "Value",
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
              left: 10,
              right: 5,
            }}
          >
            <YAxis
              dataKey="country"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis dataKey="data" type="number" hide />
            <Bar
              dataKey="data"
              layout="vertical"
              fill="#2eec7d"
              radius={7}
              barSize={50}
            >
            <LabelList
                dataKey="data"
                position="insideRight"
                offset={8}
                className="fill-[#656565]"
                fontSize={20}
                formatter={(value) => `${value} %`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
  )
}


export const EnergyMixChange = ({className, data}) => {
  const chartData = data ? data : []
   
   const chartConfig = {
    Year: {
      label: "Year",
    },
     "Change (%)": {
       label: "Change (%)",
       color: "hsl(var(--chart-1))",
     },
   }
 
 return (
     <ChartContainer config={chartConfig} className={className}>
         <BarChart
             accessibilityLayer
             data={chartData}
             margin={{
               left: -20,
             }}
           >
             {/* <CartesianGrid vertical={false} /> */}
             <YAxis
               tickLine={false}
               axisLine={false}
               tickMargin={8}
               tickCount={5}
             />
             <XAxis
               dataKey="Year"
               tickLine={false}
               tickMargin={10}
               axisLine={false}
             />
             <ChartTooltip
               cursor={false}
              content={<ChartTooltipContent labelKey="Year" />}
             />
             <Bar dataKey="Change (%)" fill="#2eec7d" radius={8}>
             </Bar>
           </BarChart>
     </ChartContainer>
   )
 }

 export const EnergyMixChange2 = ({className, data}) => {
  const chartData = data ? data : []
   
   const chartConfig = {
     "Year": {
       label: "Year",
     },
     "Fossil fuels": {
       label: "Fosil Fuels",
       color: "#ef7020",
     },
     "Renewables": {
       label: "Renewables",
       color: "#3aee7a",
     },
     "Nuclear": {
       label: "Nuclear",
       color: "#ec7ad7"
   }
}

 return (
     <ChartContainer config={chartConfig} className={className}>
         <LineChart accessibilityLayer data={chartData}
         margin={{
           left: -20,
         }}
         >
            {/* <CartesianGrid vertical={false} /> */}
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis axisLine={false} tickLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent labelKey="Year" />} />

            <Line
              dataKey="Fossil fuels"
              stroke="#ef7020"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="Renewables"
              stroke="#3aee7a"
              strokeWidth={2}
              dot={false}
            />
            <Line 
              dataKey="Nuclear"
              stroke="#ec7ad7"
              strokeWidth={2}
              dot={false} 
            />
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
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
      label: "Year",
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
    { type: "Solar", capacity: 24 },
    { type: "Wind", capacity: 90 },
    { type: "Nuclear", capacity: 100 },
    { type: "Hydro", capacity: 5 },
    { type: "Coal", capacity: 250 },
    { type: "Gas", capacity: 125 },
    { type: "Bio", capacity: 25 },
  ]

  const chartConfig = {
    capacity: {
      label: "Capacity",
    },
    type: {
      label: "Type",
      color: "#Nuclear",
    },
  } 

  return (
        <ChartContainer config={chartConfig} className={className}>
           <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 2,
              right: 5,
            }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="type"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent labelKey="type" labelFormatter={value => `${value}`}/>}
            />
            <Bar dataKey="capacity" stackId="a" fill="#ffc6f7" radius={[0, 5, 5, 0]}>
              <LabelList
                dataKey="capacity"
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


export const PlannedCapacity = ({className}) => {
  
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
              left: -3,
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


export const CurrentCapacity = ({className}) => {
  
  const chartData = [
    { type: "Solar", capacity: 24 },
    { type: "Wind", capacity: 90 },
    { type: "Nuclear", capacity: 100 },
    { type: "Hydro", capacity: 5 },
    { type: "Coal", capacity: 250 },
    { type: "Gas", capacity: 125 },
    { type: "Bio", capacity: 25 },
  ]

  const chartConfig = {
    capacity: {
      label: "Capacity",
    },
    type: {
      label: "Type",
      color: "#Nuclear",
    },
  } 

  return (
        <ChartContainer config={chartConfig} className={className}>
           <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 3,
              right: 5,
            }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="type"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent labelKey="type" labelFormatter={value => `${value}`}/>}
            />
            <Bar dataKey="capacity" stackId="a" fill="#ffc6f7" radius={[0, 5, 5, 0]}>
              <LabelList
                dataKey="capacity"
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


export const EnergyConsumptionGDP = ({className}) => {
  const chartData = [
    { year: 2000, energy: 5, gdp: 10 },
    { year: 2001, energy: 20, gdp: 10 },
    { year: 2002, energy: 37, gdp: 20 },
    { year: 2014, energy: 103, gdp: -0 },
    { year: 2015, energy: 153, gdp: 50 },
    { year: 2018, energy: 353, gdp: 150 },
    { year: 2019, energy: 453, gdp: 150 },
    { year: 2020, energy: 553, gdp: 150 },
    { year: 2023, energy: 609, gdp: 260 },
    { year: 2024, energy: 814, gdp: 300 },
  ]
  
  const chartConfig = {
    year: {
      label: "Year",
    },
    energy: {
      label: "Energy Consumption",
      color: "#220706",
    },
    gdp: {
      label: "GDP",
      color: "#de4311",
    },
  }

return (
    <ChartContainer config={chartConfig} className={className}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: -10,
            right:20,
          }}
        >
          <CartesianGrid vertical={false} />
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
          <Line
            dataKey="energy"
            stroke='#000000'
            >
            <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
          <Line
            dataKey="gdp"
            stroke='#fe4311'
          >
            <LabelList
              position="bottom"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            />
          </Line>
          <ChartLegend content={<ChartLegendContent />} />
        </LineChart>
      </ChartContainer>
)
}

export const EnergyConsumptionGDPPC = ({className, data}) => {
  const chartData = data ? data : []
  
  const chartConfig = {
    Year: {
      label: "Year",
    },
    "Primary energy consumption per capita (kWh/person)": {
      label: "Primary energy consumption per capita (kWh/person)",
      color: "#220706",
    },
    "GDP per capita, PPP (constant 2017 international $)" : {
      label: "GDP per capita, PPP (constant 2017 international $)",
      color: "#de4311",
    },
  }

return (
    <ChartContainer config={chartConfig} className={className}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: -10,
            right:20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="Year"
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
            content={<ChartTooltipContent labelKey="Year" />}
          />
          <Line
            dataKey="Primary energy consumption per capita (kWh/person)"
            stroke='#000000'
            >
            {/* <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            /> */}
          </Line>
          <Line
            dataKey="GDP per capita, PPP (constant 2017 international $)"
            stroke='#fe4311'
          >
            {/* <LabelList
              position="bottom"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            /> */}
          </Line>
          <ChartLegend content={<ChartLegendContent />} />
        </LineChart>
      </ChartContainer>
)
}

export const AnnualHouse = ({className}) => {
  const chartData = [
    { year: 2012, use: 1236 },
    { year: 2014, use: 2235 },
    { year: 2015, use: 3447 },
    { year: 2016, use: 3550 },
    { year: 2017, use: 6053 },
    { year: 2018, use: 6263 },
    { year: 2019, use: 7275 },
    { year: 2024, use: 8389 },
  ]
    const chartConfig = {
      year: {
        label: "Year",
      },
      use: {
        label: "Electricity Use",
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
              content={<ChartTooltipContent indicator="dot" className="text-black" labelKey="year" />}
            />
            <Area
              dataKey="use"
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

export const EnergyUsePP = ({className, data}) => {
  const chartData = data ? data : []
    const chartConfig = {
      Year: {
        label: "Year",
      },
      "Primary energy consumption per capita (kWh/person)": {
        label: "Primary energy consumption per capita (kWh/person)",
        color: "#220706",
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
              content={<ChartTooltipContent className="text-black" indicator="dot" labelKey="Year" />}
            />
            <Area
              dataKey="Primary energy consumption per capita (kWh/person)"
              type="natural"
              fill="#f50ddd"
              // dot={true}
              radius={2}
              stroke="#f50ddd"
            >
              {/* <LabelList
              position="top"
              offset={12}
              className="fill-foreground"
              fontSize={12}
            /> */}
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
    year: {
      label: "Year",
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
            content={<ChartTooltipContent className="text-black" indicator="dot" labelKey="year"/>}
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
    year: {
      label: "Year",
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
            content={<ChartTooltipContent className="text-black" labelKey="year"/>}
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