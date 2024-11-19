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
      "w-full sm:w-fit px-1.5 py-1 text-center rounded-[10px] flex border border-[#d9d9d9] items-center justify-start gap-3 overflow-auto dark:bg-stone-800 dark:text-stone-400",
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
        "font-a1 group py-1 px-2 text-[#aaaaaa] data-[state=active]:bg-[#eeeeee] hover:bg-[#eeeeee] hover:text-black outline-none transition-all rounded-[5px] text-[14px] whitespace-nowrap disabled:pointer-events-none  data-[state=active]:text-black data-[state=active]:stroke-[#1e1f2b] dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300 dark:data-[state=active]:bg-stone-950 dark:data-[state=active]:text-stone-50",
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
      "h-[75vh] lg:h-[calc(100vh-125px)] pb-10 overflow-auto mt-5",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }












const Tabs2 = TabsPrimitive.Root

const TabsList2 = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "w-fit ml-3 px-1.5 py-1 text-center rounded-[10px] flex border border-[#d9d9d9] items-center justify-start gap-3 overflow-auto dark:bg-stone-800 dark:text-stone-400",
      className
    )}
    {...props}></TabsPrimitive.List>
))
TabsList2.displayName = TabsPrimitive.List.displayName

const TabsTrigger2 = React.forwardRef(({ className, ...props }, ref) => (
  <div>
      <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "font-a1 group py-1 px-2 text-[#aaaaaa] data-[state=active]:bg-[#eeeeee] hover:bg-[#eeeeee] hover:text-black outline-none transition-all rounded-[5px] text-[14px] whitespace-nowrap disabled:pointer-events-none  data-[state=active]:text-black data-[state=active]:stroke-[#1e1f2b] dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300 dark:data-[state=active]:bg-stone-950 dark:data-[state=active]:text-stone-50",
        className
      )}
      {...props} />
  </div>
))
TabsTrigger2.displayName = TabsPrimitive.Trigger.displayName

const TabsContent2 = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-5 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300",
      className
    )}
    {...props} />
))
TabsContent2.displayName = TabsPrimitive.Content.displayName

export { Tabs2, TabsList2, TabsTrigger2, TabsContent2 }