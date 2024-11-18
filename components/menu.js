"use client"
import { motion } from 'framer-motion';
import {Popover,PopoverContent,PopoverTrigger,} from "@/components/ui/popover"
import { ScanText, ListEnd, TimerReset } from 'lucide-react';
import Link from 'next/link';

export const Menu = ({status="Yearly", sources}) => {
    sources = sources ? sources : ["https://ourworldindata.org/","https://ourworldindata.org/","https://ourworldindata.org/","https://ourworldindata.org/",]

    return (
        <Popover>
            <PopoverTrigger className='text-[#aaaaaa] mt-3 ml-3 rounded-[10px] w-fit px-1 py-1'><motion.div whileTap={{scale:0.95}}><ScanText size={21} /></motion.div></PopoverTrigger>
            <PopoverContent>
                <div className='border border-[#c2c2c2] flex gap-2 rounded-[8px] p-2'><div className='flex gap-2 w-[110px]'><TimerReset size={17}/>Updated</div> {status}</div>
                <div className='border border-[#c2c2c2] h-fit mt-2 flex gap-2 rounded-[8px] p-2'>
                    <div className='flex gap-2 w-[110px]'><ListEnd size={17}/>Sources</div>
                    <div className='flex flex-col underline'>
                       {sources.map((source,i) => <Link href={source} target="_blank" key={i}>{source.slice(8,-1)}</Link>)}
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )   
}