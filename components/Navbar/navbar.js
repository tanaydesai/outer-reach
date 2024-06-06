import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div className='w-full fixed border-b-2 border-white/70 top-0 h-[60px] flex overflow-auto text-white text-[17px] font-rajdhani-bold'>
        <div className=' group border-r-2 border-white/70 cursor-default min-w-[125px] md:flex-1 md:min-w-[0px] py-4 px-3'>
            <div className='w-fit'>
                SPACE
                <div class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </div>   
        </div>
        <div className=' border-r-2 group border-white/70 cursor-default min-w-[125px] md:flex-1 md:min-w-[0px] py-4 px-3 '>
            <div className='w-fit'>
                ENERGY
                <div class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </div>   
        </div>
        <div className=' border-r-2 group border-white/70 cursor-default min-w-[125px] md:flex-1 md:min-w-[0px] py-4 px-3 '>
            <div className='w-fit'>
                POLLUTION
                <div class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </div>   
        </div>
        <div className=' border-r-2 group border-white/70 cursor-default min-w-[125px] md:flex-1 md:min-w-[0px] py-4 px-3 '>
            <div className='w-fit'>
                TRANSPORT
                <div class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </div>   
        </div>
        <div className='group border-white/70 cursor-default min-w-[125px] md:flex-1 md:min-w-[0px] py-4 px-3 '>
            <div className='w-fit'>
                BIO
                <div class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </div>   
        </div>
    </div>
  );
};
