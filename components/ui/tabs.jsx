"use client"
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"


const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "mx-auto w-full text-center px-2 flex items-center justify-start gap-6 overflow-auto dark:bg-stone-800 dark:text-stone-400",
      className
    )}
    {...props}></TabsPrimitive.List>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <div>
      <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "font-a1 w-[120px] h-[130px] group p-2 text-[#9b9b9b] hover:text-[#1e1f2b] hover:border-[#1e1f2b] hover:stroke-[#1e1f2b] transition-all duration-300  border-2 border-[#b3b3b3] rounded-[10px] text-[14px] stroke-[#9b9b9b] whitespace-nowrap disabled:pointer-events-none data-[state=active]:border-[#1e1f2b] data-[state=active]:text-[#1e1f2b] data-[state=active]:stroke-[#1e1f2b] dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300 dark:data-[state=active]:bg-stone-950 dark:data-[state=active]:text-stone-50",
        className
      )}
      {...props} />
  </div>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-10 min-h-[400px] ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }





















const Tabs2 = TabsPrimitive.Root

const TabsList2 = React.forwardRef(({ className, ...props }, ref) => (
  <div className="w-fit absolute right-0 bottom-0 lg:-top-7">
    <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex w-fit items-center border-2 border-[#e4e4e4] justify-end gap-1 rounded-[5px] dark:bg-stone-800 dark:text-stone-400",
      className
    )}
    {...props}></TabsPrimitive.List>
  </div>
))
TabsList2.displayName = TabsPrimitive.List.displayName

const TabsTrigger2 = React.forwardRef(({ className, ...props }, ref) => (
    <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center rounded-[5px] text-[12px] font-semibold whitespace-nowrap font-rajdhani-regular uppercase py-1 px-2.5 duration-500 data-[state=active]:bg-[#0f0f0f]  data-[state=active]:text-white  disabled:pointer-events-none transition-all dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300 dark:data-[state=active]:bg-stone-950 dark:data-[state=active]:text-stone-50",
      className
    )}
    {...props} />
))
TabsTrigger2.displayName = TabsPrimitive.Trigger.displayName

const TabsContent2 = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300",
      className
    )}
    {...props} />
))
TabsContent2.displayName = TabsPrimitive.Content.displayName

export { Tabs2, TabsList2, TabsTrigger2, TabsContent2 }