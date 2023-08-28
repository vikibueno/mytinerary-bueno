import  { Link as Anchor } from "react-router-dom"

export default function Display({ options }) {
  return (
    <div className="w-full block flex-grow lg:flex lg:items-center lg:auto"> 
      <div className="text-sm lg:flex-grow">
      {options.map(each=><Anchor className="block mt-4 hover:text-white mr-4" key={each.to} to={each.to}>{each.title}</Anchor>)}
        {/* <button class="font-semibold w-[100px] h-[35px] flex gap-1 items-center p-2  rounded-[10px] bg-[#4F46E5] hover:bg-blue-700 text-white text-[18px] leading-[31.92px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          Login
        </button> */}
        <p className="block mt-4 hover:text-white mr-4">Login</p>
      </div>
    </div>
 
  )
}
