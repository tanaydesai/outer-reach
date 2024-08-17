"use client"
import { Share } from "@/components/charts/share"
import { Mix } from "@/components/charts/mix"
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { BarBoi } from "@/components/charts/bar"
import { BarBoi2 } from "@/components/charts/bar2"

export default function Home() {
  return (
    <div className="w-full min-h-[250vh] h-fit p-5 md:p-10 bg-[#f2eceb] ">

        <h1 className="text-[35px] px-2 py-1 md:text-[40px] text-[#231a0f] mt-10 font-planer-m">{">"} Energy | <span className="text-[#8e8e8e]">Storage</span></h1>
        
        <div className="flex gap-2 mt-3">
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

          <div className="md:flex gap-3 w-full mt-3">
            <div className="w-full flex md:flex-wrap gap-2 md:w-1/4">
              <div className="text-left w-full  border-[2px] p-3 h-[210px] rounded-[11px] border-[#231a0f]">
                  <div className="text-[16px] md:text-[18px] font-rajdhani-regular">Share of Renewables in the energy mix</div>
                  <div className="text-[80px] md:text-[100px] w-full font-rajdhani-regular">45%</div>
              </div>
              <div className="text-left w-full border-[2px] -3 p-3 h-[210px] rounded-[11px] border-[#231a0f]">
                  <div className="text-[16px] md:text-[18px] font-rajdhani-regular">Share of Renewables in the energy mix</div>
                  <div className="text-[80px] md:text-[100px] w-full font-rajdhani-regular">45%</div>
              </div>
            </div>
            <div className="flex-1 mt-3 md:mt-0 relative border-[2px] rounded-[11px] h-[430px] border-[#231a0f]">
                <BarBoi className="h-2/3 p-2 w-full absolute bottom-0"/>
              </div>
          </div>

          <div className="md:flex gap-3 w-full mt-3">
              <div className="flex-1 mt-3 md:mt-0 relative border-[2px] rounded-[11px] h-[330px] border-[#231a0f]">
                <BarBoi2 className="h-full p-2 w-full absolute bottom-0"/>
              </div>
              <div className="text-left border-[2px] p-3 h-[330px] rounded-[11px] mt-3 md:mt-0 border-[#231a0f]">
                  <div className="text-[16px] md:text-[18px] font-rajdhani-regular">Share of Renewables in the energy mix</div>
                  <div className="text-[80px] md:text-[100px] w-full font-rajdhani-regular">45%</div>
              </div>
              <div>
                {/* <div className="mt-3 md:mt-0 h-[185px] w-full border-[2px] rounded-full border-[#231a0f] "></div> */}
                <div className="md:h-[85px]"></div>
                <div className="text-left border-[2px] mt-3 p-3 h-[110px] rounded-[11px] border-[#231a0f]">
                    <div className="text-[16px] md:text-[18px] font-rajdhani-regular">Share of Renewables in the energy mix</div>
                    <div className="text-[45px] w-full font-rajdhani-regular">45%</div>
                </div>
                <div className="text-left border-[2px] mt-3 p-3 h-[110px] rounded-[11px] border-[#231a0f]">
                    <div className="text-[16px] md:text-[18px] font-rajdhani-regular">Share of Renewables in the energy mix</div>
                    <div className="text-[45px] w-full font-rajdhani-regular">45%</div>
                </div>
              </div>
          </div>
    </div>
  )
}