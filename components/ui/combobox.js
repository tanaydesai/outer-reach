"use client"
import * as React from "react"
import { Check, ChevronDown, Earth } from "lucide-react"
import { cn } from "@/lib/utils"
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList,} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger,} from "@/components/ui/popover"


export function Combobox({ values, value="", setValue }) {
  const [open, setOpen] = React.useState(false)
  values = values.map((c) => ({ label: c, value: c }))


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="font-a1 w-full gap-1 cursor-default flex justify-center bg-transparent whitespace-nowrap overflow-auto group text-[#837e77] hover:text-[#f4f4e4] uppercase h-[80px] md:h-auto text-[12px] px-4 py-2.5 no-underline border-l border-l-white md:border-l-0 md:border-t md:border-t-white">
          {value ? values.find((framework) => framework.value === value)?.label : "Country"}
          <ChevronDown size={18}/>
      </PopoverTrigger>
      <PopoverContent className="z-50 w-[215px] max-h-[300px] overflow-hidden bg-[#f4f4e4] shadow-md border-t border-t-white">
        <Command>
          <CommandInput placeholder="Search..." />
          <CommandList>
            <CommandEmpty>Not found..</CommandEmpty>
            <CommandGroup>
              {values.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {value === framework.value ? <Check className="mr-1.5"/> : <div className='w-3 h-3 bg-red-400 mr-2'/> }
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
