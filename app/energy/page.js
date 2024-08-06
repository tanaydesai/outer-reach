"use client"
import { Share } from "@/components/charts/share"
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"



export default function Home() {
  return (
      <div className='relative bg-[#77E4C8] overflow-x-hidden w-[100vw] h-screen'>
          <hr className="absolute left-3 md:left-7 h-full w-[1px] bg-white/[.80]"/>
          <hr className="absolute right-3 md:right-7 h-full w-[1px] bg-white/[.80]"/>

          <div className="w-[calc(100vw-24px)] md:flex md:flex-nowrap md:w-[calc(100vw-56px)] mt-[40px] md:mt-[55px] mx-auto h-[400px] md:h-[65%]">
              <div className="w-full md:w-1/4 border-r-[1px] border-b-[1px] border-white/[.80] flex-shrink-0 h-fit md:h-full">
                <div className="w-full h-fit p-5 border-b-[1px] border-white/[.80]">
                  <h1 className="text-[60px] font-planer-m">{">"} Energy</h1>
                  <h1 className="text-[25px] font-planer-m text-slate-500">Storage</h1>
                </div>
                <div className="h-fit px-5 py-3 md:p-5">
                  <div className="flex gap-2 mb-2 items-start mt-3 text-[14px] md:text-[15px] font-rajdhani-regular">
                    <div className="w-3 h-3 flex-shrink-0 bg-[#092635] mt-1"/>
                    <div>10,000 kWh is the annual avg. US energy consumption.</div>
                  </div>
                  <div className="flex gap-2 mb-2 items-start mt-3 text-[14px] md:text-[15px] font-rajdhani-regular">
                    <div className="w-3 h-3 flex-shrink-0 bg-[#092635] mt-1"/>
                    <div>10,000 kWh is the annual avg. US energy consumption.</div>
                  </div>
                  <div className="flex gap-2 mb-2 items-start mt-3 text-[14px] md:text-[15px] font-rajdhani-regular">
                    <div className="w-3 h-3 flex-shrink-0 bg-[#092635] mt-1"/>
                    <div>10,000 kWh is the annual avg. US energy consumption.</div>
                  </div>
                </div>
              </div>
                <div className="flex-1 h-full relative overflow-auto border-b-[1px] border-white/[.80]">
                  <div className="w-full h-[50px] md:h-[55px] text-[14px] font-planer-m flex overflow-auto uppercase cursor-default">
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-[#092635]  hover:opacity-70">January</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">February</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">March</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">April</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">May</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">June</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">July</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">August</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">September</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">October</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">November</div>
                    <div className="w-fit py-3 px-1 mx-3 border-t-[3px] border-t-transparent hover:opacity-70">December</div>
                  </div>
                  <div className="md:mt-10 w-full border-b-[1px] flex font-planer-m uppercase text-[15px] border-t-[1px] h-[47px] border-white/[.80]">
                      <div className="flex-1 flex items-center justify-center underline underline-offset-[15px] decoration-[#092635] decoration-[3px]">Share</div>
                      <div className="flex-1 flex items-center justify-center ">Energy Mix</div>
                      <div className="flex-1 flex items-center justify-center ">Change</div>
                      <div className="flex-1 flex items-center justify-center ">Kings</div>
                  </div>
                  <Share className="w-full h-[230px] md:h-[300px] absolute bottom-[30px]"/>
                  <div className="w-full flex h-[30px] absolute bottom-0 border-t-[1px] border-white/[.80]">
                  <Select>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Countries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Countries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Countries" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                  </div>
              </div>
          </div>
      </div>
  )
}