"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center data-[state=on]:bg-[#eeeeee] rounded-[4px] data-[state=on]:text-black text-[11px] font-a1 group py-0.5 px-1.5 text-[#837e77] hover:bg-[#f4f4e4] hover:text-black outline-none transition-colors data-[state=on]",
)

const Toggle = React.forwardRef(({ className, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ className }))}
    {...props} />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
