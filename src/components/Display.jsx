import React from 'react'

export default function Display() {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[40px] h-[40px]" onClick={()=>setShow(!show)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <nav className="flex ms-5 absolute top-[70px] left-[100px] gap-2 flex flex-col bg-pink-400 p-2 rounded-xl"> 
            <div className="lg:w-[69px] lg:h[32px] text-[18px] leading-[31.92px] font-bold">Home</div>
            <div className="lg:w-[62px] lg:h[32px] text-[18px] leading-[31.92px] font-bold">Cities</div>
            <button class="font-bold xl:w-[116px] xl:h-[46px] xl:gap-[6px] xl:rounded-[10px] bg-[#4F46E5] hover:bg-blue-700 text-white text-[18px] leading-[31.92px]">Login</button>
        </nav> 
    </div>
 
  )
}
