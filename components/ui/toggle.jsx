"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center data-[state=on]:bg-[#eeeeee] data-[state=on]:text-black rounded-[5px] text-[12px] font-a1 group py-0.5 px-1.5 text-[#aaaaaa] hover:bg-[#eeeeee] hover:text-black outline-none transition-colors data-[state=on]",
)

const Toggle = React.forwardRef(({ className, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ className }))}
    {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
