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
      "flex items-center overflow-auto text-[25px] gap-6 h-[50px] px-5 dark:bg-stone-800 dark:text-stone-400",
      className
    )}
    {...props}></TabsPrimitive.List>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  // <motion.div whileTap={{scaleX:1.1}}>
    <div className="group">
      <div class="bg-[#24252f] h-[1px] my-1 w-0 group-hover:w-[100%] transition-all duration-700"/>
      <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center font-a2 text-[#9b9b9b] whitespace-nowrap uppercase duration-500 data-[state=active]:text-[#24252f] disabled:pointer-events-none transition-all dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300 dark:data-[state=active]:bg-stone-950 dark:data-[state=active]:text-stone-50",
        className
      )}
      {...props} />
    </div>
  // </motion.div>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 px-3 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }





















































// "use client"

// import * as React from "react"
// import * as TabsPrimitive from "@radix-ui/react-tabs"

// import { cn } from "@/lib/utils"
// import { motion } from "framer-motion"
// const Tabs = TabsPrimitive.Root

// const TabsList = React.forwardRef(({ className, ...props }, ref) => (
//   <TabsPrimitive.List
//     ref={ref}
//     className={cn(
//       "inline-flex items-center border-2 border-[#e4e4e4]  gap-1 rounded-[20px] justify-center dark:bg-stone-800 dark:text-stone-400",
//       className
//     )}
//     {...props}></TabsPrimitive.List>
// ))
// TabsList.displayName = TabsPrimitive.List.displayName

// const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
//   // <motion.div whileTap={{scaleX:1.1}}>
//     <TabsPrimitive.Trigger
//     ref={ref}
//     className={cn(
//       "inline-flex items-center justify-center rounded-[20px] text-[12px] font-semibold whitespace-nowrap font-rajdhani-regular uppercase py-1 px-2 duration-500 data-[state=active]:bg-[#0f0f0f]  data-[state=active]:text-white  disabled:pointer-events-none transition-all dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300 dark:data-[state=active]:bg-stone-950 dark:data-[state=active]:text-stone-50",
//       className
//     )}
//     {...props} />
//   // </motion.div>
// ))
// TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// const TabsContent = React.forwardRef(({ className, ...props }, ref) => (
//   <TabsPrimitive.Content
//     ref={ref}
//     className={cn(
//       "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 dark:ring-offset-stone-950 dark:focus-visible:ring-stone-300",
//       className
//     )}
//     {...props} />
// ))
// TabsContent.displayName = TabsPrimitive.Content.displayName

// export { Tabs, TabsList, TabsTrigger, TabsContent }