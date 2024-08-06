"use client"
import { Share } from "@/components/charts/share"
import { Mix } from "@/components/charts/mix"
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export default function Home() {
  return (
      <div className='relative bg-purple-600 overflow-x-hidden w-[100vw] h-screen'>
          <hr className="fixed left-3 md:left-7 h-screen w-[1px] bg-white/[.80]"/>
          <hr className="fixed right-3 md:right-7 h-screen w-[1px] bg-white/[.80]"/>

          <div className="w-[calc(100vw-24px)] mb-[100px] md:mb-0 md:flex md:flex-nowrap md:w-[calc(100vw-56px)] mt-[40px] md:mt-[55px] mx-auto h-auto md:h-[65%]">
                <div className="w-full md:w-1/4 md:border-r-[1px] border-b-[1px] border-white/[.80] flex-shrink-0 h-fit md:h-full">
                  <div className="w-full h-fit p-5 border-b-[1px] border-white/[.80]">
                    <h1 className="text-[60px] font-planer-m">{">"} Energy</h1>
                    <h1 className="text-[25px] font-planer-m text-[#092635]">Storage</h1>
                  </div>
                  <div className="h-fit w-full px-5 py-3 md:p-5">
                    <div className="flex gap-2 mb-2 items-start mt-3 text-[15px] font-rajdhani-regular">
                      <div className="w-3 h-3 flex-shrink-0 bg-[#092635] mt-1"/>
                      <div>10,000 kWh is the annual avg. US energy consumption.</div>
                    </div>
                    <div className="flex gap-2 mb-2 items-start mt-3 text-[15px] font-rajdhani-regular">
                      <div className="w-3 h-3 flex-shrink-0 bg-[#092635] mt-1"/>
                      <div>10,000 kWh is the annual avg. US energy consumption.</div>
                    </div>
                    <div className="flex gap-2 mb-2 items-start mt-3 text-[15px] font-rajdhani-regular">
                      <div className="w-3 h-3 flex-shrink-0 bg-[#092635] mt-1"/>
                      <div>10,000 kWh is the annual avg. US energy consumption.</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 h-full  relative overflow-auto border-b-[1px] border-white/[.80]">
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
                  <Tabs defaultValue="share">
                    <TabsList className="md:mt-10 w-full border-b-[1px] flex  border-t-[1px] h-[47px] border-white/[.80]">
                      <TabsTrigger className="flex-1 flex items-center justify-center" value="share">Share</TabsTrigger>
                      <TabsTrigger className="flex-1 flex items-center justify-center" value="energy">Energy Mix</TabsTrigger>
                      <TabsTrigger className="flex-1 flex items-center justify-center" value="change">Change</TabsTrigger>
                      <TabsTrigger className="flex-1 flex items-center justify-center" value="kings">Kings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="share">
                      <div className="w-full justify-center md:px-2 items-center md:flex md:h-[290px] md:mt-8">
                          <div>
                            <div className="text-[16px] md:text-[18px] font-rajdhani-regular pt-10 px-5">Share of Renewables in the energy mix</div>
                            <div className="text-[100px] w-full font-rajdhani-regular px-5">45%</div>
                          </div>
                          <Share className="h-[210px] mx-auto md:mx-0 md:h-[290px]"/>
                      </div>
                    </TabsContent>
                    <TabsContent value="energy">
                      <Mix className="w-full h-[210px] md:h-[290px] md:mt-8"/>
                    </TabsContent>
                  </Tabs>

                  <div className="w-full flex h-[40px] border-t-[1px] border-white/[.80]">
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