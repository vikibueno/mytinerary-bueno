import  { Link as Anchor } from "react-router-dom"

export default function Label({ options }) {
  return (
    <div className="hidden md:flex ms-5 runded-x1 items-center gap-3"> 
        {options.map(each=><Anchor key={each.to} to={each.to}>{each.title}</Anchor>)}
        <button class="bg-transparent flex gap-1 hover:bg-blue-500
        text-blue-700 font-semibold hover:text-white py-2 px-4 
        border border-blue-500 hover:border-transparent rounded-[10px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <span>Login</span>
        </button>
    </div>
 
  )
}
