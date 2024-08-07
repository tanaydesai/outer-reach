"use client"
import { Share } from "@/components/charts/share"
import { Mix } from "@/components/charts/mix"
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



export default function Home() {
  return (
      <div className='p-5 md:p-10 w-[100vw] min-h-[150vh] text-white'>
          <div class="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          <h1 className="text-[40px] md:text-[60px] text-white mt-10 font-planer-m">{">"} Energy | <span className="text-[#9d9d9d]">Storage</span></h1>
          {/* <h1 className="text-[25px] font-planer-m text-[#9d9d9d]">Storage</h1> */}

          <Tabs defaultValue="energy" className="mt-10 w-full">
            <TabsList className="w-full overflow-auto">
              <TabsTrigger value="energy">ENERGY MIX</TabsTrigger>
              <TabsTrigger value="electricity">ELECTRICITY MIX</TabsTrigger>
              <TabsTrigger value="renewables">RENEWABLES</TabsTrigger>
              <TabsTrigger value="percapita">PER CAPITA</TabsTrigger>
              <TabsTrigger value="change">CHANGE</TabsTrigger>
            </TabsList>

            <TabsContent value="energy">
              <div className="w-full relative border-[1px] border-white/80 h-auto mt-10">
                {/* <Mix className="absolute bottom-10 w-full h-2/3"/> */}
                <div className="w-full h-[350px] pt-[100px]">
                    <div className="text-[16px] md:text-[18px] font-rajdhani-regular pt-10 px-5">Share of Renewables in the energy mix</div>
                    <div className="text-[100px] w-full font-rajdhani-regular px-5">45%</div>
                </div>
                <div className="absolute bottom-0 flex w-full">
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
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-10 w-full">
                <div className="h-[100px] justify-between items-center border-b-[1.5px] border-white/80 flex">
                  <div className="text-[20px] w-1/2 font-rajdhani-regular">EQUIVALENCE</div>
                  <div className="text-[40px] w-1/2 font-rajdhani-regular">10, 000 <span className="text-[20px]">KWh</span></div>
                </div>
                <div className="mt-5 h-[100px] justify-between items-center border-b-[1.5px] border-white/80 flex">
                  <div className="text-[20px] w-1/2 font-rajdhani-regular">EQUIVALENCE</div>
                  <div className="text-[40px] w-1/2 font-rajdhani-regular">10, 000 <span className="text-[20px]">KWh</span></div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="electricity">
              <div className="w-full relative border-[1px] border-white/80 h-[550px] mt-10">
                <Mix className="absolute bottom-10 w-full h-2/3"/>
                <div className="absolute bottom-0 flex w-full">
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
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="flex-1">
                      <SelectValue placeholder="Source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-10 w-full">
                <div className="h-[100px] justify-between items-center border-b-[1.5px] border-white/80 flex">
                  <div className="text-[20px] w-1/2 font-rajdhani-regular">EQUIVALENCE</div>
                  <div className="text-[40px] w-1/2 font-rajdhani-regular">10, 000 <span className="text-[20px]">KWh</span></div>
                </div>
                <div className="mt-5 h-[100px] justify-between items-center border-b-[1.5px] border-white/80 flex">
                  <div className="text-[20px] w-1/2 font-rajdhani-regular">EQUIVALENCE</div>
                  <div className="text-[40px] w-1/2 font-rajdhani-regular">10, 000 <span className="text-[20px]">KWh</span></div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
      </div>
  )
}