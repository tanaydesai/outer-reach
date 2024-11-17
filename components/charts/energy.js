"use client"
import React, { useState, useRef, useEffect } from 'react'
import { Area, AreaChart,Line, LineChart,  Bar, BarChart, CartesianGrid, XAxis, YAxis, LabelList, Cell } from "recharts"
import { ChartConfig, ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend,ChartLegendContent} from "@/components/ui/chart"

export const EnergyShare = ({className, data}) => {
    const chartData = data ? data : []
    
    const chartConfig = {
      "Year": {
        label: "Year",
      },
      "Solar": {
        label: "Solar",
        color: "#2ccfff",
      },
      "Wind": {
        label: "Wind",
        color: "#065374",
      },
      "Nuclear": {
        label: "Nuclear",
        color: "#ff58df",
      },
      "Hydro": {
        label: "Hydro",
        color: "#ff5d83",
      },
      "Gas": {
        label: "Gas",
        color: "#ff5d83",
      },
      "Coal": {
        label: "Fosils",
        color: "#b10fff",
      },
      "Oil": {
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
              dataKey="Solar"
              stroke="#2ccfff"
              strokeWidth={2}
              fill="#2ccfff"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Wind"
              stroke="#065374"
              strokeWidth={2}
              fill="#065374"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Nuclear"
              stroke="#ff58df"
              strokeWidth={2}
              fill="#ff58df"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Hydro"
              stroke="#ff5d83"
              strokeWidth={2}
              fill="#ff5d83"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Gas"
              stroke="#ff5d83"
              strokeWidth={2}
              fill="#ff5d83"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Coal"
              stroke="#b10fff"
              strokeWidth={2}
              fill="#b10fff"
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="Oil"
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

export const LeaderBoards = ({className, data, unit}) => {
  const chartData = data ? data : []
  const chartConfig = {
    Country: {
      label: "Country",
      color: "green",
    },
    Value: {
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
              right: 10,
            }}
          >
            <YAxis
              dataKey="Country"
              type="category"
              tickLine={false}
              tickMargin={0}
              axisLine={false}
              fontSize={10}
            />
            <XAxis dataKey="Value" type="number" hide />
            <Bar
              dataKey="Value"
              layout="vertical"
              fill="#2eec7d"
              radius={7}
              barSize={50}
            >
            <LabelList
                dataKey="Value"
                position="right"
                offset={5}
                className="fill-[#656565] whitespace-nowrap"
                fontSize={13}
                formatter={(value) => `${value.toFixed(0)}${unit}`}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
  )
}

export const AnnualEnergyChange = ({className, data}) => {
   const chartData = data ? data : []
   
   const chartConfig = {
    Year: {
      label: "Year",
    },
     "Change %": {
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
             <Bar dataKey="Change %" fill="#2eec7d" radius={8}>
             </Bar>
           </BarChart>
     </ChartContainer>
   )
 }

 export const Energy3ShareChange = ({className, data}) => {
   const chartData = data ? data : []
   
   const chartConfig = {
     "Year": {
       label: "Year",
     },
     "Fossil fuels": {
       label: "Fossil Fuels",
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
              dataKey="Year"
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

 export const Capacity = ({className, data}) => {
  const chartData = data ? data : []
  
  const chartConfig = {
    "Year": {
      label: "Year",
    },
    "Solar": {
      label: "Solar",
      color: "#2ccfff",
    },
    "Wind": {
      label: "Wind",
      color: "#065374",
    },
    "Nuclear": {
      label: "Nuclear",
      color: "#ff58df",
    },
    "Hydro": {
      label: "Hydro",
      color: "#ff5d83",
    },
    "Fossil Fuels": {
      label: "Fossil Fuels",
      color: "#ff5d83",
    },
    "Bioenergy": {
      label: "Bioenergy",
      color: "#b10fff",
    },
    "Other Renewables": {
      label: "Other Renewables",
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
            dataKey="Solar"
            stroke="#2ccfff"
            strokeWidth={2}
            fill="#2ccfff"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="Wind"
            stroke="#065374"
            strokeWidth={2}
            fill="#065374"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="Nuclear"
            stroke="#ff58df"
            strokeWidth={2}
            fill="#ff58df"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="Hydro"
            stroke="#ff5d83"
            strokeWidth={2}
            fill="#ff5d83"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="Other Renewables"
            stroke="#ff5d83"
            strokeWidth={2}
            fill="#ff5d83"
            fillOpacity={0.2}
          />
          <Area
            type="monotone"
            dataKey="Bioenergy"
            stroke="#b10fff"
            strokeWidth={2}
            fill="#b10fff"
            fillOpacity={0.2}
          />
          {/* <Area
            type="monotone"
            dataKey="Fossil Fuels"
            stroke="#ff58df"
            strokeWidth={2}
            fill="#ff58df"
            fillOpacity={0.2}
          /> */}
          <ChartLegend content={<ChartLegendContent />} />
        </AreaChart>
      </ChartContainer>
)
}

 export const CapacityAdditions = ({className, data}) => {
  const chartData = data ? data : []

  const chartConfig = {
    "Mix": {
      label: "Year",
    },
    Solar: {
      label: "Solar",
      color: "#2ccfff",
    },
    Wind: {
      label: "Wind",
      color: "#065374",
    },
    Nuclear: {
      label: "Nuclear",
      color: "#065374",
    },
    Bioenergy: {
      label: "Bioenergy",
      color: "#065374",
    },
    Geothermal: {
      label: "Geothermal",
      color: "#065374",
    },
    "Fossil fuels": {
      label: "Fossil fuels",
      color: "#b10fff",
    },
    Hydro: {
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
            dataKey="Year"
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
            type="monotone"
            dataKey="Solar"
            dot={false}
            stroke="#2ccfff"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Wind"
            dot={false}
            stroke="#065374"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Nuclear"
            dot={false}
            stroke="#065374"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Hydro"
            dot={false}
            stroke="#ff5d83"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="Bioenergy"
            dot={false}
            stroke="#b10fff"
            strokeWidth={2}
          />
          {/* <Line
            type="monotone"
            dataKey="Fossil fuels"
            stroke="#ff58df"
            strokeWidth={2}
          /> */}
          <Line
            type="monotone"
            dataKey="Geothermal"
            dot={false}
            stroke="#ff58df"
            strokeWidth={2}
          />
          <ChartLegend content={<ChartLegendContent />} />
        </LineChart>
      </ChartContainer>
  )
}

export const PlannedCapacity = ({className}) => {
  
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

export const CurrentCapacity = ({className, data}) => {
  const chartData = data ? data : []

  const chartConfig = {
    value: {
      label: "Capacity (GW)",
    },
    type: {
      label: "Type",
    },
  } 

  return (
        <ChartContainer config={chartConfig} className={className}>
           <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 30,
              right: 15,
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
            <Bar dataKey="value" stackId="a" fill="#ffc6f7" radius={[0, 5, 5, 0]}>
              <LabelList
                dataKey="value"
                position="right"
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
      label: "Energy use per capita (kWh/person)",
      color: "#220706",
    },
    "GDP per capita, PPP (constant 2017 international $)" : {
      label: "GDP per capita $",
      color: "#de4311",
    },
  }

return (
    <ChartContainer config={chartConfig} className={className}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
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
            dot={false}
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
            dot={false}
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
        label: "Energy use per capita (kWh/person)",
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
              dot={false}
              // radius={2}
              stroke="#f50ddd"
            >
            </Area>
          </AreaChart>
        </ChartContainer>
  )
}

export const ShareRenewables = ({className, data}) => {
  const chartData = data ? data : []
  const chartConfig = {
    Year: {
      label: "Year",
    },
    Renewables: {
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
            content={<ChartTooltipContent className="text-black" indicator="dot" labelKey="Year"/>}
          />
          <Area
            dataKey="Renewables"
            type="natural"
            fill="#2bfdac"
            // dot={true}
            radius={2}
            stroke="#00ff9d"
          >
          </Area>
        </AreaChart>
      </ChartContainer>
)
}

export const ShareFossils = ({className, data}) => {
  const chartData = data ? data : []
  const chartConfig = {
    Year: {
      label: "Year",
    },
    "Fossil fuels": {
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
            content={<ChartTooltipContent className="text-black" labelKey="Year"/>}
          />
          <Area
            dataKey="Fossil fuels"
            type="natural"
            fill="#ff0000"
            // dot={true}
            radius={2}
            stroke="#ff0000"
          >
          </Area>
        </AreaChart>
      </ChartContainer>
)
}