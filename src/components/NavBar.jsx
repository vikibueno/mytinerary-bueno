import { useState } from "react"
import { Link as Anchor } from "react-router-dom"
import Display from "./Display"
import Label from "./Label"

export default function NavBar() {
  let [show,setShow] = useState(false)
  let options = [
    {to: "/", title: "Home"},
    {to: "/cities", title: "Cities"},
  ]

  return ( 
    <header className="w-4/5 flex justify-between items-center">
      <div className="w-full flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-5 h-5"><img src="./img/profile.png" alt="profile" /></div>
            <h1>My Tinerary</h1>
          </div>
        <Label options={options}/>
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
      stroke="currentColor" 
      className="w-[35px] h-[35px] md:hidden bg-transparent 
      text-blue-700 font-semibold hover:text-white
      border-blue-500  rounded-[10px]" onClick={()=>setShow(!show)}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      { show && <Display options={options}/>}

    </header>
  )
}
