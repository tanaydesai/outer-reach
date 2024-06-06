import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div className='w-full fixed px-10 border-b-2 border-white/70 top-0 h-[60px] flex text-white text-[17px] font-supreme'>
        <div className='border-l-2 group border-r-2 border-white/70 cursor-default flex-1 py-4 px-3'>
            <div className='w-fit'>
                SPACE
                <div class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </div>   
            
        </div>
        <div className=' border-r-2 group border-white/70 cursor-default flex-1 py-4 px-3 '>
            <div className='w-fit'>
                ENERGY
                <div class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </div>   
        </div>
        <div className=' border-r-2 group border-white/70 cursor-default flex-1 py-4 px-3 '>
            <div className='w-fit'>
                POLLUTION
                <div class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </div>   
        </div>
        <div className=' border-r-2 group border-white/70 cursor-default flex-1 py-4 px-3 '>
            <div className='w-fit'>
                TRANSPORT
                <div class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </div>   
        </div>
        <div className=' border-r-2 group border-white/70 cursor-default flex-1 py-4 px-3 '>
            <div className='w-fit'>
                BIO
                <div class="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
            </div>   
        </div>
    </div>
  );
};
