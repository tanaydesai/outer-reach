import React from 'react';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"


{/* <div className='h-[45px] fixed px-5 md:px-10 md:h-[55px] flex items-center backdrop-blur-[5px] top-0 z-10  w-full'>
    <div className='font-planer-m w-full text-center font-bold text-[20px]'>{">"}_</div>
</div> */}

export const Navbar = () => {
  return (
    <div className='fixed left-[calc(50%-175px)] md:left-10 px-2 py-2 flex items-center justify-between top-5 z-[100] min-w-[350px] md:min-w-[400px] bg-[#f2eceb]/50 backdrop-blur-[5px] rounded-[11px]'>
      <div className='font-planer-m w-fit h-fit text-center font-bold uppercase text-[#231a0f] text-[14px]'>{">_"} The Outer Reach</div>
      <Select>
        <SelectTrigger className="w-fit py-0.5 text-[12px] border-none rounded-[7px]">
            <SelectValue placeholder="Countries" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
    
  );
};
