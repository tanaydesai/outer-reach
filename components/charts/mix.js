"use client"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartData = [
  { month: "January", desktop: 186, mobile: 80, app: 100 },
  { month: "February", desktop: 305, mobile: 200, app: 200 },
  { month: "March", desktop: 237, mobile: 120, app: 90 },
  { month: "April", desktop: 73, mobile: 190, app: 160 },
  { month: "May", desktop: 209, mobile: 130, app: 210 },
  { month: "June", desktop: 214, mobile: 140, app: 250 },
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
  app: {
    label: "App",
    color: "hsl(var(--chart-3))",
  },
} 

export function Mix({className}) {
  return (
        <ChartContainer config={chartConfig} className={className}>
          <AreaChart accessibilityLayer data={chartData} >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="#231a0f"
              fillOpacity={0.5}
              stroke="#231a0f"
              stackId="a"
            />
           <Area
              dataKey="mobile"
              type="natural"
              fill="#000000"
              fillOpacity={0.4}
              stroke="#000000"
              stackId="a"
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="#211a1d"
              fillOpacity={0.1}
              stroke="#000000"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
  )
}
