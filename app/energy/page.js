"use client"
import { Share } from "@/components/charts/share"
import { Mix } from "@/components/charts/mix"
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="w-full min-h-[150vh] h-fit p-5 md:p-10 bg-[#f2eceb]">

        <h1 className="text-[25px] px-2 py-1 md:text-[40px] text-[#231a0f] mt-10 font-planer-m">{">"} Energy | <span className="text-[#8e8e8e]">Storage</span></h1>
        
        <div className="flex mt-3">
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
        </div>

        <Tabs defaultValue="energy" className="mt-3 mb-[100px] w-full">
            <TabsList className="w-full overflow-auto gap-0">
              <TabsTrigger value="energy">ENERGY MIX</TabsTrigger>
              <TabsTrigger value="electricity">ELECTRICITY MIX</TabsTrigger>
              <TabsTrigger value="renewables">RENEWABLES</TabsTrigger>
              <TabsTrigger value="percapita">PER CAPITA</TabsTrigger>
              <TabsTrigger value="change">CHANGE</TabsTrigger>
            </TabsList>
            <TabsContent value="energy">
              <div className="w-full relative border-[2px] h-[400px] rounded-[11px] border-[#231a0f] mt-3">
                {/* <Mix className="absolute bottom-10 w-full h-2/3"/> */}
                <div className="absolute bottom-0">
                  <div className="text-[16px] md:text-[18px] font-rajdhani-regular pt-10 px-5">Share of Renewables in the energy mix</div>
                  <div className="text-[100px] w-full font-rajdhani-regular px-5">45%</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="electricity">
              <div className="w-full relative border-[2px] rounded-[11px] border-[#231a0f] h-[550px] mt-3">
                <Mix className="absolute bottom-0 w-full h-2/3"/>
              </div>
            </TabsContent>
        </Tabs>

    </div>
  )
}