"use client"
export default function Home() {
  return (
    <div>
      <div className='bg-starship3 bg-cover overflow-x-hidden bg-center w-[100vw] h-full p-8'>
        <div className='border-white/70 h-screen relative'>        
          <div className='absolute bottom-10 font-rajdhani-bold text-white w-full'>
            <h1 className='text-[60px] md:text-[80px] leading-[85px] w-[500px]'>THE OUTREACH PROJECT</h1>
            <p className='text-[15px] md:text-[20px] font-rajdhani-regular w-full md:w-[50%]'>This open-source project aims to keep track of the progress and impact of the world's best frontier technology companies that are solving the worlds biggest problems across space, energy, pollution, and transport and biology.</p>
            <div className='flex gap-5 my-3  font-rajdhani-regular'>
              <button className='p-2 w-[100px] border-2 border-white/70 hover:opacity-70 rounded-sm'>About</button>
              <button className='p-2 w-[100px] border-2 border-white/70 hover:opacity-70 rounded-sm'>Start</button>
            </div>
          </div>
        </div>   
      </div>
      <div className='bg-black bg-cover overflow-x-hidden bg-center w-[100vw] h-full p-8'>
        <div className='border-white/70 h-screen relative'>
          <h1 className='text-[60px] md:text-[80px] leading-[85px] text-white w-[500px] absolute bottom-10 font-rajdhani-bold'>THE OUTREACH PROJECT</h1>
        </div>   
      </div>   
    </div>
  )
}
