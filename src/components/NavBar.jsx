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
    <header className="flex font-rale items-center justify-between flex-wrap p-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6 gap-2">
        <div className="w-5 h-5"><img src="./img/profile.png" alt="profile" /></div>
        <h1 className="font-semibold text-x1 font-rale">My Tinerary</h1>
         
        {/* <Label options={options}/> */}
      </div>
      <div className="">
        <Label options={options}/>
      </div>
      
      {/* Mobile Menu */}
      <div className="lg:hidden">
        <button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          {/* <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
              stroke="currentColor" 
              className="fill-current h-3 w-3" onClick={()=>setShow(!show)}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg> */}
          <svg class="block h-6 w-6" onClick={()=>setShow(!show)} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      { show && <Display options={options}/>}

    </header>
  )
}
