import { useState } from "react"
import { Link as Anchor } from "react-router-dom"
import Display from "./Display"

export default function NavBar() {
  let [show,setShow] = useState(false)
  return ( 
    <header className="md:h-14 md:w-4/5 md:mt-4 flex justify-between items-center">
    <div className="text-[22px] flex justify-between items-center gap-1 font-bold leading-[42.56px] w-[183px] h-[43px]">
      <div className="w-5 h-5"><img src="./img/profile.png" alt="profile" /></div>
      <p>My Tinerary</p>
      
    </div>
    <nav className="lg:w-[330px] lg:h-[43px] flex gap-[8px] justify-end items-center"> 
        <div className="lg:w-[69px] lg:h[32px] text-[18px] leading-[31.92px] font-bold"><Anchor to='/'>Home</Anchor></div>
        <div className="lg:w-[62px] lg:h[32px] text-[18px] leading-[31.92px] font-bold"><Anchor to='cities'>Cities</Anchor></div>
        <button class="font-bold w-[116px] h-[46px] gap-[6px] rounded-[10px] bg-[#4F46E5] hover:bg-blue-700 text-white text-[18px] leading-[31.92px]">Login</button>
    </nav> 

    { show && <Display/>}

    </header>
  )
}
