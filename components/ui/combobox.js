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
      <PopoverTrigger asChild>
        <div className="font-a1 cursor-default flex bg-transparent whitespace-nowrap overflow-auto group p-2 mx-0 text-[#aaaaaa] hover:text-black text-[14px] no-underline rounded-[10px] border border-[#d9d9d9]">
          {value == "World" ? <Earth size={22} /> : value ? values.find((framework) => framework.value === value)?.label : <Earth size={22} />}
            <ChevronDown size={18} className="pt-1"/>
        </div>
      </PopoverTrigger>
      <PopoverContent className="z-50 min-w-[15rem] max-h-[300px] overflow-hidden rounded-[10px] shadow-md mt-2  border border-[#d9d9d9] bg-[#f3f3f3] p-1">
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
