"use client"
import React, { useState, useEffect } from "react"

const chars = "!@#$%^&*()+=[]{}|;:,.<>?";

export const DecryptText = ({
  text="Tanay Desai is a multi d",
  interval = 45,
  className
}) => {
  const [outputText, setOutputText] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let timer;

    if (outputText !== text) {
      timer = setInterval(() => {
        if (outputText.length < text.length) {
          setOutputText((prev) => prev + text[prev.length]);
        } else {
          clearInterval(timer);
        }
      }, interval);
    }

    return () => clearInterval(timer);
  }, [text, interval, outputText]);

  const remainder =
    outputText.length < text.length
      ? text
          .slice(outputText.length)
          .split("")
          .map(() => chars[Math.floor(Math.random() * chars.length)])
          .join("")
      : "";

  if (!isMounted) {
    return <span> </span>;
  }

  return (
    <div className={`h-[27px] flex items-center ${className}`}>
      {/* ml-1.5 mt-5  */}
      {outputText}
      {remainder}
    </div>
  );
};


{/* <div className='w-full flex gap-2 px-2 py-5 items-start'>
  <div className='w-1/3 h-full'>
    <div>
      <div className='h-[170px] w-full rounded-t-[30px] bg-[#EBE3D5]'></div>
      <svg viewBox="0 0 645 120" fill="#EBE3D5" xmlns="http://www.w3.org/2000/svg" data-element="svg"><path d="M1 0L1 2.47077C1.00002 22.5894 15.943 39.5775 35.8973 42.1439L603.897 115.199C627.817 118.276 649 99.6429 649 75.5258L649 0" class="fill-mushroom-50 stroke-mushroom-300" data-element="path"></path></svg>
    </div>
    <div className='-mt-[40px]'>
      <svg viewBox="0 0 645 120" fill="#776B5D" xmlns="http://www.w3.org/2000/svg" className='rotate-180 -mb-1' data-element="svg"><path d="M1 0L1 2.47077C1.00002 22.5894 15.943 39.5775 35.8973 42.1439L603.897 115.199C627.817 118.276 649 99.6429 649 75.5258L649 0" class="fill-mushroom-50 stroke-mushroom-300" data-element="path"></path></svg>
      <div className='h-[400px] w-full rounded-b-[30px] bg-[#776B5D]'></div>
    </div>
  </div>

  <div className='flex-1'>
    <div className='h-[400px] rounded-[30px] bg-[#776B5D]'><EnergyShare className='w-[90%] h-[90%] mx-auto mt-2'/></div>
    <div className='flex gap-2 w-full mt-2'>
      <div className='h-[260px] w-1/2 rounded-[30px] bg-[#EBE3D5]'></div>
      <div className='h-[260px] w-1/2  rounded-[30px] bg-[#EBE3D5]'></div>
    </div>
  </div>
</div> */}